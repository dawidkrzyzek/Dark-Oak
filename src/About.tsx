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
    },
    {
      href: "https://www.blum.com/pl/pl/",
      alt: "Blum",
      src: "https://www.blum.com/corporate/layout/facelift/images/ci/logo.svg.svg",
    },
    {
      href: "https://www.swisskrono.com/pl-pl/",
      alt: "Swiss Krono",
      src: "https://www.swisskrono.com/assets/img/swiss-krono-logo.svg",
    },
    {
      href: "https://www.dobryfront.pl/",
      alt: "Dobry Front",
      src: "https://www.dobryfront.pl/wp-content/uploads/2025/08/logo_mottoa.jpg",
    },
    {
      href: "https://www.pfleiderer.com/pl-pl/",
      alt: "Pfleiderer",
      src: "https://www.pfleiderer.com/_static/media/pfleiderer-logo.svg",
    },
    {
      href: "https://kronospan.com/pl_PL/",
      alt: "Kronospan",
      src: "https://kronospan.com/public/images/logo.svg",
    },
    {
      href: "https://www.abler.pl/",
      alt: "Abler",
      src: "https://www.abler.pl/themes/custom/abler/logo.png",
    },
  ];

  const partnerLoop = [...partners, ...partners];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="w-full p-5 md:p-0 h-full flex flex-col justify-between items-center"
    >
      <div className="w-full flex-col md:flex-row h-full flex">
        {/* SEO: Figure element with semantic markup for better image context */}
        <figure className="flex min-h-60 w-full md:h-220 md:w-1/2 justify-center">
          {/* Performance: loading="lazy" for below-fold images, SEO: keyword-rich alt text */}
          <img
            src="/k-2.webp"
            decoding="async"
            loading="lazy"
            width={1920}
            height={1080}
            alt="Kuchnia na wymiar Dark Oak w czerni i złocie - premium meble kuchenne Toruń, widok boczny wyspy kuchennej"
            className="object-cover w-full md:p-10"
          />
        </figure>

        {/* Semantic: Article element for main content */}
        <article className="flex flex-col h-full md:h-220 w-full md:w-1/2 md:p-10 items-start justify-between">
          <div className="flex-1">
            {/* SEO: H2 heading with proper hierarchy and keyword */}
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-yellow text-7 md:text-7 mt-5 md:mt-0 font-bold lg:text-8 xl:text-9"
            >
              O nas
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-white text-4 sm:text-4 md:text-4 lg:text-5 xl:text-5 font-medium xl:w-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.05 }}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  style={{ marginRight: "0.3rem" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Accessibility: Button with clear aria-label and keyboard support */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="px-10 w-full xsm:w-auto py-2 rounded-full hover:bg-hover duration-500 transition-colors bg-yellow cursor-pointer font-bold text-grey text-4 lg:text-5 xl:text-5 mt-20 md:mt-0"
            aria-label="Rozpocznij projekt kuchni na wymiar - kontakt przez WhatsApp"
            onClick={() => window.open("https://wa.me/48669004609", "_blank")}
          >
            Zacznij Projekt
          </motion.button>
        </article>
      </div>
      {/* SEO: Partners section with H3 heading for hierarchy */}
      <section
        id="partners"
        aria-labelledby="partners-heading"
        className="w-full h-full md:pt-0 md:pb-10 pb-2.5 pt-7.5"
      >
        {/* Accessibility: Screen reader only heading with proper Polish text */}
        <h3 id="partners-heading" className="sr-only">
          Nasi Partnerzy - Producenci Mebli Kuchennych Premium
        </h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="overflow-hidden"
        >
          <div className="marquee flex justify-center items-center w-max">
            {partnerLoop.map((partner, idx) => (
              // Accessibility: Descriptive aria-label for partner links
              <a
                key={idx}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Odwiedź stronę partnera ${partner.alt} - producenta mebli kuchennych`}
                className="shrink-0 md:mr-40 mr-20"
              >
                {/* Performance: Lazy load partner logos, SEO: descriptive alt text */}
                <img
                  src={partner.src}
                  alt={`Logo ${partner.alt} - partner Dark Oak`}
                  decoding="async"
                  loading="lazy"
                  className="w-30 md:w-40 object-contain"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Performance: CSS-only marquee animation with will-change optimization */}
        <style>
          {`
            .marquee {
              display: flex;
              width: max-content;
              animation: marquee 20s linear infinite;
              will-change: transform;
            }

            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            /* Accessibility: Respect user's motion preferences */
            @media (prefers-reduced-motion: reduce) {
              .marquee {
                animation: none;
              }
            }

            @media (max-width: 768px) {
              .marquee img {
                width: 24;
                height: 24;
              }
            }
          `}
        </style>
      </section>
    </section>
  );
};

export default About;
