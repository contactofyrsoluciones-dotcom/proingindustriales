import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROING INDUSTRIALES E.I.R.L.",
  description:
    "Ingeniería y metalmecánica industrial en Perú.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
