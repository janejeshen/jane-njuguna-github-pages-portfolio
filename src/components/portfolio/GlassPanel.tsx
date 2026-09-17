import type { PropsWithChildren } from "react";
import { glassPanelClasses } from "@/lib/styles";

interface GlassPanelProps {
  id?: string;
  className?: string;
}

const GlassPanel = ({ id, className = "", children }: PropsWithChildren<GlassPanelProps>) => (
  <section id={id} className={`scroll-mt-28 ${glassPanelClasses} ${className}`}>
    {children}
  </section>
);

export default GlassPanel;