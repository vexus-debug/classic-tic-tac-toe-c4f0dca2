import { motion } from "framer-motion";
import { IndustryTabs } from "./industry";

const stats = [
  { value: "500+", label: "Clinics across Nigeria" },
  { value: "₦2.4B+", label: "Collections protected" },
  { value: "99.9%", label: "Uptime" },
];

const TrustStrip = () => (
  <section aria-label="Choose your practice type" className="site-band-paper relative py-14 md:py-16">
    <div className="container flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-lg font-semibold text-foreground md:text-xl">What kind of practice do you run?</p>
        <IndustryTabs />
        <p className="text-sm text-muted-foreground">Everything below changes to match your practice.</p>
      </div>
      <motion.dl
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid w-full max-w-3xl grid-cols-3 divide-x divide-border/40 border-y border-border/40"
      >
        {stats.map((s) => (
          <div key={s.label} className="px-3 py-6 text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-2xl font-extrabold tabular-nums text-foreground md:text-4xl">{s.value}</dd>
            <dd className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default TrustStrip;
