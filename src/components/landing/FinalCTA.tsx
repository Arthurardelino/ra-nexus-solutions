import { MessageCircle, ArrowRight, Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto glass-strong rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium">Agendamentos limitados por região</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
              Seu espaço merece uma <br />
              <span className="text-gradient">infraestrutura moderna.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Garanta sua avaliação gratuita e descubra como transformar seu imóvel em poucos dias.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all glow-cyan w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </a>
              <a
                href="mailto:contato@raservices.com.br"
                className="group inline-flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-card/60 transition-all w-full sm:w-auto justify-center"
              >
                Solicitar orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
