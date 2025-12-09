import { motion } from "framer-motion";
import React, { useMemo, useRef } from "react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Paragraph text
  const paragraph =
    "Profesjonalne meble kuchenne na miarę Twoich marzeń. Tworzymy eleganckie, trwałe i funkcjonalne kuchnie z pasją i precyzją.";

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
        {/* Image Section */}
        <div className="flex min-h-60 w-full md:h-220 md:w-1/2 justify-center">
          <img
            src="/k-2.webp"
            decoding="async"
            width={1920}
            height={1080}
            alt="Ten sam projekt kuchni w czerni i złocie, ujęcie z boku pokazujące wyspę kuchenną"
            className="object-cover w-full md:p-10"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col h-full md:h-220 w-full md:w-1/2 md:p-10 items-start justify-between">
          <div className="flex-1">
            {/* O nas heading */}
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

          {/* Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="px-10 w-full xsm:w-auto py-2 rounded-full hover:bg-hover duration-500 transition-colors bg-yellow cursor-pointer font-bold text-grey text-4 lg:text-5 xl:text-5 mt-20 md:mt-0"
            aria-label="Rozpocznij projekt kuchni"
            onClick={() => window.open("https://wa.me/48669004609", "_blank")}
          >
            Zacznij Projekt
          </motion.button>
        </div>
      </div>
      <section
        id="partners"
        aria-labelledby="partners-heading"
        className="w-full h-full md:pt-0 md:pb-10 pb-2.5 pt-7.5"
      >
        <h3 id="partners-heading" className="sr-only">
          Our Partners
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
              <a
                key={idx}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.alt}`}
                className="shrink-0 md:mr-40 mr-20"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  decoding="async"
                  className="w-30 md:w-40 object-contain"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* CSS Marquee */}
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
