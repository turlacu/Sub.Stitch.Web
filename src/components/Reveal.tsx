import { ReactNode } from "react";
import { motion } from "motion/react";
import { revealViewport, smoothRevealTransition } from "../lib/motionPresets";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.985, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={revealViewport}
      transition={smoothRevealTransition(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
