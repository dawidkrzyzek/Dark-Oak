import { motion } from "framer-motion";
import React, { useMemo, useRef } from "react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // SEO: Enhanced paragraph with natural keyword integration and stronger value proposition
  const paragraph =
    "Profesjonalne kuchnie na wymiar w Toruniu tworzone na miarę Twoich marzeń. Projektujemy i wykonujemy eleganckie, trwałe meble kuchenne premium z najwyższej jakości materiałów. Studio kuchenne z pasją do detalu i precyzją wykonania.";

  // Split paragraph into words (preserves spaces)
  const splitStringUsingRegex = (input: string) => {
    const regex = /[\S]+|\s+/g;
    const words: string[] = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
      words.push(match[0]);
    }
    return words;
  };

  const words = useMemo(() => splitStringUsingRegex(paragraph), [paragraph]);

  // Framer Motion variants for words
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const partners = [
    {
      href: "https://www.egger.com/pl/?country=PL",
      alt: "Egger",
      src: "https://cdn.egger.com/img/cms/ff58d5b2-cb11-41dc-ba72-5cec737f1c8a/a6b3c90f-a0ba-4379-abab-9215f9071955/ORIGINAL/gen_egger_logo_en.svg",
      description: "Płyty meblowe premium",
    },
    {
      href: "https://www.blum.com/pl/pl/",
      alt: "Blum",
      src: "https://www.blum.com/corporate/layout/facelift/images/ci/logo.svg.svg",
      description: "Zawiasy i prowadnice najwyższej jakości",
    },
    {
      href: "https://www.swisskrono.com/pl-pl/",
      alt: "Swiss Krono",
      src: "https://www.swisskrono.com/assets/img/swiss-krono-logo.svg",
      description: "Szwajcarska jakość płyt",
    },
    {
      href: "https://www.dobryfront.pl/",
      alt: "Dobry Front",
      src: "https://www.dobryfront.pl/wp-content/uploads/2025/08/logo_mottoa.jpg",
      description: "Fronty meblowe na wymiar",
    },
    {
      href: "https://www.pfleiderer.com/pl-pl/",
      alt: "Pfleiderer",
      src: "https://www.pfleiderer.com/_static/media/pfleiderer-logo.svg",
      description: "Innowacyjne materiały",
    },
    {
      href: "https://kronospan.com/pl_PL/",
      alt: "Kronospan",
      src: "https://kronospan.com/public/images/logo.svg",
      description: "Lider w produkcji płyt",
    },
    {
      href: "https://www.abler.pl/",
      alt: "Abler",
      src: "https://www.abler.pl/themes/custom/abler/logo.png",
      description: "Akcesoria kuchenne premium",
    },
  ];

  const partnerLoop = [...partners, ...partners];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="w-full py-32 md:py-40 flex flex-col items-center bg-grey"
    >
      {/* Premium content container */}
      <div className="w-full max-w-400 mx-auto px-5 md:px-10 lg:px-20">
        <div className="w-full flex-col lg:flex-row flex gap-16 md:gap-20 items-center">
          {/* SEO: Figure element with premium styling */}
          <motion.figure
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full lg:w-1/2 relative group"
          >
            {/* Performance: loading="lazy" for below-fold images */}
            <div className="relative w-full overflow-hidden rounded-sm">
              {/* Subtle border for premium feel */}
              <div className="absolute inset-0 border border-white/10 rounded-sm z-10 pointer-events-none" />
              <img
                src="/k-2.webp"
                decoding="async"
                loading="lazy"
                width={1920}
                height={1080}
                alt="Kuchnia na wymiar Dark Oak w czerni i złocie - premium meble kuchenne Toruń, widok boczny wyspy kuchennej"
                className="object-cover w-full h-[400px] md:h-[500px] lg:h-[600px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.figure>

          {/* Semantic: Article element with premium typography */}
          <article className="flex flex-col w-full lg:w-1/2 items-start justify-center">
            {/* Premium section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-6"
            >
              <span className="text-yellow/80 text-3 md:text-4 font-medium tracking-[0.2em] uppercase">
                O Dark Oak
              </span>
            </motion.div>

            {/* SEO: H2 heading with luxury typography */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white text-6 md:text-7 lg:text-8 font-bold mb-8 tracking-tight leading-tight"
            >
              Twoja Kuchnia Marzeń
            </motion.h2>

            {/* Premium paragraph with word animation */}
            <motion.p
              className="text-white/70 text-4 md:text-5 font-medium leading-relaxed mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.02 }}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ marginRight: "0.3rem" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            {/* Premium CTA button */}
            <motion.a
              href="https://wa.me/48669004609"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="inline-flex items-center gap-3 px-10 md:px-12 py-4 md:py-5 bg-yellow hover:bg-hover rounded-sm font-bold text-grey text-4 md:text-5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.3)] hover:translate-y-[-2px]"
              aria-label="Rozpocznij projekt kuchni na wymiar - kontakt przez WhatsApp"
            >
              <span>Zacznij Projekt</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </article>
        </div>
      </div>
      {/* SEO: Premium Partners section */}
      <section
        id="partners"
        aria-labelledby="partners-heading"
        className="w-full max-w-400 mx-auto px-5 md:px-10 lg:px-20 mt-32 md:mt-40 pt-16 md:pt-20 border-t border-white/10"
      >
        {/* Premium section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-yellow/80 text-3 md:text-4 font-medium tracking-[0.2em] uppercase mb-4 block">
            Nasi Partnerzy
          </span>
          <h3 id="partners-heading" className="text-white text-5 md:text-6 font-bold tracking-tight">
            Współpracujemy z Najlepszymi
          </h3>
        </motion.div>

        {/* Premium partner marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden relative"
        >
          {/* Subtle gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-grey to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-grey to-transparent z-10 pointer-events-none" />

          <div className="marquee flex items-center w-max py-8">
            {partnerLoop.map((partner, idx) => (
              // Accessibility: Enhanced partner links with hover effects
              <a
                key={idx}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.alt} - ${partner.description}`}
                className="group shrink-0 mx-10 md:mx-16 lg:mx-20 relative"
                title={partner.description}
              >
                {/* Subtle background on hover */}
                <div className="absolute inset-0 -m-6 bg-white/[0.02] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Performance: Lazy load logos */}
                <img
                  src={partner.src}
                  alt={`Logo ${partner.alt} - partner Dark Oak`}
                  decoding="async"
                  loading="lazy"
                  className="w-28 md:w-36 lg:w-40 h-12 md:h-14 object-contain opacity-40 group-hover:opacity-70 transition-all duration-500 grayscale group-hover:grayscale-0 relative"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Performance: CSS-only marquee with premium timing */}
        <style>
          {`
            .marquee {
              display: flex;
              width: max-content;
              animation: marquee 40s linear infinite;
              will-change: transform;
            }

            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            /* Accessibility: Respect motion preferences */
            @media (prefers-reduced-motion: reduce) {
              .marquee {
                animation: none;
              }
            }
          `}
        </style>
      </section>
    </section>
  );
};

export default About;
