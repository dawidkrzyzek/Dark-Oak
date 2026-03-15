import { AnimatePresence, motion } from "framer-motion";
import type { LenisRef } from "lenis/react";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  refs: {
    onas: React.RefObject<HTMLDivElement | null>;
    galeria: React.RefObject<HTMLDivElement | null>;
    kontakt: React.RefObject<HTMLDivElement | null>;
  };
  lenisRef: React.RefObject<LenisRef | null>;
}

const Navbar: React.FC<NavbarProps> = ({ refs, lenisRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitionActive, setTransitionActive] = useState(false);

  // 🟡 Page transition logic
  const performTransition = async (
    ref: React.RefObject<HTMLElement | null>
  ) => {
    if (!lenisRef.current?.lenis || !ref.current) return;
    const lenis = lenisRef.current.lenis;

    setTransitionActive(true);
    await new Promise((resolve) => setTimeout(resolve, 1250)); // yellow slide duration
    setMenuOpen(false);
    lenis.scrollTo(ref.current, { duration: 0.2 });

    await new Promise<void>((resolve) => {
      const checkScroll = () => {
        const targetTop = ref.current!.offsetTop;
        const scrollPos = lenis.scroll;
        const velocity = Math.abs(lenis.velocity);
        if (Math.abs(scrollPos - targetTop) < 1 && velocity < 0.02) resolve();
        else requestAnimationFrame(checkScroll);
      };
      checkScroll();
    });

    setTransitionActive(false);
  };

  // 📱 Auto-close mobile menu on resize to md+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 880) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🟡 Yellow slide transition */}
      <AnimatePresence>
        {transitionActive && (
          <motion.div
            key="yellow-slide"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            aria-hidden="true"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-yellow z-50"
          />
        )}
      </AnimatePresence>

      {/* 🧭 Navbar */}
      <motion.nav
        role="navigation"
        aria-label="Nawigacja główna"
        className="fixed w-screen xsm:w-full top-0 left-0 z-40 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex items-center justify-between w-full px-5 md:px-20 lg:px-30 mx-auto py-5">
          {/* Logo */}
          <a
            href="https://darkoak.pl/"
            aria-label="Przejdź na początek strony"
            className="inline-flex"
          >
            <img
              src="/logo.png"
              alt="Dark Oak Logo"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-20 nav:w-24 cursor-pointer"
            />
          </a>

          {/* Desktop menu */}
          <ul className="hidden text-3 nav:flex items-center gap-20 text-white font-medium">
            <li>
              <button
                type="button"
                role="button"
                aria-label="Przejdź do sekcji O nas"
                onClick={() => performTransition(refs.onas)}
                className=" hover:text-yellow transition-colors duration-500 cursor-pointer text-white"
              >
                {" "}
                O nas
              </button>
            </li>
            <li>
              <button
                type="button"
                role="button"
                aria-label="Przejdź do sekcji Galeria"
                className=" hover:text-yellow transition-colors duration-500 cursor-pointer text-white"
                onClick={() => performTransition(refs.galeria)}
              >
                {" "}
                Galeria
              </button>
            </li>
            <li>
              <button
                type="button"
                role="button"
                aria-label="Przejdź do sekcji Kontakt"
                className=" hover:text-yellow transition-colors duration-500 cursor-pointer text-white"
                onClick={() => performTransition(refs.kontakt)}
              >
                {" "}
                Kontakt
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/48669004609"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow hover:bg-hover duration-500 cursor-pointer rounded-full px-5 py-1 font-bold text-white"
                aria-label="Otwórz WhatsApp, aby rozpocząć projekt"
              >
                {" "}
                Zacznij Projekt
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="block nav:hidden text-white text-5 cursor-pointer z-50 "
            onClick={() => setMenuOpen((p) => !p)}
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu nawigacyjne"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="fixed inset-0 h-dvh bg-grey text-white text-5 z-40 px-8 py-12 flex flex-col"
            >
              {/* Buttons container */}
              <nav
                aria-label="Linki w menu mobilnym"
                className="flex-1 flex items-center justify-center"
              >
                <motion.ul
                  className="grid place-items-center gap-y-10 justify-center [@media(max-height:550px)]:text-5 [@media(max-height:550px)]:gap-y-5"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
                    }, // Delay buttons until menu slide completes
                    exit: {
                      transition: {
                        staggerChildren: 0,
                        duration: 0.5,
                        ease: "easeInOut",
                      }, // stagger exit in reverse
                    },
                  }}
                >
                  {/* Standard buttons */}
                  <motion.li
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1, ease: "easeInOut" },
                      },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    <button
                      type="button"
                      role="button"
                      aria-label="Przejdź do sekcji O nas"
                      className="cursor-pointer transition-colors hover:text-yellow duration-500"
                      onClick={() => performTransition(refs.onas)}
                    >
                      O nas
                    </button>
                  </motion.li>

                  <motion.li
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1, ease: "easeInOut" },
                      },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    <button
                      type="button"
                      aria-label="Przejdź do sekcji Galeria"
                      role="button"
                      className="cursor-pointer transition-colors hover:text-yellow duration-500"
                      onClick={() => performTransition(refs.galeria)}
                    >
                      Galeria
                    </button>
                  </motion.li>

                  <motion.li
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1, ease: "easeInOut" },
                      },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    <button
                      type="button"
                      aria-label="Przejdź do sekcji Kontakt"
                      role="button"
                      className="cursor-pointer transition-colors hover:text-yellow duration-500"
                      onClick={() => performTransition(refs.kontakt)}
                    >
                      Kontakt
                    </button>
                  </motion.li>

                  {/* Special button with y animation */}
                  <motion.li
                    className=""
                    onClick={() =>
                      window.open("https://wa.me/48669004609", "_blank")
                    }
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1, ease: "easeInOut" },
                      },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    <a
                      href="https://wa.me/48669004609"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Otwórz WhatsApp, aby rozpocząć projekt"
                      className="bg-yellow hover:bg-hover duration-500 transition-colors cursor-pointer text-[2rem] rounded-full text-center px-5 py-2 font-bold inline-flex items-center justify-center no-underline text-grey"
                    >
                      Zacznij Projekt
                    </a>
                  </motion.li>
                </motion.ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
