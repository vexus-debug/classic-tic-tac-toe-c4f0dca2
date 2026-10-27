import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Full-width section with a slow-moving photo behind a dark mask. */
const ParallaxBand = ({ image, alt = "", children, className = "" }: { image: string; alt?: string; children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  return (
    <section ref={ref} className={`site-parallax ${className}`}>
      <motion.img src={image} alt={alt} aria-hidden={alt ? undefined : true} loading="lazy" className="site-parallax-img" style={{ y }} />
      <div className="site-parallax-mask" aria-hidden />
      {children}
    </section>
  );
};

export default ParallaxBand;
