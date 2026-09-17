import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { IconType } from "@/data/portfolio";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  icon?: IconType;
}

const SectionHeading = ({ eyebrow, title, text, icon: Icon }: SectionHeadingProps) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-8 max-w-3xl">
    {eyebrow && (
      <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
        {Icon ? <Icon size={18} /> : null}
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">{title}</h2>
    {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
  </motion.div>
);

export default SectionHeading;