import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, ExternalLink, Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { projects } from "@/data/portfolio";
import type { Project, ProjectVisual as ProjectVisualType } from "@/data/portfolio";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { innerCardClasses } from "@/lib/styles";

const PipelineDiagram = ({ stages }: { stages: string[] }) => (
  <div className="grid gap-2 md:flex md:flex-wrap md:items-center">
    {stages.map((stage, index) => (
      <div key={stage} className="flex items-center gap-2">
        <span className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
          {stage}
        </span>
        {index < stages.length - 1 ? (
          <>
            <ChevronRight size={16} className="hidden shrink-0 text-teal-500 md:block" />
            <ChevronDown size={14} className="shrink-0 text-teal-400 md:hidden" />
          </>
        ) : null}
      </div>
    ))}
  </div>
);

const ProjectVisual = ({ project }: { project: Project }) => {
  const isLocalScreenshot = project.image.startsWith("/images/");
  if (isLocalScreenshot) {
    return (
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover/card:scale-105"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="relative h-44 overflow-hidden">
      <PlaceholderVisual visual={project.visual} title={project.title} />
      <span className="absolute bottom-2 right-2 rounded-md bg-white/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 backdrop-blur">
        Preview · replace with screenshot
      </span>
    </div>
  );
};

const PlaceholderVisual = ({ visual, title }: { visual: ProjectVisualType; title: string }) => {
  if (visual === "geospatial") {
    const cells = ["#14b8a6", "#0ea5e9", "#10b981", "#f59e0b", "#6366f1", "#14b8a6", "#0ea5e9", "#f59e0b", "#10b981", "#6366f1", "#14b8a6", "#0ea5e9", "#f59e0b", "#6366f1", "#10b981", "#14b8a6", "#0ea5e9", "#f59e0b"];
    return (
      <div className="flex h-full w-full items-end gap-[3px] p-4">
        <div className="grid h-full w-full shrink-0 grid-cols-6 auto-rows-fr gap-[3px]">
          {cells.map((c, i) => (
            <span key={i} className="rounded-[3px] opacity-80" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="ml-3 hidden shrink-0 flex-col gap-1.5 sm:flex">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Satellite</span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Classification</span>
        </div>
      </div>
    );
  }
  if (visual === "climate") {
    const bars = [34, 52, 41, 63, 58, 74, 69, 87, 64, 79];
    return (
      <div className="flex h-full w-full items-end gap-2 p-5">
        <div className="flex h-full flex-1 items-end gap-[6px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ height: `${h}%`, background: `linear-gradient(180deg, ${i % 3 === 0 ? "#f59e0b" : "#14b8a6"}, ${i % 3 === 0 ? "#d97706" : "#0d9488"})`, opacity: 0.85 }}
            />
          ))}
        </div>
        <div className="hidden shrink-0 flex-col gap-1.5 sm:flex">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Climate</span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Risk Model</span>
        </div>
      </div>
    );
  }
  if (visual === "dashboard") {
    return (
      <div className="flex h-full w-full items-stretch gap-3 p-4">
        <div className="flex flex-1 flex-col justify-between gap-2">
          <div className="grid grid-cols-2 gap-2">
            <span className="rounded-lg bg-white/60 px-2 py-1.5 backdrop-blur-sm"><span className="block text-[8px] font-black uppercase tracking-wider text-slate-400">Revenue</span><span className="block text-xs font-black text-slate-800">+18.4%</span></span>
            <span className="rounded-lg bg-white/60 px-2 py-1.5 backdrop-blur-sm"><span className="block text-[8px] font-black uppercase tracking-wider text-slate-400">Orders</span><span className="block text-xs font-black text-slate-800">2,418</span></span>
          </div>
          <svg viewBox="0 0 120 48" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
            <polyline
              points="0,38 15,30 30,33 45,22 60,26 75,16 90,19 105,8 120,11"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="0,38 15,30 30,33 45,22 60,26 75,16 90,19 105,8 120,11"
              fill="url(#dashgrad)"
              opacity="0.25"
              stroke="none"
            />
            <defs>
              <linearGradient id="dashgrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hidden shrink-0 flex-col justify-center gap-1.5 sm:flex">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">KPI</span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Dashboard</span>
        </div>
      </div>
    );
  }
  const statRows = [
    { label: "Wait time", value: "↑", weight: "35%" },
    { label: "SMS reminder", value: "↓", weight: "60%" },
    { label: "No-show", value: "Σ", weight: "18%" },
  ];
  return (
    <div className="flex h-full w-full items-center gap-4 p-5">
      <div className="flex flex-1 flex-col gap-2">
        {statRows.map((row) => (
          <div key={row.label} className="flex items-center gap-2 rounded-lg bg-white/55 px-2.5 py-1.5 backdrop-blur-sm">
            <span className="w-20 shrink-0 text-[10px] font-semibold text-slate-500">{row.label}</span>
            <span className="w-4 text-xs font-black text-teal-600">{row.value}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200/70">
              <span className="block h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600" style={{ width: row.weight }} />
            </span>
          </div>
        ))}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {["EDA", "HYPOTHESIS TEST", "INSIGHTS"].map((chip) => (
            <span key={chip} className="rounded-md bg-teal-50/80 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-teal-700 backdrop-blur-sm">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-black/25 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">Analytics</span>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  number: number;
  onOpen: () => void;
}

const ProjectCard = ({ project, number, onOpen }: ProjectCardProps) => (
  <motion.article
    variants={staggerItem}
    className="group flex overflow-hidden rounded-3xl border border-slate-200/60 bg-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:flex-col"
  >
    <button
      type="button"
      onClick={onOpen}
      className="group/card flex h-auto w-full flex-col text-left"
      aria-label={`Open project: ${project.title}`}
    >
      <div className="relative bg-gradient-to-br from-teal-50 to-slate-100">
        <ProjectVisual project={project} />
        <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-sm font-black text-white shadow-lg shadow-teal-500/20">
          {String(number).padStart(2, "0")}
        </span>
        <span className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-xl ${project.accent} text-white shadow-md`}>
          <project.icon size={20} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600">{project.category}</p>
        <h3 className="mt-1.5 text-xl font-black leading-tight text-slate-900">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-lg bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200/60 pt-4 text-sm text-slate-600">
          <span>{project.badge}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700 transition group-hover/card:text-teal-600">
            View Project <ChevronRight size={16} />
          </span>
        </div>
      </div>
    </button>
  </motion.article>
);

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <Dialog
    open={project !== null}
    onOpenChange={(open) => {
      if (!open) onClose();
    }}
  >
    <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-3xl border border-slate-200/60 bg-white sm:rounded-3xl">
      {project ? (
        <>
          <DialogHeader>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">{project.category}</p>
            <DialogTitle className="pr-8 text-2xl font-black text-slate-900 md:text-3xl">{project.title}</DialogTitle>
            <DialogDescription className="text-slate-600">{project.description}</DialogDescription>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-lg bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  {tag}
                </span>
              ))}
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {project.pipeline ? (
              <div className={`${innerCardClasses} p-4`}>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Architecture</p>
                <PipelineDiagram stages={project.pipeline} />
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <DetailCard label="Problem" text={project.details.problem} />
              <DetailCard label="Approach" text={project.details.approach} />
              <DetailCard label="Data" text={project.details.data} />
              <DetailCard label="Key Findings" text={project.details.keyFindings} />
            </div>

            <DetailCard label="Impact" text={project.details.impact} highlight />

            <div className="grid gap-4 sm:grid-cols-2">
              {project.details.more.map(({ label, text }) => (
                <div key={label} className={`${innerCardClasses} p-4`}>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="text-sm font-semibold text-slate-700">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 border-t border-slate-200/60 pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-5 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition hover:translate-y-0.5"
              >
                <SiGithub size={17} /> View on GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-5 text-sm font-bold text-slate-700 backdrop-blur-sm transition hover:bg-slate-50"
                >
                  <ExternalLink size={17} /> Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </DialogContent>
  </Dialog>
);

const DetailCard = ({ label, text, highlight = false }: { label: string; text: string; highlight?: boolean }) => (
  <div className={`${innerCardClasses} p-4`}>
    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-teal-600">{label}</p>
    <p className={`text-sm leading-6 ${highlight ? "font-semibold text-slate-800" : "text-slate-600"}`}>{text}</p>
  </div>
);

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Real Projects. Real Impact."
        text="A selection of work spanning data analytics, business intelligence, machine learning, AI and growing data engineering expertise."
        icon={Folder}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} number={index + 1} onOpen={() => setSelected(project)} />
        ))}
      </motion.div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;