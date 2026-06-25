import { Component, type ErrorInfo, type ReactNode } from "react";
import { TRANSLATIONS } from "../data/translations";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem("subai-site-lang");
    return saved && TRANSLATIONS[saved] ? saved : "en";
  } catch {
    return "en";
  }
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  declare props: Readonly<ErrorBoundaryProps>;

  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Sub.Stitch website render failure", { error, componentStack: info.componentStack });
  }

  render() {
    if (this.state.hasError) {
      const dictionary = TRANSLATIONS[getSavedLanguage()] || TRANSLATIONS.en;

      return (
        <main className="min-h-screen bg-[#020617] text-[#F1F5F9] flex items-center justify-center px-6">
          <div className="max-w-md text-center space-y-6">
            <h1 className="text-2xl font-bold tracking-tight">Sub.Stitch</h1>
            <a
              href="https://studio.substitch.app/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#F472B6] to-[#6366F1] px-5 py-3 text-sm font-bold text-slate-950"
            >
              {dictionary.openApp}
            </a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
