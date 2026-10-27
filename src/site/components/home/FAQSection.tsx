import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    id: "migration",
    label: "Migration & paper records",
    faqs: [
      { q: "Can we bring in our existing patient files?", a: "Yes. Send us your spreadsheet or old software export and we help import patients, contact details and visit history. Paper cards can be scanned and attached to each patient's record." },
      { q: "Do we have to stop work while we switch?", a: "No. Most clinics start with new appointments in Clinexus while older records are brought in over the following days." },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp & patient experience",
    faqs: [
      { q: "Can patients book and get reminders on WhatsApp?", a: "Yes. Patients can request appointments and receive reminders and recall messages, such as six-month dental check-ups or yearly eye tests." },
      { q: "Will patients need to download an app?", a: "No. Patients use the WhatsApp they already have and a simple booking link." },
    ],
  },
  {
    id: "lab",
    label: "Lab & materials",
    faqs: [
      { q: "Can I set my own lab prices?", a: "Yes. Each lab you work with can have its own price list, and lab costs are deducted when you view procedure profit." },
      { q: "Can I send scan files to the lab?", a: "Yes. Upload STL and image files to each case. The lab sees only the cases sent to them, with due dates and notes." },
      { q: "Can we track an outside technician?", a: "Yes. Every case shows who is working on it, its current stage and when it is due back." },
    ],
  },
  {
    id: "staff",
    label: "Staff onboarding & permissions",
    faqs: [
      { q: "Can I stop staff from seeing practice finances?", a: "Yes. Each role only sees what its job needs. Receptionists see payments they take, not clinic profit; only owners see full financials." },
      { q: "How long does it take to set up staff?", a: "Adding a staff member takes a few minutes: name, role and branch. They can sign in straight away." },
    ],
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section className="site-band-grid site-seam-top relative py-24 md:py-32">
      <div className="container relative z-10 grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="site-eyebrow block">Questions clinic owners ask</span>
          <h2 className="mt-4 text-3xl text-foreground md:text-4xl">Straight answers.</h2>
          <div role="tablist" className="mt-8 flex flex-wrap gap-2 lg:flex-col">
            {categories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={`min-h-[44px] rounded-sm border px-4 text-left text-sm transition-colors ${active === c.id ? "border-primary bg-primary/15 text-foreground" : "border-border/60 text-muted-foreground hover:text-foreground"}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="rounded-md border border-border/60 bg-card px-6">
          <Accordion type="single" collapsible defaultValue="faq-0">
            {cat.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-border/60 last:border-b-0">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
