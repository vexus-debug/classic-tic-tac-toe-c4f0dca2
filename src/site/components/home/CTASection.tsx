import { Button } from "@/components/ui/button";
import { CalendarClock, MessageCircle, Check } from "lucide-react";
import operatoryImg from "@/assets/site/hero-operatory.jpg";
import ParallaxBand from "./ParallaxBand";
import { industries, useIndustry } from "./industry";

const reassurances = ["No lock-in contracts", "Free data migration", "Live in under 24 hours"];
const WA = "https://wa.me/2349017758165";

const CTASection = () => {
  const { industry } = useIndustry();
  const label = industries.find((i) => i.key === industry)!.label;
  const book = `${WA}?text=${encodeURIComponent(`Hello, I'd like to book a 15-minute Clinexus walkthrough for my ${label.toLowerCase()}.`)}`;
  const chat = `${WA}?text=${encodeURIComponent("Hello, I would like to know more about Clinexus.")}`;
  return (
    <ParallaxBand image={operatoryImg} className="py-24 md:py-36">
      <div className="container relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl text-foreground text-balance md:text-5xl">See your {label.toLowerCase()} running in 15 minutes.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          We walk you through the exact screens your front desk, clinicians and team will use.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="gap-2 rounded-sm px-7">
            <a href={book} target="_blank" rel="noopener noreferrer"><CalendarClock className="h-4 w-4" /> Book a 15-minute walkthrough</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-sm px-7">
            <a href={chat} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {reassurances.map((r) => (
            <li key={r} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" aria-hidden />{r}</li>
          ))}
        </ul>
      </div>
    </ParallaxBand>
  );
};

export default CTASection;
