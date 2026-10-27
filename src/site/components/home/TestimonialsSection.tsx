import { motion } from "framer-motion";
import { Quote, BadgeCheck, MapPin } from "lucide-react";

const testimonials = [
  {
    outcome: "Evening billing time gone",
    quote: "I used to spend my evenings doing billing. Now it's done before I leave the chair. I actually have dinner with my family now.",
    name: "Dr. Adebayo Ogundimu",
    role: "Practice Owner",
    clinic: "Smile Perfect Dental",
    location: "Lagos",
    specialty: "Dental",
  },
  {
    outcome: "No missed lab deliveries",
    quote: "We stopped losing lab work. Every case is tracked, every technician knows what's due. We've never had a missed delivery since.",
    name: "Dr. Funke Adeyemi",
    role: "Clinical Director",
    clinic: "Premier Dental Centre",
    location: "Abuja",
    specialty: "Dental",
  },
  {
    outcome: "Revenue up 23% in 3 months",
    quote: "My revenue went up 23% in three months, not because I saw more patients, but because I stopped letting money fall through the cracks.",
    name: "Dr. Chinedu Obi",
    role: "Managing Partner",
    clinic: "Ivory Gate Dental Group",
    location: "Port Harcourt",
    specialty: "Dental",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="site-band-paper relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <span className="site-eyebrow block">Practice outcomes</span>
          <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
            Measured in hours saved and cases delivered.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex flex-col overflow-hidden rounded-md border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote aria-hidden className="absolute -right-2 -top-2 h-24 w-24 text-primary/10" />
              <div className="text-2xl font-semibold leading-tight text-foreground">{t.outcome}</div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  {t.name} <BadgeCheck className="h-4 w-4 text-primary" aria-label="Clinician" />
                </div>
                <div className="text-xs text-muted-foreground">{t.role} · {t.clinic}</div>
                <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="rounded-sm border border-primary/40 px-1.5 py-0.5 font-semibold text-primary">{t.specialty}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{t.location}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
