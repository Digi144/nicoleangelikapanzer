"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/lib/constants";
import { Accordion } from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
            Häufige Fragen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card backdrop-blur-sm rounded-card p-6 lg:p-10 border border-white/50">
            <Accordion items={faqItems} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

