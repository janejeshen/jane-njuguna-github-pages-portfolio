import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import GlassPanel from "@/components/portfolio/GlassPanel";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { careerTimeline, experience } from "@/data/portfolio";
import type { ExperienceEntry } from "@/data/portfolio";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { innerCardClasses } from "@/lib/styles";

const TimelineNode = ({ featured }: { featured: boolean }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={viewportOnce}
    transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    aria-hidden="true"
    className={`absolute left-0 top-0 grid h-10 w-10 shrink-0 place-items-center rounded-full border ${
      featured
        ? "border-teal-500/30 bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30"
        : "border-teal-200 bg-gradient-to-br from-white to-teal-50 text-teal-600 shadow-sm"
    }`}
  >
    <Briefcase size={17} />
  </motion.span>
);

interface ExperienceEntryCardProps {
  entry: ExperienceEntry;
  index: number;
}

const ExperienceEntryCard = ({ entry, index }: ExperienceEntryCardProps) => {
  const featured = index === 0;
  return (
    <li className="relative pl-14 sm:pl-16">
      <TimelineNode featured={featured} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="rounded-3xl border border-slate-200/60 bg-white/60 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:p-7"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-black leading-tight text-slate-900 md:text-2xl">{entry.company}</h3>
            <p className="mt-1 text-base font-semibold text-teal-600">{entry.role}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {entry.employmentType ? (
              <span className="rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-teal-500/20">
                {entry.employmentType}
              </span>
            ) : null}
            {entry.period ? (
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
                {entry.period}
              </span>
            ) : null}
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base md:leading-7">{entry.summary}</p>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-5 grid gap-3 sm:grid-cols-2"
        >
          {entry.contributions.map(({ category, description, icon: Icon }) => (
            <motion.li
              key={category}
              variants={staggerItem}
              className={`${innerCardClasses} p-4 transition hover:-translate-y-0.5 hover:border-teal-400/50 hover:bg-white/80`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-teal-600">
                <Icon size={17} />
              </span>
              <p className="mt-3 text-sm font-bold text-slate-900">{category}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </li>
  );
};

const Experience = () => (
  <GlassPanel id="experience" className="p-6 md:p-8">
    <SectionHeading
      eyebrow="Experience"
      title="Where Data Meets Business."
      text="Turning business data into insights, dashboards and decisions — while continuing to build toward modern data systems and engineering."
      icon={Briefcase}
    />

    <div className="relative mt-10">
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-teal-300 via-teal-400 to-slate-200"
      />
      <ol className="space-y-10">
        {experience.map((entry, index) => (
          <ExperienceEntryCard key={entry.company} entry={entry} index={index} />
        ))}
      </ol>
    </div>
  </GlassPanel>
);

const JourneyNode = ({ number, current, className = "" }: { number: number; current: boolean; className?: string }) => (
  <span
    className={`grid h-10 w-10 place-items-center rounded-full text-sm font-black ${
      current
        ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25 ring-4 ring-teal-100"
        : "border border-slate-300 bg-white text-slate-700 shadow-sm"
    } ${className}`}
  >
    {String(number).padStart(2, "0")}
  </span>
);

const CurrentBadge = () => (
  <span className="rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
    Current
  </span>
);

const DesktopJourney = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="relative hidden lg:block"
  >
    <div
      aria-hidden="true"
      className="absolute inset-x-8 top-[39px] h-0.5 rounded-full bg-gradient-to-r from-slate-200 via-teal-300 to-teal-500"
    />
    <div className="grid grid-cols-4 gap-6">
      {careerTimeline.map((stage, index) => {
        const current = index === careerTimeline.length - 1;
        return (
          <motion.article
            key={stage.title}
            variants={staggerItem}
            className={`group relative overflow-hidden rounded-2xl border bg-white/60 p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-teal-400/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
              current
                ? "border-teal-300/70 shadow-[0_8px_32px_rgba(13,148,136,0.08)]"
                : "border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <JourneyNode number={index + 1} current={current} />
              {current ? <CurrentBadge /> : null}
            </div>
            <div className="mt-4">
              <h3 className={`flex items-center gap-1.5 font-bold tracking-tight ${current ? "text-teal-700" : "text-slate-900"}`}>
                <stage.icon size={15} className={current ? "text-teal-600" : "text-teal-500"} />
                {stage.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{stage.description}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  </motion.div>
);

const MobileJourney = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className="relative lg:hidden"
  >
    <div
      aria-hidden="true"
      className="absolute bottom-6 left-[19px] top-2 w-px bg-gradient-to-b from-slate-200 via-teal-300 to-teal-500"
    />
    <ol className="space-y-4">
      {careerTimeline.map((stage, index) => {
        const current = index === careerTimeline.length - 1;
        return (
          <motion.li key={stage.title} variants={staggerItem} className="relative pl-14">
            <JourneyNode number={index + 1} current={current} className="absolute left-0 top-0" />
            <div
              className={`rounded-2xl border bg-white/60 p-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-teal-400/50 hover:shadow-[0_10px_32px_rgba(0,0,0,0.06)] ${
                current
                  ? "border-teal-300/70 shadow-[0_6px_24px_rgba(13,148,136,0.08)]"
                  : "border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
              }`}
            >
              <h3 className={`flex items-center gap-1.5 font-bold tracking-tight ${current ? "text-teal-700" : "text-slate-900"}`}>
                <stage.icon size={15} className={current ? "text-teal-600" : "text-teal-500"} />
                {stage.title}
                {current ? <CurrentBadge /> : null}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{stage.description}</p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  </motion.div>
);

const CareerTimeline = () => (
  <section id="journey" className="scroll-mt-28">
    <SectionHeading
      eyebrow="Career Journey"
      title="From Insights to Data Systems."
      text="An evolution from analysis and reporting into machine learning, AI and — now — data engineering."
      icon={TrendingUp}
    />
    <DesktopJourney />
    <MobileJourney />
  </section>
);

export { CareerTimeline };
export default Experience;