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
    // Semantic: Footer with proper landmark role
    <footer className="bg-grey text-white px-5 py-5" role="contentinfo">
      <div className="max-w-400 mx-auto">
        {/* SEO: Contact section with heading hierarchy */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Semantic: Form section with article wrapper */}
          <article>
            {/* SEO: H2 heading for contact section (proper hierarchy after H1 in header) */}
            <motion.h2
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-yellow text-6 lg:text-7 xl:text-8 w-90 sm:w-full mb-5"
            >
              Skontaktuj się z nami!
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
                  className="w-[90vw] xsm:w-full bg-transparent border-b border-white outline-none py-2 text-4 lg:text-5 xl:text-6 placeholder:text-white/50 transition-colors duration-500 ease-in-out focus:border-yellow"
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
                  placeholder="Numer"
                  className="w-[90vw] xsm:w-full bg-transparent border-b border-white outline-none py-2 text-4 lg:text-5 xl:text-6 placeholder:text-white/50 transition-colors duration-500 ease-in-out focus:border-yellow"
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
                  placeholder="Email"
                  className="w-[90vw] xsm:w-full bg-transparent border-b border-white outline-none py-2 text-4 lg:text-5 xl:text-6 placeholder:text-white/50 transition-colors duration-500 ease-in-out focus:border-yellow"
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
                  placeholder="Jak możemy pomóc?"
                  rows={4}
                  className="w-[90vw] xsm:w-full bg-transparent border border-white outline-none pl-2 text-4 lg:text-5 xl:text-6 resize-none placeholder:text-white/50 transition-colors duration-500 ease-in-out focus:border-yellow"
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
                  className="bg-yellow w-[90vw] transition-colors xsm:w-full cursor-pointer text-4 lg:text-5 xl:text-6 text-grey font-semibold px-8 py-2 rounded-full duration-500 hover:bg-hover"
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
          {/* Semantic: Contact information section with proper address markup */}
          <motion.aside
            className="flex w-[90vw] xsm:w-full flex-col justify-center gap-10 md:gap-20 items-center text-4 lg:text-5 xl:text-6 text-white"
            aria-label="Informacje kontaktowe Dark Oak"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {/* SEO: Semantic tel link for phone number with microdata */}
            <motion.a
              href="tel:+48669004609"
              className="cursor-pointer hover:text-yellow transition-colors duration-500"
              aria-label="Zadzwoń do Dark Oak: 669 004 609"
              itemProp="telephone"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                },
              }}
            >
              669 004 609
            </motion.a>

            {/* SEO: Semantic mailto link with microdata */}
            <motion.a
              href="mailto:biuro@darkoak.pl"
              className="cursor-pointer hover:text-yellow transition-colors duration-500"
              aria-label="Wyślij email do Dark Oak: biuro@darkoak.pl"
              itemProp="email"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                },
              }}
            >
              biuro@darkoak.pl
            </motion.a>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                },
              }}
            >
              <div>
                <p>
                  <span className="text-yellow font-bold">NIP</span> 865 240 69
                  10
                </p>
                <p>
                  <span className="text-yellow font-bold">REGON</span> 381130237
                </p>
              </div>
            </motion.div>
            {/* SEO: Social media section with proper navigation landmark */}
            <motion.nav
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                },
              }}
              className="flex items-center justify-center gap-15 lg:gap-20 xl:gap-30"
              aria-label="Social media Dark Oak"
            >
              {/* Accessibility: Enhanced social media links with descriptive labels */}
              <a
                href="https://www.instagram.com/darkoak7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź profil Instagram Dark Oak - kuchnie na wymiar Toruń"
              >
                <img
                  src="/instagram-icon.svg"
                  alt="Instagram Dark Oak"
                  decoding="async"
                  loading="lazy"
                  className="w-15 h-15 lg:w-21 lg:h-21"
                />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dark.oak.home.meb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zobacz filmy Dark Oak na TikTok - realizacje kuchni na wymiar"
              >
                <img
                  src="/tiktok-icon.svg"
                  alt="TikTok Dark Oak"
                  decoding="async"
                  loading="lazy"
                  className="w-16 h-16 lg:w-23 lg:h-23"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61582880040440"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Polub stronę Facebook Dark Oak - studio kuchenne Toruń"
              >
                <img
                  src="/facebook-icon.svg"
                  alt="Facebook Dark Oak"
                  decoding="async"
                  loading="lazy"
                  className="w-13 h-13 lg:w-20 lg:h-20"
                />
              </a>
            </motion.nav>
          </motion.aside>
        </div>
        {/* SEO: Location map section with semantic markup and address data */}
        <section className="mt-16" aria-labelledby="location-heading">
          <h3 id="location-heading" className="sr-only">
            Lokalizacja Dark Oak - Toruń
          </h3>
          {/* Semantic: Figure with address information for SEO */}
          <figure className="w-full">
            {/* Performance: Lazy loading iframe, Accessibility: Descriptive title */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.1965027482197!2d18.702621699999998!3d53.052776599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ccd74543ae8fd%3A0xba243ff653a38966!2sDark%20Oak!5e0!3m2!1sen!2suk!4v1758657419347!5m2!1sen!2suk"
              className="w-full h-96 border-0"
              loading="lazy"
              allowFullScreen
              title="Mapa lokalizacji Dark Oak - Kuchnie na Wymiar, Wapienna 6/8 p.109, 87-100 Toruń"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* SEO: Figcaption with structured address data */}
            <figcaption className="sr-only" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="name">Dark Oak - Kuchnie na Wymiar</span>
              <span itemProp="streetAddress">Wapienna 6/8 p.109</span>
              <span itemProp="postalCode">87-100</span>
              <span itemProp="addressLocality">Toruń</span>
              <span itemProp="addressCountry">Polska</span>
            </figcaption>
          </figure>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
