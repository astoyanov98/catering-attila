import { contactCards, contactContent } from "@/data/homePage";

export function HomeContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="site-shell">
        <div className="relative overflow-hidden rounded-[34px] border border-accent/35 bg-secondary px-8 py-12 shadow-[0_26px_70px_rgba(107,46,15,0.10)] lg:px-12 lg:py-14">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/20" />
          <div className="absolute bottom-0 left-0 h-32 w-48 rounded-tr-[120px] bg-accent/15" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                {contactContent.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-3xl text-site-text lg:text-4xl">
                {contactContent.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-site-text/80">
                {contactContent.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[30rem]">
              {contactCards.map((card) =>
                "href" in card ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target={"external" in card ? "_blank" : undefined}
                    rel={"external" in card ? "noopener noreferrer" : undefined}
                    className="rounded-2xl border border-accent/35 bg-white px-5 py-5 text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-accent">
                      {card.title}
                    </p>
                    <p className="mt-2 font-medium text-primary">
                      {card.value}
                    </p>
                  </a>
                ) : (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-accent/35 bg-white px-5 py-5 text-center"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-accent">
                      {card.title}
                    </p>
                    <p className="mt-2 font-medium text-primary">
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
