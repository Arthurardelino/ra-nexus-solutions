import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#showcase", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Clientes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[var(--shadow-card)]" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative gradient-primary w-9 h-9 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base tracking-tight">R&A</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Services</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px gradient-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="hidden sm:inline-flex items-center gap-2 gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all hover:scale-105"
          >
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
