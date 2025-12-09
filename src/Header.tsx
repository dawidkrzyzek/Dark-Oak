import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="relative z-10 flex flex-col h-full w-full justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 2,
        }}
        className="w-auto text-center text-yellow font-bold text-[17vw] sm:text-6 md:text-7 lg:text-8 xl:text-9 block"
      >
        Kuchnie Na Wymiar
      </motion.h1>
    </div>
  );
};

export default Header;
