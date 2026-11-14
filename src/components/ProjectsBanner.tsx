import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ProjectsBanner() {
  return (
    <section
      id="proyectos"
      className="relative isolate min-h-[185px] overflow-hidden bg-[#092941] text-white"
      aria-labelledby="projects-banner-title"
    >
      <div className="absolute inset-y-0 right-0 w-full sm:w-[62%]">
        <Image
          src="/images/Proyectos/proyecto.jpg"
          alt="Estructura metálica industrial con plataformas y barandas amarillas"
          fill
          sizes="(min-width: 640px) 62vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#092941_0%,#092941_34%,rgba(9,41,65,0.94)_52%,rgba(9,41,65,0.48)_100%)]" />

      <div className="relative mx-auto flex min-h-[185px] max-w-7xl items-center px-6 py-8 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#20c7bf]">
            Proyectos
          </p>
          <h2
            id="projects-banner-title"
            className="mt-1 text-4xl font-semibold leading-none tracking-[-0.03em] text-[#20c7bf] sm:text-5xl"
          >
            Realizados
          </h2>
          <div className="mt-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm text-slate-200">
              Conoce algunos de nuestros trabajos industriales.
            </p>
            <a
              href="#proyectos"
              className="group inline-flex shrink-0 items-center gap-2 rounded-sm border border-white/80 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#20c7bf] hover:text-[#20c7bf]"
            >
              Ver proyectos
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
