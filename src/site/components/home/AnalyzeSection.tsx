import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const views = {
  cash: {
    label: "Daily Cash Flow",
    caption: "Collected vs. billed, this week",
    rows: [
      { name: "Mon", a: 82, b: 100 },
      { name: "Tue", a: 91, b: 100 },
      { name: "Wed", a: 68, b: 100 },
      { name: "Thu", a: 88, b: 100 },
      { name: "Fri", a: 95, b: 100 },
    ],
    unit: "% collected",
  },
  lab: {
    label: "Lab Expense Ratio",
    caption: "Lab cost as a share of procedure fee",
    rows: [
      { name: "Composite", a: 0, b: 100 },
      { name: "Crown", a: 38, b: 100 },
      { name: "Denture", a: 44, b: 100 },
      { name: "Bridge", a: 41, b: 100 },
      { name: "Night guard", a: 22, b: 100 },
    ],
    unit: "% of fee",
  },
} as const;

const margins = [
  { proc: "Composite filling", margin: 72 },
  { proc: "Root canal", margin: 64 },
  { proc: "Zirconia crown", margin: 41 },
];

const splits = [
  { who: "Dr. Adeyemi", share: "40%" },
  { who: "Dr. Okafor", share: "35%" },
  { who: "Practice", share: "25%" },
];

const AnalyzeSection = () => {
  const [view, setView] = useState<keyof typeof views>("cash");
  const v = views[view];

  return (
    <section className="site-band-paper relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="site-eyebrow block">Financial transparency</span>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Stop the leaks before they reach your books.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              See uncollected balances, what each procedure actually earns after lab costs, and how
              revenue splits between clinicians — every day, not at month end.
            </p>

            <div className="mt-8 rounded-md border border-border/60 bg-card p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Uncollected balances flagged</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Part-payments and outstanding patient balances are listed at checkout, so the front
                    desk collects before the patient leaves.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-border/60 bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Clinician revenue split (example)</div>
              <ul className="mt-3 grid grid-cols-3 gap-3">
                {splits.map((s) => (
                  <li key={s.who}>
                    <div className="text-xl font-semibold tabular-nums text-foreground">{s.share}</div>
                    <div className="text-xs text-muted-foreground">{s.who}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-md border border-border/60 bg-card p-6">
            <div role="tablist" className="inline-flex rounded-full border border-border/60 bg-muted p-1">
              {(Object.keys(views) as (keyof typeof views)[]).map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={view === k}
                  onClick={() => setView(k)}
                  className={`min-h-[36px] rounded-full px-4 text-sm transition-colors ${view === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {views[k].label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{v.caption}</p>
            <ul className="mt-5 space-y-4">
              {v.rows.map((r) => (
                <li key={r.name} className="grid grid-cols-[90px_1fr_56px] items-center gap-3">
                  <span className="text-sm text-foreground">{r.name}</span>
                  <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      key={view + r.name}
                      initial={{ width: 0 }}
                      animate={{ width: `${r.a}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                  <span className="text-right text-sm tabular-nums text-muted-foreground">{r.a}%</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] text-muted-foreground">{v.unit} · illustrative figures</p>

            <div className="mt-6 border-t border-border/60 pt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Procedure margin</div>
              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {margins.map((m) => (
                  <li key={m.proc} className="rounded-sm border border-border/60 p-3">
                    <div className="text-2xl font-semibold tabular-nums text-foreground">{m.margin}%</div>
                    <div className="text-xs text-muted-foreground">{m.proc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
