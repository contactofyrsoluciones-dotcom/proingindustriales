import { Cable, Cylinder, Factory, Wrench } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Fabricación de estructuras metálicas",
  },
  {
    icon: Cable,
    title: "Instalación de tuberías industriales",
  },
  {
    icon: Cylinder,
    title: "Fabricación de tanques (acero inox.)",
  },
  {
    icon: Wrench,
    title: "Montaje y reparación industrial",
  },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-white"
      aria-labelledby="servicios-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-14 sm:pb-24 sm:pt-16 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#11b8b2]">
            Nuestros.
          </p>
          <h2
            id="servicios-title"
            className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#09263f] sm:text-5xl"
          >
            Servicios
          </h2>
          <div className="mt-7 h-1 w-16 bg-[#11b8b2]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="flex min-h-44 flex-col items-center justify-center rounded-xl bg-[#f1f5f7] px-5 py-8 text-center"
            >
              <Icon
                size={38}
                strokeWidth={1.35}
                className="mb-6 text-[#09263f]"
                aria-hidden="true"
              />
              <h3 className="max-w-[12rem] text-sm font-semibold leading-6 text-[#09263f]">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
