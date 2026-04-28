"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type MenuItem = {
  name: string;
  description: string;
  quantity: string;
  priceEur: string;
  priceBgn: string;
  imageSrc: string;
  imageAlt: string;
};

export type MenuSection = {
  title: string;
  shortTitle: string;
  subtitle: string;
  items: MenuItem[];
};

type MenuCategoryTabsProps = {
  sections: MenuSection[];
};

export function MenuCategoryTabs({ sections }: MenuCategoryTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  return (
    <div>
      <div className="mx-auto max-w-6xl pb-3">
        <div className="grid grid-cols-2 gap-3 px-1 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          {sections.map((section, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`min-h-12 rounded-xl px-3 py-3 text-sm font-semibold leading-tight transition-all duration-300 sm:px-5 ${
                  isActive
                    ? "bg-[#9f1717] text-white shadow-[0_14px_30px_rgba(159,23,23,0.24)]"
                    : "bg-white text-[#6c5a51] shadow-[0_12px_28px_rgba(96,59,38,0.08)] hover:bg-[#f8efe8] hover:text-[#4a2d22]"
                }`}
                aria-pressed={isActive}
              >
                {section.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={activeSection.title}
        className="animate-[menuPanelIn_260ms_ease-out]"
      >
        <div className="mx-auto mt-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#3f241b] sm:text-4xl">
            {activeSection.title}
          </h2>
          <p className="mt-3 text-base leading-7 text-[#715f54]">
            {activeSection.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-x-7 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeSection.items.map((item, itemIndex) => (
            <article
              key={`${activeSection.title}-${item.name}`}
              className="group relative flex min-h-[21rem] flex-col rounded-[26px] border border-[#eaded2] bg-white px-5 pb-5 pt-24 shadow-[0_22px_55px_rgba(96,59,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8bdab] hover:shadow-[0_30px_70px_rgba(96,59,38,0.14)]"
              style={{
                animation: "menuCardIn 320ms ease-out both",
                animationDelay: `${Math.min(itemIndex, 7) * 45}ms`,
              }}
            >
              <div className="absolute left-1/2 top-1 h-[139px] w-[139px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_18px_40px_rgba(96,59,38,0.16)] ring-4 ring-[#fcf8f3]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="139px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl leading-none text-[#3f241b]">
                  {item.name}
                </h3>
                <span className="mt-1 shrink-0 rounded-full bg-[#fcf8f3] px-3 py-1 text-xs font-semibold text-[#8d6c57]">
                  {item.quantity}
                </span>
              </div>

              {item.description ? (
                <p className="mt-4 flex-1 text-[0.95rem] leading-6 text-[#6f5f56]">
                  {item.description}
                </p>
              ) : (
                <div className="flex-1" />
              )}

              <div className="mt-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xl font-bold text-[#9f1717]">€{item.priceEur}</p>
                  <p className="text-sm text-[#8a7568]">{item.priceBgn} лв.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#9f1717] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(159,23,23,0.22)] transition-colors hover:bg-[#7f1212]"
                >
                  Запитване +
                </Link>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
