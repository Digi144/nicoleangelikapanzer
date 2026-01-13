"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <section id="stimmen" className="py-16 lg:py-24 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-text mb-6">
            Was Klientinnen und Klienten sagen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-card transition-shadow duration-200 flex flex-col">
                <CardContent className="p-6 lg:p-8 flex flex-col flex-grow">
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed mb-6 italic flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-text">
                      — {testimonial.author}
                    </p>
                    {testimonial.location && (
                      <p className="text-xs text-muted mt-1">
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
      </div>
    </section>
  );
};

