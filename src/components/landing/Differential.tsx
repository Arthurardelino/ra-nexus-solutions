import { Check, X, Sparkles } from "lucide-react";

const benefits = [
  { title: "Multisserviços em um único atendimento", desc: "Você resolve tudo com um único time qualificado." },
  { title: "Obra + tecnologia integradas", desc: "Pensamos infraestrutura para o seu setup inteligente." },
  { title: "Agilidade real", desc: "Atendimento e execução sem enrolação." },
  { title: "Menos burocracia", desc: "Um orçamento, um responsável, zero retrabalho." },
  { title: "Atendimento personalizado", desc: "Soluções pensadas para o seu imóvel e rotina." },
  { title: "Modernização de imóveis antigos", desc: "Trazemos tecnologia para qualquer espaço." },
];

const traditional = ["Vários profissionais diferentes", "Sem integração com tecnologia", "Prazos imprevisíveis", "Orçamentos confusos"];
const raServices = ["Um time, todos os serviços", "Smart Home nativo", "Cronograma claro", "Orçamento transparente"];

export function Differential() {
  return (
    <section id="diferencial" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Por que R&A Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Não somos só manutenção. Somos a <span className="text-gradient">nova engenharia</span> do seu espaço.
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {benefits.map((b) => (
            <div key={b.title} className="glass rounded-2xl p-6 hover:border-primary/30 transition-all">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
              </div>
              <h3 className="font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="font-semibold text-lg text-muted-foreground">Maridos de aluguel tradicionais</h3>
            </div>
            <ul className="space-y-3">
              {traditional.map((t) => (
                <li key={t} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive/70 shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative glass-strong rounded-2xl p-8 border-primary/30 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">R&A Services</h3>
              </div>
              <ul className="space-y-3">
                {raServices.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={3} />
                    <span className="text-sm font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
