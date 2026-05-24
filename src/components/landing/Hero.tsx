import { MessageCircle, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Ambiente moderno com automação residencial"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium tracking-wide">Atendimento em todo Rio de Janeiro</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.05] mb-6 animate-fade-up">
            Manutenção, infraestrutura e{" "}
            <span className="text-gradient">tecnologia</span> em um só lugar.
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Da elétrica ao Home Office inteligente: a R&A Services resolve tudo com agilidade,
            qualidade e tecnologia.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-7 py-4 rounded-xl hover:scale-105 transition-all glow-cyan"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 glass-strong px-7 py-4 rounded-xl font-semibold hover:bg-card/80 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            {["Atendimento rápido", "Solução completa", "Profissionais qualificados"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
