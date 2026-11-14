import { Award, Ruler, ShieldCheck, UsersRound } from "lucide-react";
import Image from "next/image";

const reasons = [
  "Personal especializado",
  "Calidad y confiabilidad",
  "Seguridad en cada proyecto",
];

const strengths = [
  { icon: Award, title: "Garantía" },
  { icon: UsersRound, title: "Profesionales" },
  { icon: ShieldCheck, title: "Seguridad" },
  { icon: Ruler, title: "Diseños" },
];

export function WhyChooseUs() {
  return (
    <section
      className="overflow-hidden bg-white"
      aria-labelledby="why-choose-us-title"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#11b8b2]">
              ¿Quiénes somos?
            </p>
            <h2
              id="why-choose-us-title"
              className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#09263f] sm:text-5xl"
            >
              ¿Por qué elegirnos?
            </h2>
            <div className="mt-7 h-1 w-16 bg-[#11b8b2]" />
            <div className="mt-10 space-y-6">
              {reasons.map((reason, index) => (
                <div key={reason} className="flex items-center gap-5">
                  <span className="text-2xl font-semibold text-[#11b8b2]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-semibold text-[#09263f]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src="/images/nosotros/tanque-industrial.png"
                alt="Tanque industrial de acero inoxidable con trabajadores en planta"
                fill
                sizes="(min-width: 1024px) 34vw, 65vw"
                className="object-cover object-[50%_58%]"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src="/images/proyectos/proyecto.jpg"
                alt="Estructura metálica industrial con plataformas y barandas amarillas"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 sm:mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#11b8b2]">
            Nuestras fortalezas
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: Icon, title }) => (
              <article
                key={title}
                className="flex min-h-32 flex-col items-center justify-center rounded-xl bg-[#f1f5f7] px-5 py-7 text-center"
              >
                <Icon
                  size={30}
                  strokeWidth={1.35}
                  className="mb-4 text-[#09263f]"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-[#09263f]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
