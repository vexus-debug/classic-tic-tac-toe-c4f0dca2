import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";
import { industries, IndustryTabs, useIndustry, type Industry } from "./industry";
import { badges, type Shot } from "./industryContent";

import dashboardAsset from "@/assets/current-dashboard/dental-dashboard.png.asset.json";
import dentalChartsAsset from "@/assets/current-dashboard/dental-charts.png.asset.json";
import profitabilityAsset from "@/assets/current-dashboard/dental-profitability.png.asset.json";
import billingAsset from "@/assets/current-dashboard/dental-billing.png.asset.json";
import eyeDashboardAsset from "@/assets/current-dashboard/eye-dashboard.png.asset.json";
import eyeExamsAsset from "@/assets/current-dashboard/eye-exams.png.asset.json";
import eyePrescriptionsAsset from "@/assets/current-dashboard/eye-prescriptions.png.asset.json";
import eyeOrdersAsset from "@/assets/current-dashboard/eye-orders.png.asset.json";

const galleries: Record<Industry, Shot[]> = {
  dental: [
    { src: dashboardAsset.url, label: "Dashboard" },
    { src: dentalChartsAsset.url, label: "Dental charts" },
    { src: profitabilityAsset.url, label: "Profitability" },
    { src: billingAsset.url, label: "Billing" },
  ],
  lab: [
    { src: "/tutorials/lab-dashboard.png", label: "Lab dashboard" },
    { src: "/tutorials/lab-cases.png", label: "Case queue" },
    { src: "/tutorials/lab-work.png", label: "Work in progress" },
    { src: "/tutorials/lab-billing.png", label: "Lab billing" },
  ],
  eye: [
    { src: eyeDashboardAsset.url, label: "Overview" },
    { src: eyeExamsAsset.url, label: "Exams" },
    { src: eyePrescriptionsAsset.url, label: "Prescriptions" },
    { src: eyeOrdersAsset.url, label: "Lens orders" },
  ],
};

const DashboardShowcaseSection = () => {
  const reduceMotion = useReducedMotion();
  const { industry } = useIndustry();
  const meta = industries.find((i) => i.key === industry)!;

  return (
    <section className="site-band-paper relative overflow-hidden py-20 md:py-28">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-foreground text-balance md:text-5xl">The real screens your team will use.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Not mock-ups. These are taken from inside Clinexus.</p>
          </div>
          <IndustryTabs />
        </div>

        <AnimatePresence mode="wait">
          <motion.ul key={`b-${industry}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10 flex flex-wrap gap-3">
            {badges[industry].map((b) => (
              <li key={b} className="site-graphite flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-foreground">
                <Activity className="h-4 w-4 text-primary" aria-hidden /> {b}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={industry}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="scrollbar-hide -mx-4 mt-8 flex gap-5 overflow-x-auto px-4 pb-4 snap-x snap-mandatory"
          >
            {galleries[industry].map((item) => (
              <figure key={item.label} className="flex-none snap-center">
                <div className="w-[220px] md:w-[260px]">
                  <div className="rounded-[2rem] border-[5px] border-foreground/10 bg-foreground/5 p-1.5">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <img src={item.src} alt={`${item.label} screen in Clinexus for ${meta.label.toLowerCase()}s`} className="w-full" loading="lazy" />
                    </div>
                  </div>
                  <figcaption className="mt-3 text-center text-sm font-semibold text-foreground">{item.label}</figcaption>
                </div>
              </figure>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2 rounded-sm">
            <Link to={meta.href}>Explore {meta.label} <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-sm">
            <Link to="/industries">All industries</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcaseSection;
