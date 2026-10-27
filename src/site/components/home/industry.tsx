import { createContext, useContext, useState, type ReactNode } from "react";
import { Stethoscope, FlaskConical, Eye, type LucideIcon } from "lucide-react";

export type Industry = "dental" | "lab" | "eye";

export const industries: { key: Industry; label: string; short: string; icon: LucideIcon; href: string }[] = [
  { key: "dental", label: "Dental Clinic", short: "Dental", icon: Stethoscope, href: "/industries/dental-clinics" },
  { key: "lab", label: "Diagnostic Lab", short: "Lab", icon: FlaskConical, href: "/industries" },
  { key: "eye", label: "Eye Clinic", short: "Eye", icon: Eye, href: "/industries/eye-clinics" },
];

type Ctx = { industry: Industry; setIndustry: (i: Industry) => void };
const IndustryContext = createContext<Ctx | null>(null);

export const IndustryProvider = ({ children }: { children: ReactNode }) => {
  const [industry, setIndustry] = useState<Industry>("dental");
  return <IndustryContext.Provider value={{ industry, setIndustry }}>{children}</IndustryContext.Provider>;
};

export const useIndustry = () => {
  const ctx = useContext(IndustryContext);
  if (!ctx) throw new Error("useIndustry must be used inside IndustryProvider");
  return ctx;
};

/** Compact switcher reused by sections further down the page. */
export const IndustryTabs = ({ className = "" }: { className?: string }) => {
  const { industry, setIndustry } = useIndustry();
  return (
    <div role="tablist" aria-label="Choose your practice type" className={`site-switcher ${className}`}>
      {industries.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          role="tab"
          type="button"
          aria-selected={industry === key}
          onClick={() => setIndustry(key)}
          className="site-switcher-tab"
        >
          <Icon className="h-4 w-4" aria-hidden />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};
