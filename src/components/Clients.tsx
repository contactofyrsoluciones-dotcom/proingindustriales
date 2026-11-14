import Image from "next/image";

const clients = [
  {
    src: "/images/Clientes/logo-polindustria.png",
    alt: "Polindustria S.A.",
    width: 200,
    height: 73,
  },
  {
    src: "/images/Clientes/LOGO1.png",
    alt: "Corporación Pflucker S.R.L.",
    width: 170,
    height: 60,
  },
  {
    src: "/images/Clientes/Logo (1).png",
    alt: "Molitalia",
    width: 417,
    height: 94,
  },
];

export function Clients() {
  return (
    <section
      id="clientes"
      className="border-t border-white/10 bg-[#0b2942] text-white"
      aria-label="Clientes de PROING INDUSTRIALES"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.25em] text-white">
          Nuestros <span className="text-[#20c7bf]">Clientes</span>
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/15 px-6 pb-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8 lg:pb-14">
        {clients.map((client) => (
          <div
            key={client.src}
            className="group flex h-32 items-center justify-center px-8 py-5 transition-transform duration-300 hover:-translate-y-0.5 sm:h-36"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              sizes="(min-width: 640px) 25vw, 80vw"
              className="h-12 w-[210px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
