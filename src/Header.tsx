import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    // Semantic: Use semantic HTML5 <section> for header content area
    <section
      className="relative z-10 flex flex-col h-full w-full justify-center items-center px-5"
      aria-labelledby="main-heading"
    >
      {/* Premium overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      {/* Content container with subtle animations */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[90rem] mx-auto">
        {/* SEO: H1 with primary keyword + luxury typography */}
        <motion.h1
          id="main-heading"
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 2,
          }}
          data-reduce-motion="user"
          className="w-auto text-yellow font-bold text-[14vw] sm:text-6 md:text-7 lg:text-8 xl:text-9 block mb-8 md:mb-10 tracking-tighter leading-[0.95]"
        >
          {/* SEO: Primary keyword + location */}
          <span className="block">Kuchnie Na Wymiar</span>
        </motion.h1>

        {/* Premium CTA buttons with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 3,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-5 md:gap-6"
        >
          {/* Primary CTA */}
          <a
            href="https://wa.me/48669004609"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-yellow hover:bg-hover text-grey font-bold text-4 md:text-5 px-10 md:px-12 py-4 md:py-5 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.4)] hover:translate-y-[-2px]"
            aria-label="Rozpocznij projekt kuchni na wymiar - kontakt przez WhatsApp"
          >
            <span>Zacznij Projekt</span>
          </a>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              const gallerySection = document.getElementById("gallery");
              gallerySection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold text-4 md:text-5 px-10 md:px-12 py-4 md:py-5 rounded-sm border border-white/20 hover:border-white/40 transition-all duration-500"
            aria-label="Zobacz galerię projektów kuchni"
          >
            <span>Zobacz Realizacje</span>
          </button>
        </motion.div>
      </div>

      {/* Elegant scroll indicator with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3.5,
          ease: "easeOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/50 text-2 md:text-3 font-medium tracking-wider uppercase">
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-yellow/80" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
