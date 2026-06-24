import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Go to top"
          title="Go to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.94 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#334155]/70 bg-[#0F172A]/90 text-[#F1F5F9] shadow-lg shadow-black/25 backdrop-blur-md transition-colors duration-200 hover:border-[#F472B6]/55 hover:bg-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F472B6]/45 focus:ring-offset-2 focus:ring-offset-[#020617] sm:bottom-6 sm:right-6"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
