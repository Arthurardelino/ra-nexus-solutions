import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    area: "Botafogo, RJ",
    initials: "MC",
    text: "Montaram meu home office do zero: elétrica, internet e iluminação inteligente em dois dias. Profissionalismo absurdo.",
  },
  {
    name: "Rafael Almeida",
    area: "Barra da Tijuca, RJ",
    initials: "RA",
    text: "Fiz drywall + automação na sala e ficou cinematográfico. Atendimento rápido e acabamento impecável.",
  },
  {
    name: "Juliana Pereira",
    area: "Tijuca, RJ",
    initials: "JP",
    text: "Resolveram em uma tarde o que três 'maridos de aluguel' não conseguiram em semanas. Recomendo demais.",
  },
  {
    name: "Carlos Mendes",
    area: "Ipanema, RJ",
    initials: "CM",
    text: "Smart home instalada com perfeição. Hoje controlo tudo pelo celular. Equipe educada e pontual.",
  },
  {
    name: "Patricia Lopes",
    area: "Recreio, RJ",
    initials: "PL",
    text: "Atendimento premium do começo ao fim. Orçamento claro, prazo cumprido e zero sujeira no final.",
  },
  {
    name: "Bruno Carvalho",
    area: "Leblon, RJ",
    initials: "BC",
    text: "Modernizaram meu apartamento antigo com iluminação inteligente e novo cabeamento. Vale cada centavo.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Quem já experimentou
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Clientes que <span className="text-gradient">recomendam.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 hover:border-primary/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
