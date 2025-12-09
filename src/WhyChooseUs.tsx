import { motion } from "framer-motion";
import { Award, Clock, Palette, Shield } from "lucide-react";

const WhyChooseUs = () => {
  // Premium features for luxury kitchen studio
  const features = [
    {
      icon: Award,
      title: "Najwyższa Jakość",
      description:
        "Współpracujemy wyłącznie z najlepszymi producentami mebli w Europie. Każdy projekt to gwarancja trwałości i elegancji.",
    },
    {
      icon: Palette,
      title: "Indywidualny Design",
      description:
        "Projektujemy kuchnie na wymiar, dopasowane do Twojego stylu życia. Od nowoczesnego minimalizmu po klasyczną elegancję.",
    },
    {
      icon: Clock,
      title: "Profesjonalizm",
      description:
        "Dotrzymujemy terminów i budżetu. Kompleksowa obsługa od projektu po montaż z dbałością o każdy szczegół.",
    },
    {
      icon: Shield,
      title: "Gwarancja Zadowolenia",
      description:
        "Wieloletnie doświadczenie i setki zadowolonych klientów w Toruniu. Twoja satysfakcja to nasz priorytet.",
    },
  ];

  // Premium container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Premium card animation - subtle entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const, // Premium ease curve
      },
    },
  };

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    // SEO: Section with proper semantic structure
    <section
      id="why-choose-us"
      className="relative w-full bg-grey py-32 md:py-40 px-5 md:px-10 lg:px-20"
      aria-labelledby="why-heading"
    >
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative max-w-400 mx-auto">
        {/* Premium section heading with subtle animation */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          {/* SEO: H2 heading with proper hierarchy */}
          <h2
            id="why-heading"
            className="text-yellow font-bold text-6 md:text-7 lg:text-8 xl:text-9 mb-6 tracking-tight"
          >
            Dlaczego Dark Oak?
          </h2>
          {/* Premium subheading */}
          <motion.p
            className="text-white/70 text-4 md:text-5 font-medium max-w-200 mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.2, duration: 1 },
              },
            }}
          >
            Studio kuchenne z pasją do perfekcji i dbałością o każdy detal
          </motion.p>
        </motion.div>

        {/* Premium feature grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              // Premium feature card with subtle hover effect
              <motion.article
                key={index}
                variants={cardVariants}
                className="group relative bg-grey/50 border border-white/[0.08] rounded-sm p-10 md:p-12 backdrop-blur-sm hover:border-yellow/30 transition-all duration-700 ease-out"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm" />

                {/* Icon with premium styling */}
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-18 h-18 md:w-20 md:h-20 border border-yellow/30 rounded-sm bg-yellow/5 group-hover:bg-yellow/10 group-hover:border-yellow/50 transition-all duration-700">
                    <Icon
                      className="w-9 h-9 md:w-10 md:h-10 text-yellow"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content with premium typography */}
                <div className="relative">
                  {/* SEO: H3 for feature titles */}
                  <h3 className="text-white font-bold text-5 md:text-5 lg:text-6 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-4 md:text-4 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Premium CTA with subtle animation */}
        <motion.div
          className="text-center mt-20 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Accessibility: Clear CTA button with proper ARIA label */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 bg-yellow hover:bg-hover text-grey font-bold text-4 md:text-5 px-12 py-4 rounded-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgba(227,178,20,0.3)] hover:translate-y-[-2px]"
            aria-label="Skontaktuj się z Dark Oak - przejdź do formularza kontaktowego"
          >
            <span>Porozmawiajmy o Twojej Kuchni</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
