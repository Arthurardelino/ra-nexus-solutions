import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Differential } from "@/components/landing/Differential";
import { Showcase } from "@/components/landing/Showcase";
import { Process } from "@/components/landing/Process";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "R&A Services | Manutenção, infraestrutura e tecnologia no Rio de Janeiro" },
      {
        name: "description",
        content:
          "Multisserviços residenciais e corporativos no Rio: elétrica, hidráulica, drywall, redes, Smart Home, Home Office e automação. Um único time, solução completa.",
      },
      { property: "og:title", content: "R&A Services | Infraestrutura + Tecnologia" },
      {
        property: "og:description",
        content:
          "Da elétrica ao Home Office inteligente: resolvemos tudo com agilidade, qualidade e tecnologia.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differential />
        <Showcase />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
