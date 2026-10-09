"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="accordion divide-y divide-border border-t border-b border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="accordion-trigger group flex w-full items-center justify-between gap-6 py-7 text-left text-[17px] font-medium text-ink"
              >
                <span className="transition-opacity duration-200 group-hover:opacity-70">{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-muted transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="accordion-answer pb-6 text-[15px] leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
