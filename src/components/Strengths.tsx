import { BadgeCheck, HardHat, ShieldCheck } from "lucide-react";

const strengths = [
  {
    icon: HardHat,
    title: "Personal especializado",
    description: "Experiencia técnica para cada desafío industrial.",
  },
  {
    icon: BadgeCheck,
    title: "Calidad y confiabilidad",
    description: "Procesos orientados a resultados consistentes.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad en cada proyecto",
    description: "Cuidamos a las personas, los procesos y el entorno.",
  },
];

export function Strengths() {
  return (
    <section className="bg-white" aria-label="Fortalezas de PROING INDUSTRIALES">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8 lg:py-10">
        {strengths.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4 px-0 py-5 sm:px-8 sm:py-2 first:sm:pl-0 last:sm:pr-0">
            <Icon size={28} strokeWidth={1.5} className="shrink-0 text-[#11b8b2]" />
            <div>
              <h2 className="text-sm font-bold text-[#09263f]">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
