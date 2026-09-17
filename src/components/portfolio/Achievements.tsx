import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import GlassPanel from "@/components/portfolio/GlassPanel";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { achievements } from "@/data/portfolio";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const Achievements = () => (
  <GlassPanel id="achievements" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="Achievements"
      title="Proof of Impact."
      text="Competition results and project outcomes that demonstrate measurable work across analytics, BI, machine learning and AI."
      icon={Trophy}
    />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {achievements.map(({ icon: Icon, title, text }) => (
        <motion.div
          key={title}
          variants={staggerItem}
          className="rounded-2xl border border-slate-200/60 bg-white/60 p-5 backdrop-blur-sm transition hover:border-teal-400/50 hover:bg-white/80"
        >
          <Icon className="mb-4 text-teal-500" size={26} />
          <h3 className="font-black text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
        </motion.div>
      ))}
    </motion.div>
  </GlassPanel>
);

export default Achievements;