import Image from "next/image";
import Link from "next/link";
import { featuredMenuContent, featuredMenuItems } from "@/data/homePage";

export function HomeFeaturedMenuSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <svg
        className="absolute left-0 top-0 h-28 w-full"
        viewBox="0 0 1600 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 H1600 V68 C1450 98 1290 116 1070 104 C820 91 642 25 398 34 C245 40 120 63 0 92 Z"
          fill="var(--background)"
        />
      </svg>

      <div className="site-shell relative pt-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              {featuredMenuContent.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-3xl text-site-text lg:text-4xl">
              {featuredMenuContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-site-text/80">
              {featuredMenuContent.description}
            </p>
          </div>

          <Link
            href={featuredMenuContent.cta.href}
            className="inline-flex items-center justify-center rounded-lg border border-accent bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            {featuredMenuContent.cta.label}
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredMenuItems.map((item) => (
            <article
              key={item.title}
              className="group min-h-[27rem] [perspective:1200px]"
            >
              <div className="relative h-full min-h-[27rem] transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-accent/35 bg-white shadow-[0_18px_44px_rgba(107,46,15,0.08)] [backface-visibility:hidden]">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-6 py-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-accent">
                      {item.subtitle}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl text-site-text">
                        {item.title}
                      </h3>
                      <span className="shrink-0 text-lg font-medium text-primary">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border border-accent/50 bg-primary p-6 text-white shadow-[0_28px_60px_rgba(107,46,15,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      Chef selection
                    </p>
                    <h3 className="mt-5 font-serif text-3xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-5 leading-7 text-white/82">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                    <span className="text-sm uppercase tracking-[0.18em] text-white/70">
                      {item.quantity}
                    </span>
                    <Link
                      href="/menu"
                      className="rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-primary"
                    >
                      Към менюто
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
