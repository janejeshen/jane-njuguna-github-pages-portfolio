import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlassPanel from "@/components/portfolio/GlassPanel";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { capabilities, hero } from "@/data/portfolio";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const About = () => (
  <GlassPanel id="about" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="About"
      title="One career across Analytics, Engineering & Data Science."
    />

    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="space-y-6"
      >
        <p className="text-xl leading-9 text-slate-600 md:text-2xl md:leading-10">
          {hero.positioning}
        </p>

        <div className="relative overflow-hidden rounded-2xl border border-teal-200/60 bg-gradient-to-br from-teal-50/80 to-white p-5 pl-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal-500 to-teal-600" />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-teal-600">Grow</p>
          <h3 className="mt-2 text-lg font-black text-slate-900">Deepening data engineering</h3>
          <p className="mt-2 leading-7 text-slate-600">{hero.deGrowth}</p>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col"
        aria-label="Professional capability flow: analyze to engineer to model"
      >
        {capabilities.map((cap, index) => (
          <div key={cap.key} className="flex flex-col">
            <motion.div
              variants={staggerItem}
              className="rounded-2xl border border-slate-200/60 bg-white/60 p-5 backdrop-blur-sm transition hover:border-teal-400/50 hover:bg-white/80"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  <cap.icon size={22} />
                </span>
                <span className="rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                  {cap.label}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-black text-slate-900">{cap.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{cap.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cap.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-slate-200/60 bg-white/60 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {index < capabilities.length - 1 ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 py-2 pl-5"
                aria-hidden="true"
              >
                <span className="h-10 w-px bg-gradient-to-b from-teal-300 to-teal-500" />
                <ChevronDown size={16} className="text-teal-400" />
              </motion.div>
            ) : null}
          </div>
        ))}
      </motion.div>
    </div>
  </GlassPanel>
);

export default About;