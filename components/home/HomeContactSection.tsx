import { contactCards, contactContent } from "@/data/homePage";

export function HomeContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[34px] border border-[#eaded2] bg-[#fcf8f3] px-8 py-12 shadow-[0_26px_70px_rgba(96,59,38,0.10)] lg:px-12 lg:py-14">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#f0e2d6]" />
          <div className="absolute bottom-0 left-0 h-32 w-48 rounded-tr-[120px] bg-[#f4e8dd]" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6c57]">
                {contactContent.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-3xl text-[#2d1f1b] lg:text-4xl">
                {contactContent.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#64564d]">
                {contactContent.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[30rem]">
              {contactCards.map((card) =>
                card.href ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="rounded-2xl border border-[#e2d4c8] bg-white px-5 py-5 text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8d6c57]">
                      {card.title}
                    </p>
                    <p className="mt-2 font-medium text-[#4a2d22]">
                      {card.value}
                    </p>
                  </a>
                ) : (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#e2d4c8] bg-white px-5 py-5 text-center"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#8d6c57]">
                      {card.title}
                    </p>
                    <p className="mt-2 font-medium text-[#4a2d22]">
                      {card.value}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
