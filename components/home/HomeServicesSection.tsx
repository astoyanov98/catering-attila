import Image from "next/image";
import { serviceCards, servicesContent } from "@/data/homePage";

export function HomeServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="site-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            {servicesContent.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-3xl text-site-text lg:text-4xl">
            {servicesContent.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-site-text/80">
            {servicesContent.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[28px] border border-accent/35 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(107,46,15,0.12)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="px-6 py-6">
                <h3 className="font-serif text-2xl text-primary">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-site-text/80">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
