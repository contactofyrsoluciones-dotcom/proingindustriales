# PROING INDUSTRIALES E.I.R.L.

Landing page corporativa para una empresa peruana de ingeniería y metalmecánica
industrial.

## Stack

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Arquitectura prevista

```text
src/
├── app/             # Rutas, layout raíz, metadatos y estilos globales
├── components/      # Componentes reutilizables de la landing
├── data/            # Contenido estático de servicios, proyectos y clientes
├── lib/             # Utilidades compartidas y configuración
└── types/           # Tipos TypeScript del dominio
```

La aplicación será estática y no tendrá backend, base de datos ni servicios de
autenticación. El formulario de contacto preparará el mensaje de cotización
directamente para WhatsApp.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

El diseño visual y los componentes de la landing se implementarán en una fase
posterior, con autorización explícita.
