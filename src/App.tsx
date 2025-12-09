import type { LenisRef } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import About from "./About";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Navbar from "./Navbar";

function App() {
  // Lenis reference (nullable to satisfy TS)
  const lenisRef = useRef<LenisRef | null>(null);

  // Section references (nullable too)
  const onasRef = useRef<HTMLDivElement | null>(null);
  const galeriaRef = useRef<HTMLDivElement | null>(null);
  const kontaktRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* Accessibility: Skip to main content link for keyboard navigation */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-yellow focus:text-grey focus:px-4 focus:py-2 focus:rounded"
      >
        Przejdź do głównej treści
      </a>

      <ReactLenis root options={{ duration: 1.5 }} ref={lenisRef} />

      <Navbar
        lenisRef={lenisRef}
        refs={{
          onas: onasRef,
          galeria: galeriaRef,
          kontakt: kontaktRef,
        }}
      />
      {/* Semantic: Main content landmark with skip link target */}
      <main id="main" role="main">
        {/* SEO: Hero header section with semantic structure */}
        <header className="relative isolate h-screen w-full" role="banner">
          {/* Performance: Hero image with eager loading for LCP optimization */}
          {/* SEO: Keyword-rich alt text describing the hero image */}
          <img
            src="/k-1.webp"
            alt="Nowoczesna kuchnia na wymiar Dark Oak Toruń - czarna zabudowa premium z marmurowym blatem i złotymi akcentami, elegancka wyspa kuchenna z białymi krzesłami barowymi"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full block h-full object-cover object-center pointer-events-none select-none"
          />
          <Header />
        </header>

        {/* SEO: About section with semantic structure and proper ARIA */}
        <section id="about" ref={onasRef} className="max-h-[1100px] bg-grey" aria-labelledby="about-heading">
          <About />
        </section>

        {/* SEO: Gallery section with semantic structure */}
        <section id="gallery" ref={galeriaRef} aria-label="Galeria projektów kuchni na wymiar">
          <Gallery />
        </section>
      </main>

      <footer id="contact" ref={kontaktRef}>
        <Footer />
      </footer>
    </>
  );
}

export default App;
