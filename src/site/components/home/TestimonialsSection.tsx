import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, MapPin, ArrowRight } from "lucide-react";
import clinicImg from "@/assets/site/hero-clinic.jpg";
import ParallaxBand from "./ParallaxBand";
import { useIndustry, type Industry } from "./industry";

const testimonials: { industry: Industry; outcome: string; quote: string; name: string; role: string; clinic: string; location: string; specialty: string }[] = [
  {
    industry: "dental",
    outcome: "Evening billing time gone",
    quote: "I used to spend my evenings doing billing. Now it's done before I leave the chair. I actually have dinner with my family now.",
    name: "Dr. Adebayo Ogundimu",
    role: "Practice Owner",
    clinic: "Smile Perfect Dental",
    location: "Lagos",
    specialty: "Dental",
  },
  {
    industry: "lab",
    outcome: "No missed lab deliveries",
    quote: "Every sample and case is tracked from dispatch to delivery. Everyone knows what's due, and we haven't missed a delivery since.",
    name: "Dr. Funke Adeyemi",
    role: "Clinical Director",
    clinic: "Premier Diagnostic Centre",
    location: "Abuja",
    specialty: "Diagnostic Lab",
  },
  {
    industry: "eye",
    outcome: "Revenue up 23% in 3 months",
    quote: "Revenue went up 23% in three months, not because we saw more patients, but because we stopped front-desk leaks.",
    name: "Dr. Chinedu Obi",
    role: "Managing Partner",
    clinic: "Ivory Gate Eye Clinic",
    location: "Port Harcourt",
    specialty: "Eye Clinic",
  },
];

const initials = (n: string) => n.replace("Dr. ", "").split(" ").map((p) => p[0]).join("");

const TestimonialsSection = () => {
  const { industry } = useIndustry();
  return (
    <ParallaxBand image={clinicImg} className="py-24 md:py-32">
      <div className="container relative z-10">
        <h2 className="max-w-2xl text-3xl text-foreground text-balance md:text-5xl">Measured in hours saved and money kept.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const active = t.industry === industry;
            return (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`site-graphite relative flex flex-col overflow-hidden p-7 backdrop-blur-md ${active ? "ring-1 ring-primary/60" : "opacity-80"}`}
              >
                <Quote aria-hidden className="absolute -right-2 -top-2 h-24 w-24 text-primary/10" />
                <div className="text-2xl font-semibold leading-tight text-foreground">{t.outcome}</div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/40 pt-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary" aria-hidden>
                    {initials(t.name)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.clinic}</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-primary">{t.specialty}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" aria-hidden />{t.location}</span>
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
        <Link to="/articles" className="mt-10 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline">
          Read clinic management articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </ParallaxBand>
  );
};

export default TestimonialsSection;
