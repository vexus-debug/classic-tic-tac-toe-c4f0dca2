import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, FlaskConical, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type QueueStatus = "Checked in" | "In chair" | "In transit" | "Confirmed";

const queue: { time: string; patient: string; detail: string; status: QueueStatus }[] = [
  { time: "08:30", patient: "Adaeze Okonkwo", detail: "Scaling and polishing, perio chart", status: "Checked in" },
  { time: "09:15", patient: "Tunde Bakare", detail: "Root canal, tooth 36, session 2", status: "In chair" },
  { time: "10:00", patient: "Ifeoma Obi", detail: "Composite filling, tooth 14", status: "In transit" },
  { time: "11:30", patient: "Samuel Eze", detail: "Crown fitting, tooth 26", status: "Confirmed" },
];

const statusClass: Record<QueueStatus, string> = {
  "Checked in": "status-info",
  "In chair": "status-success",
  "In transit": "status-warning",
  Confirmed: "bg-muted text-muted-foreground",
};

const labCases = [
  { caseId: "LAB 118", work: "Zirconia crown, tooth 26", tag: "Zirconia", due: "Due in 1 day", progress: 80 },
  { caseId: "LAB 121", work: "Upper partial denture", tag: "Denture", due: "In transit", progress: 60 },
  { caseId: "LAB 124", work: "Night guard, upper arch", tag: "Acrylic", due: "Ready for fitting", progress: 100 },
];

const optical = [
  { patient: "Grace Nwosu", line: "OD −1.25 / OS −1.50 sph", state: "Rx signed" },
  { patient: "Bisi Alade", line: "IOP 16 / 17 mmHg", state: "Tonometry recorded" },
  { patient: "Michael Adeyemi", line: "Progressive, acetate frame", state: "At optical lab" },
];

const card =
  "group relative rounded-md border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

const FeaturesOverviewSection = () => {
  return (
    <section className="site-band-grid site-seam-top relative py-24 md:py-32">
      <div className="container relative z-10">
        <motion.div {...fade()} className="max-w-2xl">
          <span className="site-eyebrow block">A clinician's day, live</span>
          <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
            Front desk, chair, lab and optical desk — moving in step.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every board below updates the others. When a patient sits down, the queue knows. When the
            crown leaves the lab, the chair knows.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {/* Front desk & queue */}
          <motion.div {...fade(0)} className={`${card} lg:col-span-4 lg:row-span-2`}>
            <header className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="flex items-center gap-2 text-lg text-foreground">
                <Users className="h-4 w-4 text-primary" /> Front desk · Today's queue
              </h3>
              <span className="text-xs text-muted-foreground tabular-nums">4 patients</span>
            </header>
            <ul className="divide-y divide-border/60">
              {queue.map((q) => (
                <li key={q.time} className="flex items-center gap-4 py-4">
                  <span className="w-12 shrink-0 text-sm tabular-nums text-muted-foreground">{q.time}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-foreground">{q.patient}</span>
                    <span className="block truncate text-xs text-muted-foreground">{q.detail}</span>
                  </span>
                  <span className={`flex shrink-0 items-center gap-1.5 rounded-sm px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusClass[q.status]}`}>
                    {q.status === "In chair" && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="site-pulse absolute inset-0 rounded-full bg-current" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
                      </span>
                    )}
                    {q.status}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Lab monitor */}
          <motion.div {...fade(0.08)} className={`${card} lg:col-span-2`}>
            <header className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="flex items-center gap-2 text-base text-foreground">
                <FlaskConical className="h-4 w-4 text-primary" /> Bridgeway Dental Lab
              </h3>
              <span className="text-xs text-muted-foreground">3 open</span>
            </header>
            <ul className="mt-3 space-y-4">
              {labCases.map((c) => (
                <li key={c.caseId}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-sm text-foreground">{c.work}</span>
                    <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">{c.caseId}</span>
                  </div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${c.progress}%` }} />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="rounded-sm border border-border/60 px-1.5 py-0.5">{c.tag}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{c.due}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Optical feed */}
          <motion.div {...fade(0.16)} className={`${card} lg:col-span-2`}>
            <header className="flex items-center justify-between border-b border-border/60 pb-3">
              <h3 className="flex items-center gap-2 text-base text-foreground">
                <Eye className="h-4 w-4 text-primary" /> Optical & Rx feed
              </h3>
            </header>
            <ul className="divide-y divide-border/60">
              {optical.map((o) => (
                <li key={o.patient} className="py-3">
                  <span className="block text-sm text-foreground">{o.patient}</span>
                  <span className="block font-mono text-xs text-primary">{o.line}</span>
                  <span className="block text-[11px] text-muted-foreground">{o.state}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div {...fade(0.2)} className="mt-10">
          <Link to="/industries">
            <Button variant="ghost" className="gap-2 rounded-sm px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
              Explore each specialty <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
