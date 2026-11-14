import Image from "next/image";
import { Cog } from "lucide-react";

export function Nosotros() {
  return (
    <section
      id="nosotros"
      className="overflow-hidden bg-white"
      aria-labelledby="nosotros-title"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-12 sm:pb-16 sm:pt-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="relative">
          <div
            className="relative aspect-[2/1] overflow-hidden rounded-xl bg-slate-100"
          >
            <Image
              src="/images/nosotros/tanque-industrial.png"
              alt="Tanque industrial de acero inoxidable con trabajadores en planta"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[50%_58%]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-24 w-24 bg-[#11b8b2] sm:-bottom-4 sm:-right-4 sm:h-28 sm:w-28"
            style={{ clipPath: "polygon(34% 0, 100% 0, 100% 66%, 66% 100%, 0 100%, 0 34%)" }}
          />
        </div>

        <div className="relative">
          <Cog
            aria-hidden="true"
            size={260}
            strokeWidth={0.7}
            className="pointer-events-none absolute -right-28 -top-24 text-[#09263f]/[0.06]"
          />
          <div className="relative">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#11b8b2]">
              Nosotros
            </p>
            <h2
              id="nosotros-title"
              className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#09263f] sm:text-4xl"
            >
              PROING INDUSTRIALES E.I.R.L.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
              Somos una empresa peruana dedicada a brindar soluciones
              industriales de ingeniería y metalmecánica, con experiencia en el
              diseño, fabricación, montaje, reparación y modificación de
              equipos e instalaciones industriales.
            </p>
            <div className="mt-8 h-1 w-16 bg-[#11b8b2]" />
          </div>
        </div>
      </div>
    </section>
  );
}
