import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакт | Attila Catering",
  description: "Свържете се с Attila Catering за кетъринг запитване.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow bg-white">
      <section className="relative overflow-hidden bg-white pb-20 pt-6 sm:pb-24 sm:pt-10">
        <svg
          className="absolute bottom-0 left-0 h-[200px] w-full"
          viewBox="0 0 1600 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 90 C230 140 430 170 680 154 C930 138 1110 52 1330 42 C1450 36 1540 46 1600 56 L1600 220 L0 220 Z"
            fill="var(--wave)"
          />
        </svg>

        <div className="site-shell relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Attila Catering
            </p>
            <div className="mt-5 flex items-center gap-4 sm:gap-6">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent" />
              <h1 className="shrink-0 font-serif text-5xl text-primary sm:text-6xl">
                Контакт
              </h1>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-site-text/75">
              Разкажете ни за събитието си и ще подготвим подходящо кетъринг
              предложение според гостите, формата и предпочитаното меню.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary pb-20 sm:pb-24">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <ContactForm />

            <aside className="rounded-[28px] border border-accent/35 bg-white p-6 shadow-[0_24px_70px_rgba(107,46,15,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Директен контакт
              </p>
              <h2 className="mt-4 font-serif text-3xl text-primary">
                Нека уточним детайлите
              </h2>
              <p className="mt-4 leading-7 text-site-text/75">
                За най-точна оферта подгответе ориентировъчен брой гости, дата,
                локация и предпочитани категории от менюто.
              </p>

              <div className="mt-7 space-y-4">
                <Link
                  href="tel:0882245771"
                  className="block rounded-2xl border border-accent/35 bg-secondary px-5 py-4 transition-colors hover:bg-accent/15"
                >
                  <span className="block text-sm uppercase tracking-[0.18em] text-accent">
                    Телефон
                  </span>
                  <span className="mt-1 block font-semibold text-primary">
                    088 224 5771
                  </span>
                </Link>

                <div className="rounded-2xl border border-accent/35 bg-secondary px-5 py-4">
                  <span className="block text-sm uppercase tracking-[0.18em] text-accent">
                    Локация
                  </span>
                  <span className="mt-1 block font-semibold text-primary">
                    София, България
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
