"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-5 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 justify-self-start"
          onClick={() => setIsOpen(false)}
          aria-label="PROING INDUSTRIALES, ir al inicio"
        >
          <Image
            src="/images/logo/proing-logo.png"
            alt="PROING INDUSTRIALES E.I.R.L."
            width={2172}
            height={724}
            priority
            className="h-auto w-[175px] object-contain sm:w-[195px]"
          />
        </a>

        <nav className="hidden items-center gap-7 justify-self-center lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#11b8b2]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden justify-self-end rounded-sm bg-[#11b8b2] px-5 py-2.5 text-sm font-bold text-[#09263f] transition-colors hover:bg-[#70ded6] lg:inline-flex"
        >
          Solicitar Cotización
        </a>

        <button
          type="button"
          className="rounded-sm p-2 text-[#09263f] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={25} strokeWidth={1.8} /> : <Menu size={25} strokeWidth={1.8} />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-4 inline-flex justify-center rounded-sm bg-[#11b8b2] px-5 py-3 text-sm font-bold text-[#09263f]"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Cotización
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
