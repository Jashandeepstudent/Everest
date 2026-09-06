"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/business";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-charcoal/15">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-display text-charcoal">
          {faq.question}
        </span>
        <Plus
          className={`w-5 h-5 text-rust shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p className="text-charcoal/65 leading-relaxed pb-6 max-w-prose">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <div className="container-shop grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16">
        <div>
          <p className="plate-number mb-3">06 — Questions</p>
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal leading-tight">
            Before you call.
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
