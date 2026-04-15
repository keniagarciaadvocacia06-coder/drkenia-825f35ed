import { Award, UserCheck, MessageSquare, Globe, Eye, Zap } from "lucide-react";

const reasons = [
  { icon: Award, title: "+15 Anos de Experiência", desc: "Trajetória consolidada com centenas de casos resolvidos com sucesso." },
  { icon: UserCheck, title: "Atendimento Personalizado", desc: "Cada caso é tratado com atenção individual e estratégia sob medida." },
  { icon: MessageSquare, title: "Acompanhamento Próximo", desc: "Comunicação constante sobre o andamento do seu processo." },
  { icon: Globe, title: "Atendimento em Todo o Brasil", desc: "Presencial e online — onde você estiver, estamos ao seu lado." },
  { icon: Eye, title: "Transparência Total", desc: "Orientações claras sobre custos, prazos e possibilidades desde o início." },
  { icon: Zap, title: "Agilidade nas Soluções", desc: "Processos conduzidos com eficiência, buscando a melhor resolução no menor tempo." },
];

const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-12 md:py-16 lg:py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">Por que nos escolher</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">O que nos torna diferentes</h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 items-start p-6 bg-card rounded-sm border border-border hover:border-primary/40 transition-colors">
            <r.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
