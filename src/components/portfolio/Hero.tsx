import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Download, Layers, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profilePhoto from "@/assets/profile-graduation.jpeg";
import { capabilities, contact, hero, heroButtons, skillBadges, stats } from "@/data/portfolio";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site-config";
import { glassPanelClasses, primaryButtonClasses, secondaryButtonClasses } from "@/lib/styles";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const Hero = () => (
  <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    className={`${glassPanelClasses} overflow-hidden scroll-mt-28 p-5 md:p-7 lg:p-9`}
  >
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="flex flex-col justify-center">
        <motion.div
          variants={staggerItem}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-xl border border-teal-200/60 bg-teal-50 px-4 py-2 text-xs font-black uppercase tracking-wide text-teal-700"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-teal-500" /> {hero.statusBadge}
        </motion.div>

        <motion.h1 variants={staggerItem} className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
          {hero.firstName}{" "}
          <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            {hero.lastName}
          </span>
        </motion.h1>

        <TypedRoleLine />

        <ContactMetaRow />

        <motion.h2 variants={staggerItem} className="mt-5 max-w-3xl text-xl font-bold leading-snug tracking-tight text-slate-700 md:text-2xl">
          {hero.subheading}
        </motion.h2>

        <motion.div
          variants={staggerItem}
          className="mt-8 flex flex-wrap items-center gap-2"
          aria-label="Professional capabilities: analyze, engineer, model"
        >
          {capabilities.map((cap, index) => (
            <div key={cap.key} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200/70 bg-teal-50/70 px-3.5 py-2 text-xs font-black uppercase tracking-wide text-teal-700">
                <cap.icon size={14} /> {cap.label}
              </span>
              {index < capabilities.length - 1 ? (
                <ChevronRight size={16} className="shrink-0 text-teal-400" />
              ) : null}
            </div>
          ))}
        </motion.div>

        <motion.div variants={staggerItem} className="mt-6 flex flex-wrap gap-3">
          {skillBadges.map(({ label, icon: Icon, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/60 px-4 py-2 text-sm text-slate-700 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-teal-400/50"
            >
              <Icon className={color} size={18} /> {label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={staggerItem} className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a href={heroButtons.primary.href} className={primaryButtonClasses}>
            <span className="whitespace-nowrap">{heroButtons.primary.label}</span>
            <ArrowRight className="shrink-0" size={20} />
          </a>
          <a href={CV_URL} download className={secondaryButtonClasses}>
            <Download className="shrink-0" size={20} />
            <span className="whitespace-nowrap">Download CV</span>
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={secondaryButtonClasses}>
            <SiGithub className="shrink-0" size={20} />
            <span className="whitespace-nowrap">GitHub</span>
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={secondaryButtonClasses}>
            <SiLinkedin className="shrink-0" size={20} />
            <span className="whitespace-nowrap">LinkedIn</span>
          </a>
        </motion.div>
      </div>

      <HeroVisual />
    </div>

    <motion.div
      variants={staggerContainer}
      className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map(({ value, label, icon: Icon }) => (
        <motion.div
          key={label}
          variants={staggerItem}
          className="group rounded-2xl border border-slate-200/60 bg-white/60 p-5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-teal-400/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        >
          <Icon className="mb-3 text-teal-500" size={24} />
          <p className="text-3xl font-black text-slate-900">{value}</p>
          <p className="mt-1 text-sm leading-5 text-slate-500">{label}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

const ContactMetaRow = () => (
  <motion.div
    variants={staggerItem}
    className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500"
    aria-label="Location and contact details"
  >
    {contact.items.map(({ icon: Icon, title, text, href }, index) => {
      const content = (
        <span className="inline-flex items-center gap-1.5">
          <Icon size={15} className="shrink-0 text-teal-500" />
          {text}
        </span>
      );
      return (
        <span key={title} className="flex items-center gap-x-3">
          {href ? (
            <a href={href} className="transition hover:text-teal-600" aria-label={`${title}: ${text}`}>
              {content}
            </a>
          ) : (
            content
          )}
          {index < contact.items.length - 1 ? (
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
          ) : null}
        </span>
      );
    })}
  </motion.div>
);

const TypedRoleLine = () => {
  const prefersReducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(() => (prefersReducedMotion ? hero.roleLine : ""));

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(hero.roleLine);
      return;
    }
    setTyped("");
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setTyped(hero.roleLine.slice(0, index));
      if (index >= hero.roleLine.length) {
        window.clearInterval(id);
      }
    }, 55);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <motion.p
      variants={staggerItem}
      className="mt-3 text-lg font-semibold text-teal-600"
      aria-label={hero.roleLine}
    >
      <span aria-hidden="true">{prefersReducedMotion ? hero.roleLine : typed}</span>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        className="ml-0.5 inline-block h-[1.15em] w-[2px] translate-y-[3px] rounded-full bg-gradient-to-b from-teal-500 to-teal-600"
      />
    </motion.p>
  );
};

const HeroVisual = () => (
  <motion.div
    variants={staggerItem}
    className="relative min-h-[380px] overflow-hidden rounded-3xl border border-teal-200/40 bg-gradient-to-br from-teal-50 via-white to-teal-50/60 p-3 shadow-xl shadow-teal-500/10 md:min-h-[520px]"
  >
    <div
      aria-hidden="true"
      className="absolute right-10 top-14 h-36 w-36 bg-[radial-gradient(circle,rgba(20,184,166,0.18)_1px,transparent_2px)] [background-size:14px_14px]"
    />

    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-5 top-6 z-10 grid h-11 w-11 place-items-center rounded-xl border border-teal-200/70 bg-white/90 shadow-sm backdrop-blur"
    >
      <DatabaseIcon />
    </motion.div>
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-5 top-24 z-10 grid h-11 w-11 place-items-center rounded-xl border border-teal-200/70 bg-white/90 shadow-sm backdrop-blur"
    >
      <CloudIcon />
    </motion.div>
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-6 top-40 z-10 grid h-10 w-10 place-items-center rounded-xl border border-teal-200/70 bg-white/90 shadow-sm backdrop-blur"
    >
      <BrainIcon />
    </motion.div>

    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative h-full min-h-[356px] md:min-h-[496px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal-400/25 via-teal-500/10 to-teal-600/20 blur-2xl"
      />
      <img
        src={profilePhoto}
        alt="Jane Njeri Njuguna — data analyst, data engineer and data scientist"
        className="relative h-full min-h-[356px] w-full rounded-[1.25rem] object-cover object-[50%_38%] shadow-[0_24px_60px_rgba(13,148,136,0.25)] md:min-h-[496px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-gradient-to-t from-white/90 via-white/10 to-transparent"
      />
    </motion.div>

    <div className="absolute inset-x-3 bottom-3 z-10 rounded-2xl border border-white/40 bg-white/80 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <div className="flex items-center gap-2">
        {capabilities.map((cap, index) => (
          <div key={cap.key} className="flex flex-1 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal-50 text-teal-600">
              <cap.icon size={15} />
            </span>
            <span className="hidden text-[11px] font-black uppercase tracking-wider text-slate-700 sm:block">
              {cap.label}
            </span>
            {index < capabilities.length - 1 ? (
              <Layers size={12} className="hidden shrink-0 text-teal-400 sm:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const DatabaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const CloudIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const BrainIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4 17.5v-1.83a3.5 3.5 0 0 1-.56-6.86A2.5 2.5 0 0 1 5.5 4.5A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 20 17.5v-1.83a3.5 3.5 0 0 0 .56-6.86A2.5 2.5 0 0 0 18.5 4.5A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

export default Hero;