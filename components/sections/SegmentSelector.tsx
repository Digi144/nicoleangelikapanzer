"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { segmentOptions } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";

export const SegmentSelector = () => {
  const [activeSegment, setActiveSegment] = useState<"essenz" | "energie">("essenz");

  const activeContent = segmentOptions[activeSegment];

  const handleCtaClick = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="angebot" className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Pill Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => setActiveSegment("essenz")}
              className={`w-full text-left p-6 rounded-card transition-all duration-200 ${
                activeSegment === "essenz"
                  ? "bg-accent text-white shadow-card"
                  : "bg-card text-text hover:bg-card/80 border border-white/50"
              }`}
            >
              <h3 className="text-xl font-serif font-semibold mb-2">
                Wahre Essenz
              </h3>
              <p className="text-sm opacity-90">
                Für Frauen & Jugendliche
              </p>
            </button>

            <button
              onClick={() => setActiveSegment("energie")}
              className={`w-full text-left p-6 rounded-card transition-all duration-200 ${
                activeSegment === "energie"
                  ? "bg-accent text-white shadow-card"
                  : "bg-card text-text hover:bg-card/80 border border-white/50"
              }`}
            >
              <h3 className="text-xl font-serif font-semibold mb-2">
                Mehr Energie & Balance
              </h3>
              <p className="text-sm opacity-90">
                Für Stress & Burnout-Prävention
              </p>
            </button>
          </div>

          {/* Right: Content Card with Image below */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeSegment}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-4">
                    {activeContent.title}
                  </h2>
                  <p className="text-lg text-muted mb-8 leading-relaxed">
                    {activeContent.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {activeContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <Icon name={benefit.icon} size={20} className="text-accent" />
                        </div>
                        <p className="text-text leading-relaxed break-words">{benefit.text}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleCtaClick}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto whitespace-nowrap mb-8 text-sm sm:text-base"
                  >
                    Jetzt kostenloses Gespräch vereinbaren
                  </Button>

                  {/* Image below button - full width */}
                  <div className="w-full">
                    <div className="relative aspect-[16/9] w-full rounded-card overflow-hidden">
                      <Image
                        src={activeSegment === "essenz" ? "/wahreesenz.webp" : "/energie-balance.webp"}
                        alt={activeSegment === "essenz" ? "Finde deine wahre Essenz" : "Mehr Energie und Balance"}
                        fill
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

