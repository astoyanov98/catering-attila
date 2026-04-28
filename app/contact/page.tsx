import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакт | Attila Catering",
  description: "Свържете се с Attila Catering за кетъринг запитване.",
};

const eventTypes = [
  "Корпоративно събитие",
  "Частно събитие",
  "Коктейлен прием",
  "Рожден ден",
  "Семейно събиране",
  "Друго",
] as const;

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
            fill="#fcf8f3"
          />
        </svg>

        <div className="site-shell relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6c57]">
              Attila Catering
            </p>
            <div className="mt-5 flex items-center gap-4 sm:gap-6">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a9856f]" />
              <h1 className="shrink-0 font-serif text-5xl text-[#3f241b] sm:text-6xl">
                Контакт
              </h1>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a9856f]" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#715f54]">
              Разкажете ни за събитието си и ще подготвим подходящо кетъринг
              предложение според гостите, формата и предпочитаното меню.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8f3] pb-20 sm:pb-24">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <form className="rounded-[28px] border border-[#eaded2] bg-white p-6 shadow-[0_24px_70px_rgba(96,59,38,0.08)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-[#4a2d22]">
                    Име
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#4a2d22]">
                    Телефон
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#4a2d22]">
                    Имейл
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#4a2d22]">
                    Тип събитие
                  </span>
                  <select
                    name="eventType"
                    className="mt-2 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Изберете
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#4a2d22]">
                    Дата на събитието
                  </span>
                  <input
                    type="date"
                    name="date"
                    className="mt-2 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#4a2d22]">
                    Брой гости
                  </span>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    className="mt-2 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-[#4a2d22]">
                  Съобщение
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-[#dfd0c4] bg-white px-4 py-3 text-[#3f241b] outline-none transition-colors focus:border-[#9f1717]"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#9f1717] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(159,23,23,0.24)] transition-colors hover:bg-[#7f1212] sm:w-auto"
              >
                Изпрати запитване
              </button>
            </form>

            <aside className="rounded-[28px] border border-[#eaded2] bg-white p-6 shadow-[0_24px_70px_rgba(96,59,38,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9a7863]">
                Директен контакт
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#3f241b]">
                Нека уточним детайлите
              </h2>
              <p className="mt-4 leading-7 text-[#715f54]">
                За най-точна оферта подгответе ориентировъчен брой гости, дата,
                локация и предпочитани категории от менюто.
              </p>

              <div className="mt-7 space-y-4">
                <Link
                  href="tel:0882245771"
                  className="block rounded-2xl border border-[#eaded2] bg-[#fcf8f3] px-5 py-4 transition-colors hover:bg-[#f8efe8]"
                >
                  <span className="block text-sm uppercase tracking-[0.18em] text-[#8d6c57]">
                    Телефон
                  </span>
                  <span className="mt-1 block font-semibold text-[#4a2d22]">
                    088 224 5771
                  </span>
                </Link>

                <Link
                  href="https://attilacatering.bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-[#eaded2] bg-[#fcf8f3] px-5 py-4 transition-colors hover:bg-[#f8efe8]"
                >
                  <span className="block text-sm uppercase tracking-[0.18em] text-[#8d6c57]">
                    Уебсайт
                  </span>
                  <span className="mt-1 block font-semibold text-[#4a2d22]">
                    attilacatering.bg
                  </span>
                </Link>

                <div className="rounded-2xl border border-[#eaded2] bg-[#fcf8f3] px-5 py-4">
                  <span className="block text-sm uppercase tracking-[0.18em] text-[#8d6c57]">
                    Локация
                  </span>
                  <span className="mt-1 block font-semibold text-[#4a2d22]">
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
