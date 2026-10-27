import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarClock, MessageCircle, Check } from "lucide-react";

const reassurances = ["No annual lock-in", "Free data migration assistance", "Works on desktop and tablet"];

const CTASection = () => {
  return (
    <section className="site-band-ink relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <span className="site-eyebrow block">Ready when your clinic is</span>
          <h2 className="mt-4 text-3xl text-foreground md:text-5xl">See your own workflow running in 15 minutes.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Tell us your specialty and we'll walk you through the exact screens your front desk,
            clinicians and lab will use.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href="https://wa.me/2349017758165?text=Hello%2C%20I%27d%20like%20to%20book%20a%2015-minute%20Clinexus%20walkthrough" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full gap-2 rounded-sm px-7 sm:w-auto">
                <CalendarClock className="h-4 w-4" /> Book a 15-Minute Live Walkthrough
              </Button>
            </a>
            <a href="https://wa.me/2349017758165?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Clinexus" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full gap-2 rounded-sm px-7 sm:w-auto">
                <MessageCircle className="h-4 w-4" /> Chat Directly on WhatsApp
              </Button>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {reassurances.map((r) => (
              <li key={r} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{r}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
