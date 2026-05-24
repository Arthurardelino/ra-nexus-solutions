import s1 from "@/assets/showcase-1.jpg";
import s2 from "@/assets/showcase-2.jpg";
import s3 from "@/assets/showcase-3.jpg";
import s4 from "@/assets/showcase-4.jpg";

const items = [
  { img: s1, title: "Home Office completo", tag: "Setup tech" },
  { img: s2, title: "Instalação elétrica premium", tag: "Elétrica" },
  { img: s3, title: "Drywall com iluminação", tag: "Acabamento" },
  { img: s4, title: "Painel de automação", tag: "Smart Home" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
              Projetos entregues
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Resultados que falam por si.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Ambientes transformados em soluções modernas, integradas e funcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl glass ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block w-fit text-[10px] tracking-[0.2em] uppercase glass-strong px-3 py-1 rounded-full mb-3 text-primary">
                    {it.tag}
                  </span>
                  <h3 className="font-display font-semibold text-xl">{it.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
