import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Nosotros } from "@/components/Nosotros";
import { ProjectsBanner } from "@/components/ProjectsBanner";
import { Servicios } from "@/components/Servicios";
import { Strengths } from "@/components/Strengths";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Strengths />
        <Nosotros />
        <WhyChooseUs />
        <Servicios />
        <ProjectsBanner />
        <Clients />
      </main>
    </>
  );
}
