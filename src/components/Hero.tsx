import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profilePhoto from "@/assets/profile-photo.jpg";

/* ------------------ Tiny typewriter utilities (no libs) ------------------ */
function useTypewriter(
  text: string,
  { speed = 90, startDelay = 400 }: { speed?: number; startDelay?: number } = {}
) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const starter = setTimeout(function step() {
      setOut(text.slice(0, i + 1));
      i += 1;
      if (i < text.length) timer = setTimeout(step, speed);
    }, startDelay);
    return () => {
      clearTimeout(starter);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);
  return out;
}

function useTypewriterLoop(
  strings: string[],
  { typing = 70, deleting = 40, pause = 1000 }: { typing?: number; deleting?: number; pause?: number } = {}
) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (!strings.length) return;
    const current = strings[idx % strings.length];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (txt.length < current.length) {
        t = setTimeout(() => setTxt(current.slice(0, txt.length + 1)), typing);
      } else {
        t = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "deleting") {
      if (txt.length > 0) {
        t = setTimeout(() => setTxt(current.slice(0, txt.length - 1)), deleting);
      } else {
        setIdx((n) => (n + 1) % strings.length);
        setPhase("typing");
      }
    } else {
      t = setTimeout(() => setPhase("deleting"), pause / 2);
    }
    return () => clearTimeout(t);
  }, [txt, phase, strings, idx, typing, deleting, pause]);

  return txt;
}

const Caret = () => <span className="ml-1 inline-block w-2 animate-pulse">|</span>;
/* ------------------------------------------------------------------------- */

type IconComponent = React.ComponentType<{ size?: number | string; className?: string }>;
type ResumeKey = "Data_Analyst" | "Data_Scientist" | "ML_Engineer";

/** Direct PDF export links from your Google Docs (must be viewable by "Anyone with the link") */
const RESUMES: Record<ResumeKey, { url: string; filename: string }> = {
  Data_Analyst: {
    url: "https://docs.google.com/document/d/1kc40VEu2Nk5xszlw4j8rRrRl1ibJbZwLq-ApFJd1L3k/export?format=pdf",
    filename: "Jane_Njuguna_Data_Analyst_Resume.pdf",
  },
  ML_Engineer: {
    url: "https://docs.google.com/document/d/1NfRJvdTRjCCejxlN-JpKU3gRZUtmu7Mx5V4yKJeuDVE/export?format=pdf",
    filename: "Jane_Njuguna_ML_Engineer_Resume.pdf",
  },
  Data_Scientist: {
    url: "https://docs.google.com/document/d/19peRPoPLETgl1GQX-b1W6h5dBDXlifZDQqSYFOC70dw/export?format=pdf",
    filename: "Jane_Njuguna_Data_Scientist_Resume.pdf",
  },
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = (type: ResumeKey) => {
    const item = RESUMES[type];
    if (!item) return;
    const a = document.createElement("a");
    a.href = item.url;
    a.setAttribute("download", item.filename);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const socials: { Icon: IconComponent; href: string; label: string }[] = [
    { Icon: SiGithub, href: "https://github.com/janejeshen", label: "GitHub" },
    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/jane-njuguna", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:janenjuguna550@gmail.com", label: "Email" },
  ];

  const resumeTypes: { type: ResumeKey; label: string }[] = [
    { type: "Data_Analyst", label: "Data Analyst" },
    { type: "Data_Scientist", label: "Data Scientist" },
    { type: "ML_Engineer", label: "ML Engineer" },
  ];

  // ✨ Typewriter texts
  const typedName = useTypewriter("Jane Njuguna", { speed: 90, startDelay: 500 });
  const typedRole = useTypewriterLoop(
    ["Data Analyst", "Data Scientist", "Machine Learning Engineer"],
    { typing: 70, deleting: 40, pause: 1100 }
  );

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Mobile: stacked (image → text → resumes).  LG+: two columns (text | image+resumes). */}
      <div className="container mx-auto min-h-[92vh] px-4 py-20 flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* IMAGE — first on mobile, right side on lg */}
        <div className="relative z-10 w-full order-1 lg:order-2 lg:w-1/2">
          <div className="mx-auto flex w-full max-w-md items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-70 blur-xl" />
              <div className="relative h-56 w-56 md:h-72 md:w-72 overflow-hidden rounded-full border-8 border-white/10 shadow-2xl">
                <img src={profilePhoto} alt="Profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Resume Card for LG+ (sits under image on the right column) */}
          <div className="hidden lg:block mx-auto mt-6 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Download Resume</h3>
              <span className="text-xs text-white/60">PDF • Updated</span>
            </div>
            <p className="mb-5 text-sm text-white/70">
              Choose a tailored version for the role you&apos;re applying to:
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {resumeTypes.map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => downloadResume(type)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                >
                  <Download size={16} className="transition-transform group-hover:scale-110" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TEXT — second on mobile, left side on lg */}
        <div className="relative z-10 w-full order-2 lg:order-1 lg:w-1/2 mt-8 lg:mt-0">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/70">Hello, I&apos;m</p>
          <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-5xl font-extrabold leading-[1.1] text-transparent md:text-6xl xl:text-7xl">
            {typedName}
            <Caret />
          </h1>

          <h2 className="mt-4 text-2xl font-light text-white/80 md:text-3xl" aria-live="polite">
            {typedRole}
            <Caret />
          </h2>

          <p className="mt-6 max-w-2xl text-left text-lg leading-relaxed text-gray-300 md:text-xl">
            I help teams make smarter decisions by turning raw data into clear stories and
            dependable products. I uncover what matters, build models that forecast and explain,
            and ship solutions that work in the real world—measured by impact, not buzzwords.
            I care about clarity, reliability, and results.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() => scrollToSection("projects")}
              className="h-12 rounded-2xl bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:translate-y-0.5 hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="h-12 rounded-2xl border-white/30 bg-white/5 px-8 text-base text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-gray-300 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                aria-label={label}
                title={label}
              >
                <Icon size={20} className="transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("projects")}
            className="mt-10 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            aria-label="Scroll down"
          >
            <ArrowDown size={22} />
            <span className="text-sm">Scroll</span>
          </button>
        </div>

        {/* Resume Card for MOBILE ONLY — forced to the bottom */}
        <div className="block lg:hidden w-full order-3 mt-8">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Download Resume</h3>
              <span className="text-xs text-white/60">PDF • Updated</span>
            </div>
            <p className="mb-5 text-sm text-white/70">
              Choose a tailored version for the role you&apos;re applying to:
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {resumeTypes.map(({ type, label }) => (
                <button
                  key={type}
                  onClick={() => downloadResume(type)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                >
                  <Download size={16} className="transition-transform group-hover:scale-110" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
