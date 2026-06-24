import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

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
      return (
        <main className="min-h-screen bg-[#020617] text-[#F1F5F9] flex items-center justify-center px-6">
          <div className="max-w-md text-center space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#F472B6]">Sub.Stitch</p>
            <h1 className="text-2xl font-bold">The website could not render.</h1>
            <p className="text-sm text-[#94A3B8]">
              Please refresh the page or open the subtitle app directly.
            </p>
            <a
              href="https://studio.substitch.app/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#F472B6] to-[#6366F1] px-5 py-3 text-sm font-bold text-slate-950"
            >
              Open App
            </a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
