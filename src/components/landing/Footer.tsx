import { Zap, Instagram, Facebook, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="gradient-primary w-9 h-9 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base">R&A Services</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Multisserviços</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-6">
              A infraestrutura e a tecnologia que o seu espaço precisa. Construção civil + tecnologia
              em um único atendimento.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#diferencial" className="hover:text-foreground transition-colors">Diferencial</a></li>
              <li><a href="#showcase" className="hover:text-foreground transition-colors">Projetos</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors">Como funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-foreground transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                (21) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                contato@raservices.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Rio de Janeiro, RJ
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} R&A Services. Todos os direitos reservados.</p>
          <p>A infraestrutura e a tecnologia que o seu espaço precisa.</p>
        </div>
      </div>
    </footer>
  );
}
