import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import GlassPanel from "@/components/portfolio/GlassPanel";
import { contact, socials } from "@/data/portfolio";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const CONTACT_FORM_ENDPOINT =
  (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) ?? "https://formspree.io/f/maeylgaj";

const emailRow = contact.items.find((item) => item.title === "Email");
const emailHref = emailRow?.href ?? "mailto:janenjuguna550@gmail.com";
const emailAddress = emailRow?.text ?? "janenjuguna550@gmail.com";

const inputClasses =
  "w-full rounded-xl border border-slate-200/60 bg-white/60 px-4 py-3 text-sm text-slate-800 backdrop-blur-sm transition placeholder:text-slate-400 hover:border-slate-300 focus:border-teal-400/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20";

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}

const Field = ({ id, label, type = "text", autoComplete, required = false }: FieldProps) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-700">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      autoComplete={autoComplete}
      className={inputClasses}
    />
  </div>
);

type FormStatus = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const isSpam = Boolean(String(data.get("_gotcha") || "").trim());
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    if (isSpam) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _replyto: email,
          _subject: `[Portfolio] ${subject}`,
        }),
      });
      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <GlassPanel id="contact" className="p-6 md:p-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">{contact.eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{contact.heading}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{contact.text}</p>

          <div className="mt-7 space-y-3">
            {contact.items.map(({ icon: Icon, title, text, href }) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{title}</span>
                    <span className="block break-words font-semibold text-slate-900">{text}</span>
                  </span>
                </>
              );
              const cardClasses =
                "flex items-center gap-4 rounded-2xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur-sm transition hover:border-teal-400/50 hover:bg-white/80";
              return href ? (
                <a key={title} href={href} className={cardClasses} aria-label={`${title}: ${text}`}>
                  {inner}
                </a>
              ) : (
                <div key={title} className={cardClasses}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200/60 bg-white/60 px-4 text-sm font-bold text-slate-700 backdrop-blur-sm transition hover:border-teal-400/50 hover:bg-white/80"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-7"
        >
          <h3 className="text-xl font-black text-slate-900">Send a message</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">Fill in the details below and your message is delivered straight to my inbox.</p>

          {!CONTACT_FORM_ENDPOINT ? (
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
              Contact form not configured yet — set the <code className="font-mono text-xs">VITE_CONTACT_FORM_ENDPOINT</code> environment variable to your Formspree endpoint.
            </p>
          ) : null}

          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <div className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Your Name" autoComplete="name" required />
              <Field id="email" label="Email Address" type="email" autoComplete="email" required />
            </div>
            <Field id="subject" label="Subject" required />

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClasses} resize-y`}
                placeholder="Tell me about your data problem or idea..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition hover:translate-y-0.5 hover:shadow-teal-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : status === "success" ? (
                <>
                  <Check size={16} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === "success" ? (
                <div className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-3">
                  <p className="text-sm font-bold text-teal-700">Message sent successfully!</p>
                  <p className="mt-1 text-sm leading-6 text-teal-700/80">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : status === "error" ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm font-bold text-red-700">Something went wrong.</p>
                  <p className="mt-1 text-sm leading-6 text-red-700/80">
                    Please try again or email me directly at{" "}
                    <a href={emailHref} className="font-semibold underline transition hover:text-red-800">
                      {emailAddress}
                    </a>
                    .
                  </p>
                </div>
              ) : null}
            </div>

            <p className="text-sm leading-6 text-slate-500">
              Prefer a direct email? Write to me at{" "}
              <a href={emailHref} className="font-semibold text-teal-600 transition hover:text-teal-700">
                {emailAddress}
              </a>
              .
            </p>
          </div>
        </motion.form>
      </div>
    </GlassPanel>
  );
};

export default Contact;