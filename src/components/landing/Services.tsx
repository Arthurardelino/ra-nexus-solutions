import {
  Zap, Droplets, Layers, Wifi, Home, Monitor, Cpu, Wrench,
} from "lucide-react";

const services = [
  { icon: Zap, title: "Elétrica", desc: "Instalações, quadros e manutenções com segurança e normas técnicas." },
  { icon: Droplets, title: "Hidráulica", desc: "Reparos, instalações e detecção de vazamentos com precisão." },
  { icon: Layers, title: "Drywall", desc: "Paredes, divisórias e forros sob medida com acabamento premium." },
  { icon: Wifi, title: "Redes e Wi-Fi", desc: "Cabeamento estruturado e cobertura Wi-Fi sem zonas mortas." },
  { icon: Home, title: "Smart Home", desc: "Iluminação, cortinas e segurança integradas em um app." },
  { icon: Monitor, title: "Home Office", desc: "Setup completo: elétrica, internet, mobiliário e ergonomia." },
  { icon: Cpu, title: "Automação", desc: "Cenários, controle por voz e integração de dispositivos IoT." },
  { icon: Wrench, title: "Manutenção", desc: "Pequenos reparos e serviços gerais com agilidade e qualidade." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
            Nossos serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo o que seu espaço precisa, em <span className="text-gradient">um só time.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Construção civil e tecnologia integradas em um único atendimento. Sem dor de cabeça,
            sem múltiplos contratos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative glass rounded-2xl p-6 hover:bg-card/60 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center mb-5 group-hover:gradient-primary transition-all duration-500">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
