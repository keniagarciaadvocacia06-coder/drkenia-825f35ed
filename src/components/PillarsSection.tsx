import { Scale, Heart, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Atuação Técnica",
    description: "Estratégia jurídica sólida, fundamentada na legislação e na jurisprudência atualizada.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Acolhimento e empatia em momentos delicados, com escuta ativa e acompanhamento próximo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Jurídica",
    description: "Transparência nas orientações e defesa firme dos seus direitos em todas as instâncias.",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Nossos Pilares</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-16">
          Compromisso com a defesa dos seus direitos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card p-8 rounded-sm border border-border hover:border-primary/40 transition-colors duration-300"
            >
              <pillar.icon className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl text-foreground mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
