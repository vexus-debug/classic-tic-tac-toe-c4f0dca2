import { AnimatePresence, motion } from "framer-motion";
import deskImg from "@/assets/site/hero-dental-desk.jpg";
import ParallaxBand from "./ParallaxBand";
import { IndustryTabs, useIndustry } from "./industry";
import { journeys } from "./industryContent";

const HowItWorksSection = () => {
  const { industry } = useIndustry();
  return (
    <ParallaxBand image={deskImg} className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl text-foreground text-balance md:text-5xl">
            One patient, four hands-offs, no chasing.
          </h2>
          <IndustryTabs />
        </div>
        <AnimatePresence mode="wait">
          <motion.ol
            key={industry}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-border/40 bg-border/30 md:grid-cols-4"
          >
            {journeys[industry].map((s, i) => (
              <li key={s.step} className="bg-background/85 p-6 backdrop-blur-sm md:p-7">
                <span className="font-mono text-sm tabular-nums text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground text-pretty">{s.detail}</p>
              </li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </ParallaxBand>
  );
};

export default HowItWorksSection;
