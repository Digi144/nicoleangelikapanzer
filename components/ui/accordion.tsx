"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={cn(
      "border-b border-white/30 last:border-b-0",
      isOpen && "mb-8 lg:mb-10 pb-4"
    )}>
      <button
        className="flex w-full items-center justify-between py-6 lg:py-8 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg px-2 -mx-2"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-text pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted transition-transform duration-200 flex-shrink-0",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96 pt-4 pb-4 lg:pb-6" : "max-h-0"
        )}
      >
        <p className="text-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

