import { motion } from "framer-motion";
import React, { useState } from "react";

const Footer: React.FC = () => {
  const [btnText, setBtnText] = useState("Wyślij");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setBtnText("Wysyłanie…");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build dynamic subject: "Od ${name}"
    const name = (formData.get("name") as string)?.trim() || "";
    formData.set("subject", `Od ${name}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setBtnText("Wysłano ✓");
        form.reset();
      } else {
        setBtnText(
          data.message ? `Błąd: ${data.message}` : "Coś poszło nie tak"
        );
      }
    } catch {
      setBtnText("Błąd sieci – spróbuj ponownie");
    } finally {
      setSubmitting(false);
      // Reset the button text after a short delay
      setTimeout(() => setBtnText("Wyślij"), 4000);
    }
  };

  return (
    // Semantic: Footer with premium styling
    <footer className="bg-grey text-white px-5 py-20 md:py-32 border-t border-white/10" role="contentinfo">
      <div className="max-w-400 mx-auto px-5 md:px-10 lg:px-20">
        {/* SEO: Premium contact section */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Semantic: Form section with luxury styling */}
          <article>
            {/* Premium section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-6"
            >
              <span className="text-yellow/80 text-3 md:text-4 font-medium tracking-[0.2em] uppercase">
                Kontakt
              </span>
            </motion.div>

            {/* SEO: H2 with premium typography */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-white text-6 md:text-7 lg:text-8 font-bold mb-8 tracking-tight leading-tight"
            >
              Skontaktuj się z nami
            </motion.h2>

            {/* Accessibility: Form with proper ARIA attributes and labels */}
            <motion.form
              id="form"
              className="space-y-4"
              aria-labelledby="contact-form-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3, ease: "easeInOut" },
                },
              }}
              onSubmit={handleSubmit}
            >
              {/* Accessibility: Hidden heading for screen readers */}
              <h3 id="contact-form-heading" className="sr-only">
                Formularz kontaktowy - kuchnie na wymiar Dark Oak
              </h3>
              <input
                type="hidden"
                name="access_key"
                value="297f7167-ea8f-4cc6-9381-3b824c5ece03"
              />
              <input type="hidden" name="subject" value="" />
              <input type="hidden" name="from_name" value="Nowy Formularz" />
              {/* NAME FIELD */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  },
                }}
              >
                <label className="sr-only" htmlFor="name">
                  Imię
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  type="text"
                  placeholder="Imię"
                  className="w-full bg-transparent border-b border-white/20 outline-none py-4 text-4 lg:text-5 text-white placeholder:text-white/40 transition-all duration-500 ease-out focus:border-yellow focus:placeholder:text-white/60"
                />
              </motion.div>

              {/* PHONE FIELD */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  },
                }}
              >
                <label className="sr-only" htmlFor="phone">
                  Numer
                </label>
                <input
                  id="phone"
                  name="tel"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Numer Telefonu"
                  className="w-full bg-transparent border-b border-white/20 outline-none py-4 text-4 lg:text-5 text-white placeholder:text-white/40 transition-all duration-500 ease-out focus:border-yellow focus:placeholder:text-white/60"
                />
              </motion.div>

              {/* EMAIL FIELD */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  },
                }}
              >
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Adres Email"
                  className="w-full bg-transparent border-b border-white/20 outline-none py-4 text-4 lg:text-5 text-white placeholder:text-white/40 transition-all duration-500 ease-out focus:border-yellow focus:placeholder:text-white/60"
                />
              </motion.div>

              {/* MESSAGE FIELD */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  },
                }}
              >
                <label className="sr-only" htmlFor="message">
                  Jak możemy pomóc?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Opisz swój projekt kuchni..."
                  rows={5}
                  className="w-full bg-white/[0.02] border border-white/20 rounded-sm outline-none px-5 py-4 text-4 lg:text-5 text-white resize-none placeholder:text-white/40 transition-all duration-500 ease-out focus:border-yellow focus:bg-white/[0.04] focus:placeholder:text-white/60"
                ></textarea>
              </motion.div>

              {/* BUTTON */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  },
                }}
              >
                <button
                  type="submit"
                  value="submit"
                  disabled={submitting}
                  className="w-full bg-yellow hover:bg-hover text-grey font-bold text-4 md:text-5 px-10 py-4 md:py-5 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.3)] hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {btnText}
                </button>
              </motion.div>
              {/* Accessibility: Live region for form submission feedback */}
              <div id="result" aria-live="polite" aria-atomic="true" className="sr-only">
                {btnText}
              </div>
            </motion.form>
          </article>

          {/* Semantic: Premium contact info section */}
          <motion.aside
            className="flex w-full flex-col justify-start gap-8 md:gap-10 items-start text-white"
            aria-label="Informacje kontaktowe Dark Oak"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: "easeOut",
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Premium contact info heading */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              <h3 className="text-white/60 text-3 md:text-4 font-medium tracking-wider uppercase mb-6">
                Informacje Kontaktowe
              </h3>
            </motion.div>

            {/* SEO: Premium phone link */}
            <motion.a
              href="tel:+48669004609"
              className="group flex items-center gap-4 text-4 md:text-5 font-medium hover:text-yellow transition-colors duration-500"
              aria-label="Zadzwoń do Dark Oak: 669 004 609"
              itemProp="telephone"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              <span className="text-yellow/60 group-hover:text-yellow transition-colors duration-500">☎</span>
              <span>+48 669 004 609</span>
            </motion.a>

            {/* SEO: Premium email link */}
            <motion.a
              href="mailto:biuro@darkoak.pl"
              className="group flex items-center gap-4 text-4 md:text-5 font-medium hover:text-yellow transition-colors duration-500"
              aria-label="Wyślij email do Dark Oak: biuro@darkoak.pl"
              itemProp="email"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              <span className="text-yellow/60 group-hover:text-yellow transition-colors duration-500">✉</span>
              <span>biuro@darkoak.pl</span>
            </motion.a>

            {/* Premium business info */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              className="text-4 md:text-4 text-white/60 space-y-2 pt-4 border-t border-white/10"
            >
              <p>
                <span className="text-yellow/80 font-bold">NIP:</span> 865 240 69 10
              </p>
              <p>
                <span className="text-yellow/80 font-bold">REGON:</span> 381130237
              </p>
            </motion.div>

            {/* SEO: Premium social media section */}
            <motion.nav
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              className="flex items-center gap-5 pt-6"
              aria-label="Social media Dark Oak"
            >
              {/* Premium social media links */}
              <a
                href="https://www.instagram.com/darkoak7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź profil Instagram Dark Oak - kuchnie na wymiar Toruń"
                className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-sm hover:border-yellow/50 hover:bg-yellow/5 transition-all duration-500"
              >
                <img
                  src="/instagram-icon.svg"
                  alt="Instagram Dark Oak"
                  decoding="async"
                  loading="lazy"
                  className="w-6 h-6 md:w-7 md:h-7 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>

              <a
                href="https://www.tiktok.com/@dark.oak.home.meb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zobacz filmy Dark Oak na TikTok - realizacje kuchni na wymiar"
                className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-sm hover:border-yellow/50 hover:bg-yellow/5 transition-all duration-500"
              >
                <img
                  src="/tiktok-icon.svg"
                  alt="TikTok Dark Oak"
                  decoding="async"
                  loading="lazy"
                  className="w-7 h-7 md:w-8 md:h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61582880040440"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Polub stronę Facebook Dark Oak - studio kuchenne Toruń"
                className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-sm hover:border-yellow/50 hover:bg-yellow/5 transition-all duration-500"
              >
                <img
                  src="/facebook-icon.svg"
                  alt="Facebook Dark Oak"
                  decoding="async"
                  loading="lazy"
                  className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </a>
            </motion.nav>
          </motion.aside>
        </div>

        {/* SEO: Premium location map section */}
        <section className="mt-20 md:mt-24 pt-20 md:pt-24 border-t border-white/10" aria-labelledby="location-heading">
          {/* Premium map heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-yellow/80 text-3 md:text-4 font-medium tracking-[0.2em] uppercase mb-4 block">
              Nasza Lokalizacja
            </span>
            <h3 id="location-heading" className="text-white text-5 md:text-6 font-bold tracking-tight">
              Odwiedź Nas w Toruniu
            </h3>
          </motion.div>

          {/* Premium map container */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full relative rounded-sm overflow-hidden"
          >
            {/* Subtle border */}
            <div className="absolute inset-0 border border-white/10 rounded-sm z-10 pointer-events-none" />

            {/* Performance: Lazy loading iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.1965027482197!2d18.702621699999998!3d53.052776599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ccd74543ae8fd%3A0xba243ff653a38966!2sDark%20Oak!5e0!3m2!1sen!2suk!4v1758657419347!5m2!1sen!2suk"
              className="w-full h-[400px] md:h-[500px] rounded-sm"
              loading="lazy"
              allowFullScreen
              title="Mapa lokalizacji Dark Oak - Kuchnie na Wymiar, Wapienna 6/8 p.109, 87-100 Toruń"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* SEO: Structured address data */}
            <figcaption className="sr-only" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="name">Dark Oak - Kuchnie na Wymiar</span>
              <span itemProp="streetAddress">Wapienna 6/8 p.109</span>
              <span itemProp="postalCode">87-100</span>
              <span itemProp="addressLocality">Toruń</span>
              <span itemProp="addressCountry">Polska</span>
            </figcaption>
          </motion.figure>
        </section>

        {/* Premium copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-20 md:mt-24 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-white/40 text-3 md:text-4 font-medium">
            © {new Date().getFullYear()} Dark Oak. Wszelkie prawa zastrzeżone.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
