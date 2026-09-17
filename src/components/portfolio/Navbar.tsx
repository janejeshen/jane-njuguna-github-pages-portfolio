import { useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site-config";
import { SiGithub, SiLinkedin } from "react-icons/si";

const sectionIds = ["top", "about", "projects", "achievements", "skills", "experience", "contact"];

const useActiveSection = () => {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return active;
};

interface RailLinkProps {
  href: string;
  label: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
  active?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}

const RailLink = ({ href, label, icon: Icon, active = false, isExternal = false, onClick }: RailLinkProps) => (
  <a
    href={href}
    aria-label={label}
    aria-current={active ? "true" : undefined}
    title={label}
    onClick={onClick}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className={`grid h-10 w-10 place-items-center rounded-xl transition ${
      active
        ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25"
        : "text-slate-500 hover:bg-teal-50 hover:text-teal-600"
    }`}
  >
    <Icon size={17} />
  </a>
);

const NavRail = () => {
  const active = useActiveSection();

  return (
    <div className="fixed inset-y-0 left-3 z-50 hidden items-center md:flex">
      <motion.nav
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        aria-label="Section navigation"
        className="flex flex-col items-center gap-1 rounded-3xl border border-slate-200/60 bg-white/80 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        <span
          title="Jane Njeri Njuguna"
          className="mb-1 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-sm font-black text-white shadow-lg shadow-teal-500/25"
        >
          JN
        </span>

        {navItems.map(({ label, href, icon }) => (
          <RailLink key={href} href={href} label={label} icon={icon} active={active === href.replace("#", "")} />
        ))}

        <span className="my-1 h-px w-8 bg-slate-200/70" aria-hidden="true" />

        <RailLink href={GITHUB_URL} label="GitHub" icon={SiGithub} isExternal />
        <RailLink href={LINKEDIN_URL} label="LinkedIn" icon={SiLinkedin} isExternal />
        <RailLink href={CV_URL} label="Download CV" icon={({ size, className }) => <Download size={size} className={className} />} />
      </motion.nav>
    </div>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();

  return (
    <div className="fixed bottom-5 right-4 z-50 md:hidden">
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/30 transition hover:shadow-teal-500/40"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            aria-label="Mobile navigation"
            className="absolute bottom-16 right-0 grid w-60 gap-1 rounded-3xl border border-slate-200/60 bg-white/95 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          >
            {navItems.map(({ label, href, icon: Icon }) => {
              const isActive = active === href.replace("#", "");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    isActive ? "bg-teal-50 text-teal-700" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-teal-600" : "text-slate-400"} />
                  {label}
                </a>
              );
            })}

            <span className="my-1 h-px bg-slate-200/70" aria-hidden="true" />

            <div className="grid grid-cols-3 gap-2 pt-1">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 place-items-center rounded-xl border border-slate-200/60 text-slate-600 transition hover:border-teal-400/50 hover:text-teal-600"
              >
                <SiGithub size={17} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 place-items-center rounded-xl border border-slate-200/60 text-slate-600 transition hover:border-teal-400/50 hover:text-teal-600"
              >
                <SiLinkedin size={17} />
              </a>
              <a
                href={CV_URL}
                download
                aria-label="Download CV"
                className="grid h-11 place-items-center rounded-xl border border-slate-200/60 text-slate-600 transition hover:border-teal-400/50 hover:text-teal-600"
              >
                <Download size={17} />
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => (
  <>
    <NavRail />
    <MobileNav />
  </>
);

export default Navbar;