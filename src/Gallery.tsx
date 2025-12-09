import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import k3 from "/k-3.webp";
import k4 from "/k-4.webp";
import k5 from "/k-5.webp";
import k6 from "/k-6.webp";

const galleryImages: {
  src: string;
  alt: string;
  width: number;
  height: number;
}[] = [
  {
    src: k3,
    alt: "Elegancka kuchnia w odcieniach szarości z marmurowym blatem i zielonymi aksamitnymi krzesłami na złotych nogach, widok pod kątem.",
    width: 1920,
    height: 1080,
  },
  {
    src: k4,
    alt: "Ta sama szara kuchnia z zielonymi krzesłami, ujęcie z przodu na wyspę i zabudowę z ciemnymi frontami i złotymi lampami.",
    width: 1920,
    height: 1080,
  },
  {
    src: k5,
    alt: "Luksusowa kuchnia w stylu nowoczesnym z drewnianą zabudową, jasnym marmurowym blatem i czarnymi hokerami, widok z boku.",
    width: 1920,
    height: 1080,
  },
  {
    src: k6,
    alt: "Ten sam projekt kuchni z drewnianymi frontami i marmurowym blatem, ujęcie z przodu na wyspę kuchenną i oświetlenie sufitowe.",
    width: 1920,
    height: 1080,
  },
];

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalImages = galleryImages.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dot settings
  const dotSize = 20; // px
  const dotSpacing = 40; // px between dots

  // Positions of each dot relative to the container center
  const dotPositions = Array.from(
    { length: totalImages },
    (_, i) => i * dotSpacing
  );

  // Yellow dot left position and width
  const yellowLeft = useTransform(scrollYProgress, (v) => {
    let left = 0; // relative to white dots container

    for (let i = 0; i < totalImages - 1; i++) {
      const start = i / (totalImages - 1); // scroll progress at start of photo
      const mid = start + 0.25 / (totalImages - 1); // yellow expands to next dot
      const end = (i + 1) / (totalImages - 1); // shrink completes

      if (v >= start && v <= mid) {
        left = dotPositions[i];
      } else if (v > mid && v <= end) {
        const progress = (v - mid) / (end - mid);
        left =
          dotPositions[i] + progress * (dotPositions[i + 1] - dotPositions[i]);
      }
    }

    return left;
  });

  const yellowWidth = useTransform(scrollYProgress, (v) => {
    if (!containerRef.current) return dotSize;

    let width = dotSize;

    for (let i = 0; i < totalImages - 1; i++) {
      const start = i / (totalImages - 1);
      const mid = start + 0.25 / (totalImages - 1);
      const end = (i + 1) / (totalImages - 1);

      if (v >= start && v <= mid) {
        const expandProgress = (v - start) / (mid - start);
        width = dotSize + expandProgress * dotSpacing;
      } else if (v > mid && v <= end) {
        const shrinkProgress = (v - mid) / (end - mid);
        width = dotSize + (1 - shrinkProgress) * dotSpacing;
      }
    }

    return width;
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: `calc(100vh * ${totalImages})`,
      }}
    >
      <div className="sticky w-full h-screen top-0 overflow-hidden">
        {galleryImages.map(({ src, alt, width, height }, index) => {
          let y: any;

          if (index === 0) {
            y = 0;
          } else {
            const rawProgress = useTransform(
              scrollYProgress,
              [(index - 1) / (totalImages - 1), index / (totalImages - 1)],
              [0, 1]
            );
            y = useTransform(rawProgress, (v) => 100 * (1 - v) + "%");
          }

          return (
            <motion.img
              key={index}
              src={src}
              alt={alt}
              width={width}
              height={height}
              decoding="async"
              style={{ y }}
              className="absolute inset-0 w-full h-full object-cover object-center"
              aria-hidden={false}
            />
          );
        })}

        {/* White dots */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-[20px] z-50"
          aria-hidden="true"
        >
          {galleryImages.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: dotSize,
                height: dotSize,
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
          ))}

          {/* Yellow dot overlay */}
          <motion.div
            className="absolute left-0 top-0 h-[20px] bg-yellow rounded-full"
            style={{
              left: yellowLeft,
              width: yellowWidth,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
