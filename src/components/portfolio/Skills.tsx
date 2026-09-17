import { motion } from "framer-motion";
import { BarChart3, Brain, ChevronRight, Database, GitBranch, HardDrive, Shuffle, Warehouse } from "lucide-react";
import GlassPanel from "@/components/portfolio/GlassPanel";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { dataEngineeringJourney, skillCategories } from "@/data/portfolio";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const dotPattern = {
  backgroundImage: "radial-gradient(circle at center, rgba(13,148,136,0.12) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
};

const pipelinePhases = [
  { phase: "Source", icon: Database },
  { phase: "Ingestion", icon: HardDrive },
  { phase: "Storage", icon: Database },
  { phase: "Transform", icon: Shuffle },
  { phase: "Warehouse", icon: Warehouse },
  { phase: "Analyze", icon: BarChart3 },
  { phase: "Model", icon: Brain },
] as const;

const DataEngineeringJourney = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="relative mt-8 overflow-hidden rounded-3xl border border-teal-200/60 bg-gradient-to-br from-teal-50 via-white to-teal-50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-8"
  >
    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-200/30 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-teal-100/40 blur-3xl" />

    <div className="relative flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
      <GitBranch size={18} /> {dataEngineeringJourney.eyebrow}
    </div>
    <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
      {dataEngineeringJourney.title}
    </h3>
    <p className="mt-3 max-w-3xl text-slate-600">{dataEngineeringJourney.text}</p>

    <div className="relative mt-8 hidden md:block">
      <div aria-hidden="true" className="absolute inset-x-8 top-6 h-px overflow-hidden rounded-full bg-teal-200/60">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={viewportOnce}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-teal-500 to-transparent"
        />
      </div>
      <div className="relative flex items-center justify-between">
        {dataEngineeringJourney.nodes.map((node) => (
          <span
            key={node}
            className="rounded-xl border border-teal-200/70 bg-white/90 px-3.5 py-2 text-sm font-bold text-teal-700 shadow-sm"
          >
            {node}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-4 grid gap-2 md:hidden">
      {dataEngineeringJourney.nodes.map((node, index) => (
        <div key={node} className="flex items-center gap-2">
          <span className="justify-self-start rounded-xl border border-teal-200/70 bg-white/80 px-3.5 py-2 text-sm font-bold text-teal-700 shadow-sm">
            {node}
          </span>
          {index < dataEngineeringJourney.nodes.length - 1 ? (
            <ChevronRight size={14} className="shrink-0 text-teal-400" />
          ) : null}
        </div>
      ))}
    </div>

    <div className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-2">
      {pipelinePhases.map(({ phase, icon: Icon }, index) => (
        <div key={phase} className="flex items-center gap-1">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-100 bg-white/70 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 backdrop-blur-sm">
            <Icon size={12} className="text-teal-500" /> {phase}
          </span>
          {index < pipelinePhases.length - 1 ? (
            <span className="px-0.5 text-[11px] font-bold text-teal-300">→</span>
          ) : null}
        </div>
      ))}
      <span className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg shadow-teal-500/20">
        Now going deeper
      </span>
    </div>
  </motion.div>
);

const Skills = () => (
  <GlassPanel id="skills" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="Skills & Expertise"
      title="A Growing Data Stack."
      text="Technologies used to build analytics solutions, business intelligence dashboards, machine learning systems and AI applications — alongside an active move into data engineering."
      icon={Brain}
    />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {skillCategories.map(({ title, icon: Icon, items }) => (
        <motion.div
          key={title}
          variants={staggerItem}
          className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 p-5 backdrop-blur-sm transition hover:border-teal-400/50 hover:bg-white/80"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full"
            style={dotPattern}
          />
          <Icon aria-hidden="true" size={44} className="pointer-events-none absolute -bottom-3 -right-2 text-teal-100" />
          <h3 className="flex items-center gap-2 font-black text-teal-600">
            <Icon size={18} /> {title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200/60 bg-white/60 px-3 py-1.5 text-sm text-slate-700 backdrop-blur-sm transition hover:border-teal-400/50"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>

    <DataEngineeringJourney />
  </GlassPanel>
);

export default Skills;