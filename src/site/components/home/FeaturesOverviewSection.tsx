import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Receipt, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries, useIndustry } from "./industry";
import { promises } from "./industryContent";

const icons = [Receipt, Clock, ShieldCheck];

const FeaturesOverviewSection = () => {
  const { industry } = useIndustry();
  const meta = industries.find((i) => i.key === industry)!;
  return (
    <section className="site-band-paper relative py-20 md:py-28">
      <div className="container">
        <h2 className="max-w-2xl text-3xl text-foreground text-balance md:text-5xl">
          Three problems your {meta.label.toLowerCase()} stops having.
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={industry}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {promises[industry].map((p, i) => {
              const Icon = icons[i];
              return (
                <article key={p.title} className="site-graphite flex flex-col p-6 md:p-7">
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 flex-1 text-base text-muted-foreground text-pretty">{p.body}</p>
                  <p className="mt-6 flex items-center gap-2 border-t border-border/40 pt-4 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> {p.proof}
                  </p>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <div className="mt-10">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-sm">
            <Link to={meta.href}>
              See {meta.short.toLowerCase()} features <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
