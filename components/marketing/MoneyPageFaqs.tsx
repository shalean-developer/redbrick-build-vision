"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { question: string; answer: string };

export function MoneyPageFaqs({ items, heading }: { heading: string; items: Faq[] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-14" aria-labelledby="money-page-faq-heading">
      <h2 id="money-page-faq-heading" className="text-2xl font-bold mb-4">
        {heading}
      </h2>
      <Accordion type="single" collapsible className="w-full border-t">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
