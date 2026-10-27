import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIndustry } from "./industry";
import { finance } from "./industryContent";

const AnalyzeSection = () => {
  const { industry } = useIndustry();
  const f = finance[industry];
  return (
    <section className="site-band-grid relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div key={industry} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="max-w-2xl text-3xl text-foreground text-balance md:text-5xl">{f.headline}</h2>
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <div className="site-graphite p-6 md:p-8">
                <h3 className="text-sm font-semibold text-muted-foreground">{f.splitTitle}</h3>
                <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-muted">
                  {f.split.map((s, i) => (
                    <div key={s.name} className="h-full bg-primary" style={{ width: `${s.pct}%`, opacity: 1 - i * 0.3 }} />
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {f.split.map((s, i) => (
                    <li key={s.name} className="flex items-center justify-between text-base">
                      <span className="flex items-center gap-3 text-foreground">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary" style={{ opacity: 1 - i * 0.3 }} aria-hidden />
                        {s.name}
                      </span>
                      <span className="font-mono tabular-nums text-foreground">{s.pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="site-graphite p-6 md:p-8">
                <h3 className="text-sm font-semibold text-muted-foreground">{f.barsTitle}</h3>
                <ul className="mt-6 space-y-5">
                  {f.bars.map((b) => (
                    <li key={b.name}>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground">{b.name}</span>
                        <span className="font-mono tabular-nums text-muted-foreground">{b.pct} {f.barsUnit}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${b.pct}%` }} transition={{ duration: 0.6 }} className="h-full rounded-full bg-primary" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Figures shown are illustrative examples.</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-sm">
            <Link to="/industries/dental-clinics/how-cases-work">Open the case and credit calculator <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
