import Image from "next/image";
import { aboutContent, aboutFeatureTiles, qualityPoints } from "@/data/homePage";

export function HomeAboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fcf8f3] py-20 lg:py-28"
    >
      <div className="site-shell relative z-10 flex flex-col gap-16 lg:flex-row lg:items-start">
        <div className="max-w-xl flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6c57]">
            {aboutContent.eyebrow}
          </p>
          <h2 className="mt-5 font-serif text-3xl text-[#2d1f1b] lg:text-4xl">
            {aboutContent.title}
          </h2>
          <p className="mt-6 leading-8 text-[#5f5a57]">
            {aboutContent.description}
          </p>
          <div className="mt-8 space-y-4">
            {qualityPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-[#eaded2] bg-white/70 px-4 py-4"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8d6c57]" />
                <p className="text-[#5f5a57]">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <svg
            className="pointer-events-none absolute bottom-0 right-0 h-full min-h-[220px] w-full opacity-90"
            viewBox="0 0 500 350"
            preserveAspectRatio="xMaxYMax slice"
          >
            <path
              d="M500 350 L500 120 Q450 80 380 100 Q300 130 220 90 Q150 55 80 120 Q20 180 0 250 L0 350 Z"
              fill="#f6eee7"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-1 gap-6 rounded-[30px] bg-white p-8 shadow-[0_26px_70px_rgba(96,59,38,0.10)] sm:grid-cols-3 lg:p-10">
            {aboutFeatureTiles.map((tile) => (
              <FeatureTile key={tile.title} {...tile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureTile({
  imageSrc,
  imageAlt,
  title,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center overflow-hidden p-4 text-center">
      <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <span className="font-medium text-[#6b4a3c]">{title}</span>
    </div>
  );
}
