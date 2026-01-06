"use client";

import { useState } from "react";

export interface AccordionItem {
  subHeading: string;
  copy: string;
}

export type AccordionStyle = "default" | "bullet-point" | "bordered";

interface AccordionProps {
  mainHeading: string;
  items: AccordionItem[];
  style?: AccordionStyle;
}

export function Accordion({
  mainHeading,
  items,
  style = "default",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Default state: closed, showing mainHeading and the first item below it.
  const visibleItems = isOpen ? items : items.slice(0, 1);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-2 text-left"
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-zinc-900">
          {mainHeading}
        </h2>
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-zinc-600">
          {isOpen ? "Show Less" : "Show More"}
        </span>
      </button>

      <ul
        className={`mt-6 space-y-6 text-zinc-600 ${
          style === "bullet-point" ? "list-disc pl-5" : ""
        }`}
      >
        {visibleItems.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col gap-1 ${
              style === "bordered"
                ? "rounded-lg border border-zinc-200 bg-zinc-50/50 p-6"
                : ""
            }`}
          >
            <span className="font-semibold text-zinc-900">
              {item.subHeading}
            </span>
            <span className="leading-relaxed text-zinc-600">{item.copy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
