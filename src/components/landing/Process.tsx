import { MessageSquare, ClipboardCheck, Hammer, PartyPopper } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Contato", desc: "Você fala com a gente pelo WhatsApp ou formulário." },
  { icon: ClipboardCheck, title: "Avaliação", desc: "Diagnóstico técnico e orçamento transparente." },
  { icon: Hammer, title: "Execução", desc: "Time qualificado executa com agilidade e cuidado." },
  { icon: PartyPopper, title: "Entrega", desc: "Tudo testado, limpo e com garantia." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Como funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Simples, claro e <span className="text-gradient">sem surpresas.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all hover:-translate-y-1 duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-xl gradient-primary blur-md opacity-50" />
                      <s.icon className="w-5 h-5 text-primary-foreground relative" strokeWidth={2} />
                    </div>
                    <span className="font-display font-bold text-4xl text-muted-foreground/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
