"use client";

import { Fragment, useState } from "react";
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
                className={`min-h-12 cursor-pointer rounded-xl px-3 py-3 text-sm font-semibold leading-tight transition-all duration-300 sm:px-5 ${
                  isActive
                    ? "bg-primary text-white shadow-[0_14px_30px_rgba(107,46,15,0.24)]"
                    : "bg-white text-site-text/70 shadow-[0_12px_28px_rgba(107,46,15,0.08)] hover:bg-secondary hover:text-primary"
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
        <div className="h-12"></div>

        <div className="mt-16 grid gap-x-7 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeSection.items.map((item, itemIndex) => (
            <Fragment key={`${activeSection.title}-${item.name}`}>
              <article
                className="overflow-hidden rounded-[24px] border border-accent/35 bg-white shadow-[0_22px_55px_rgba(107,46,15,0.08)] md:hidden"
                style={{
                  animation: "menuCardIn 320ms ease-out both",
                  animationDelay: `${Math.min(itemIndex, 7) * 45}ms`,
                }}
              >
                <div className="relative h-52 overflow-hidden bg-secondary">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {item.quantity}
                  </span>
                </div>

                <div className="px-5 py-5">
                  <h3 className="font-serif text-[1.7rem] leading-tight text-primary">
                    {item.name}
                  </h3>

                  <p className="mt-4 rounded-2xl border border-accent/25 bg-secondary/60 px-4 py-4 text-[0.95rem] leading-6 text-site-text/75">
                    {item.description ||
                      "Предлага се като част от кетъринг селекцията."}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-accent/25 pt-4">
                    <div>
                      <p className="text-xl font-bold text-primary">
                        €{item.priceEur}
                      </p>
                      <p className="text-sm text-site-text/65">
                        {item.priceBgn} лв.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(107,46,15,0.22)] transition-opacity hover:opacity-90"
                    >
                      Запитване +
                    </Link>
                  </div>
                </div>
              </article>

              <article
                className="group hidden min-h-[23.5rem] outline-none [perspective:1200px] md:block"
                style={{
                  animation: "menuCardIn 320ms ease-out both",
                  animationDelay: `${Math.min(itemIndex, 7) * 45}ms`,
                }}
                tabIndex={0}
              >
                <div className="relative h-full min-h-[23.5rem] transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col rounded-[26px] border border-accent/35 bg-white px-5 pb-5 pt-20 shadow-[0_22px_55px_rgba(107,46,15,0.08)] transition-shadow duration-300 [backface-visibility:hidden] group-hover:border-accent group-hover:shadow-[0_30px_70px_rgba(107,46,15,0.14)]">
                    <div className="absolute left-1/2 top-1 h-[139px] w-[139px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_18px_40px_rgba(107,46,15,0.16)] ring-4 ring-secondary">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="139px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="mt-3">
                        <h3 className="min-h-[3.4rem] overflow-hidden font-serif text-[1.55rem] leading-[1.08] text-primary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                          {item.quantity}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-accent/25 bg-secondary/70 px-3 py-3">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-[0_8px_18px_rgba(107,46,15,0.08)]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M4 10h16" />
                              <path d="M5 10a7 7 0 0 1 14 0" />
                              <path d="M4 14h16" />
                              <path d="M6 18h12" />
                            </svg>
                          </span>
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-site-text/55">
                            Селекция
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-[0_8px_18px_rgba(107,46,15,0.08)]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M7 10h10" />
                              <path d="M7 14h7" />
                              <path d="M5 5h14v14H5z" />
                            </svg>
                          </span>
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-site-text/55">
                            Детайли
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-[0_8px_18px_rgba(107,46,15,0.08)]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M12 3v18" />
                              <path d="M8 7h8" />
                              <path d="M7 21h10" />
                              <path d="M6 11h12l-2 5H8z" />
                            </svg>
                          </span>
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-site-text/55">
                            Поръчка
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xl font-bold text-primary">
                            €{item.priceEur}
                          </p>
                          <p className="text-sm text-site-text/65">
                            {item.priceBgn} лв.
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(107,46,15,0.22)] transition-opacity hover:opacity-90"
                        >
                          Запитване +
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-[26px] border border-accent/50 bg-primary px-5 pb-5 pt-20 text-white shadow-[0_30px_70px_rgba(107,46,15,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="absolute left-1/2 top-1 h-[139px] w-[139px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_18px_40px_rgba(107,46,15,0.28)] ring-4 ring-secondary" />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="min-h-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                          Детайли
                        </p>

                        <h3 className="mt-4 overflow-hidden font-serif text-[1.45rem] leading-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                          {item.quantity}
                        </p>
                        <p className="mt-4 max-h-[8.8rem] overflow-y-auto pr-1 text-[0.92rem] leading-6 text-white/85">
                          {item.description ||
                            "Предлага се като част от кетъринг селекцията."}
                        </p>
                      </div>

                      <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/20 pt-5">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                            Цена
                          </p>
                          <p className="mt-1 text-xl font-semibold text-white">
                            €{item.priceEur}
                          </p>
                          <p className="text-sm text-white/65">
                            {item.priceBgn} лв.
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-primary"
                        >
                          Запитване
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
