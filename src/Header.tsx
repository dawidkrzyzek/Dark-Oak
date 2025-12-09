import { motion } from "framer-motion";

const Header = () => {
  return (
    // Semantic: Use semantic HTML5 <section> for header content area
    <section
      className="relative z-10 flex flex-col h-full w-full justify-center items-center"
      aria-labelledby="main-heading"
    >
      {/* SEO: H1 with primary keyword "Kuchnie Na Wymiar" + location "Toruń" */}
      {/* Accessibility: prefers-reduced-motion support via data attribute */}
      <motion.h1
        id="main-heading"
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 2,
        }}
        // Accessibility: Respect user's motion preference
        data-reduce-motion="user"
        className="w-auto text-center text-yellow font-bold text-[17vw] sm:text-6 md:text-7 lg:text-8 xl:text-9 block"
      >
        {/* SEO: Primary keyword + location for maximum local search visibility */}
        Kuchnie Na Wymiar Toruń
      </motion.h1>
    </section>
  );
};

export default Header;
