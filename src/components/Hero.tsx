"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-[#09263f] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-14 lg:h-[420px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-8 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#70ded6]">
            Ingeniería y Metalmecánica Industrial
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.2rem]">
            Diseño, Fabricación,
            <br />
            Montaje y Reparación
            <br />
            de <span className="text-[#20c7bf]">Maquinaria</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Soluciones industriales en estructuras metálicas, tuberías, tanques
            y equipos de proceso.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-[#11b8b2] px-6 py-3.5 text-sm font-bold text-[#09263f] transition-colors hover:bg-[#70ded6]"
            >
              Solicitar Cotización
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-slate-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#70ded6] hover:text-[#70ded6]"
            >
              Conocer Servicios
              <ArrowDownRight size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative w-full"
        >
          <div
            className="relative aspect-[16/8] w-full overflow-hidden rounded-l-[3rem] bg-[#123b59] sm:aspect-[16/7]"
          >
            <Image
              src="/images/Hero/soldador-principal.png"
              alt="Soldador realizando trabajos de unión en una tubería industrial"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09263f]/45 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
