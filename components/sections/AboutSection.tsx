"use client";

import { motion } from "framer-motion";
import { aboutNicole } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
              {aboutNicole.title}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {aboutNicole.story}
            </p>
            <div className="flex flex-wrap gap-3">
              {aboutNicole.values.map((value, index) => (
                <span
                  key={index}
                  className="inline-block bg-card backdrop-blur-sm rounded-full px-4 py-2 border border-white/50 text-sm font-medium text-text"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/about-me.webp"
                  alt="Nicole Angelika Panzer - Yoga und Mentoring"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex justify-center">
          <Image
            src="/divider-panzer.webp"
            alt="Divider"
            width={600}
            height={5}
            className="w-1/2 max-w-[600px] h-auto"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

