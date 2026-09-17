import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { viewportOnce } from "@/lib/animations";

interface FadeInProps {
  className?: string;
  delay?: number;
}

const FadeIn = ({ className = "", delay = 0, children }: PropsWithChildren<FadeInProps>) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;