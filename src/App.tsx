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
      <ReactLenis root options={{ duration: 1.5 }} ref={lenisRef} />

      <Navbar
        lenisRef={lenisRef}
        refs={{
          onas: onasRef,
          galeria: galeriaRef,
          kontakt: kontaktRef,
        }}
      />
      <main id="main">
        <header className="relative isolate h-screen w-full">
          <img
            src="/k-1.webp"
            alt="Nowoczesna czarna kuchnia z marmurowym blatem i złotym wykończeniem wyspy kuchennej, widok z przodu na trzy białe krzesła barowe."
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full block h-full object-cover object-center pointer-events-none select-none"
          />
          <Header />
        </header>

        <section id="about" ref={onasRef} className="max-h-[1100px] bg-grey">
          <About />
        </section>

        <section id="gallery" ref={galeriaRef}>
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
