import { motion } from "framer-motion";
import { FileBox, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";

const files = [
  { name: "upper_arch_26.stl", size: "18.4 MB", state: "Received by lab", pct: 100 },
  { name: "lower_arch_bite.stl", size: "16.9 MB", state: "Uploading", pct: 64 },
];

const thread = [
  { who: "Lab Tech · Bridgeway", text: "Shade A2 confirmed. Zirconia crown milling tomorrow.", mine: false },
  { who: "Dr. Adeyemi", text: "Thanks — patient booked for fitting on Friday.", mine: true },
];

const roles = [
  { role: "Receptionist", sees: "Queue, bookings, payments" },
  { role: "Clinician", sees: "Charts, notes, prescriptions" },
  { role: "Lab Tech", sees: "Assigned cases & files only" },
  { role: "Clinic Owner", sees: "Everything, incl. financials" },
];

const CollaborateSection = () => {
  return (
    <section className="site-band-ink relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <span className="site-eyebrow block">Clinic-to-lab coordination</span>
          <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
            One board for the clinic and the lab. Nothing lost on WhatsApp.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send scans, agree on shade and due dates, and keep every staff member inside the part of
            the system that matches their job.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-md border border-border/60 bg-card p-6">
            <h3 className="flex items-center gap-2 text-base text-foreground"><FileBox className="h-4 w-4 text-primary" /> Digital scan transfer</h3>
            <ul className="mt-4 space-y-4">
              {files.map((f) => (
                <li key={f.name}>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="truncate font-mono text-xs text-foreground">{f.name}</span>
                    <span className="text-[11px] text-muted-foreground">{f.size}</span>
                  </div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${f.pct}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full bg-primary" />
                  </div>
                  <span className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                    {f.pct === 100 && <CheckCircle2 className="h-3 w-3 text-primary" />}{f.state}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="rounded-md border border-border/60 bg-card p-6">
            <h3 className="flex items-center gap-2 text-base text-foreground"><MessageSquare className="h-4 w-4 text-primary" /> Case LAB 118 · thread</h3>
            <ul className="mt-4 space-y-3">
              {thread.map((m) => (
                <li key={m.text} className={`max-w-[90%] rounded-md border border-border/60 p-3 ${m.mine ? "ml-auto bg-primary/15" : "bg-muted"}`}>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{m.who}</div>
                  <p className="mt-1 text-sm text-foreground">{m.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.16 }} className="rounded-md border border-border/60 bg-card p-6">
            <h3 className="flex items-center gap-2 text-base text-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> Role-based access</h3>
            <ul className="mt-4 divide-y divide-border/60">
              {roles.map((r) => (
                <li key={r.role} className="flex items-center justify-between gap-3 py-3">
                  <span className="rounded-sm border border-primary/40 px-2 py-0.5 text-[11px] font-semibold text-primary">{r.role}</span>
                  <span className="text-right text-xs text-muted-foreground">{r.sees}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
