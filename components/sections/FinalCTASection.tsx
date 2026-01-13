"use client";

import { motion } from "framer-motion";
import { finalCta } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FinalCTASection = () => {
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
    <section className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-accent text-white border-0">
            <CardContent className="p-8 sm:p-12 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
                {finalCta.title}
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
                {finalCta.text}
              </p>
              <Button
                onClick={handleCtaClick}
                variant="secondary"
                size="lg"
                className="mb-4 whitespace-nowrap w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
              >
                {finalCta.button}
              </Button>
              <p className="text-sm opacity-80">
                {finalCta.reassurance}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

