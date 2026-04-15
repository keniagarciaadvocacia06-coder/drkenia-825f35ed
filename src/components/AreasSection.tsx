import { Users, Landmark, FileCheck } from "lucide-react";

const areas = [
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    subtitle: "Proteção para o seu patrimônio e a sua família",
    description: "Atuação em questões que envolvem relações familiares e planejamento sucessório, com sensibilidade e estratégia.",
    services: [
      { name: "Divórcio Consensual e Litigioso", desc: "Dissolução do casamento com partilha de bens e definição de guarda" },
      { name: "Inventário e Partilha", desc: "Regularização patrimonial de forma ágil e segura" },
      { name: "Pensão Alimentícia", desc: "Fixação, revisão ou exoneração de alimentos" },
      { name: "Planejamento Sucessório", desc: "Proteção patrimonial com testamento, doação e holding familiar" },
      { name: "Guarda e Regulamentação de Visitas", desc: "Definição do melhor interesse da criança ou adolescente" },
      { name: "União Estável", desc: "Reconhecimento, dissolução e conversão em casamento" },
    ],
    investment: "O investimento é definido após análise individual do caso, considerando complexidade, urgência e modalidade de atendimento.",
    whatsappText: "Olá, gostaria de saber mais sobre Direito de Família.",
    ctaLabel: "Consultar sobre Família",
  },
  {
    icon: Landmark,
    title: "Direito Bancário",
    subtitle: "Defesa contra abusos de instituições financeiras",
    description: "Proteção dos seus direitos como consumidor bancário, com análise técnica de contratos e cobranças indevidas.",
    services: [
      { name: "Revisão de Contratos Bancários", desc: "Identificação de cláusulas abusivas e juros excessivos" },
      { name: "Fraudes Bancárias", desc: "Ação contra empréstimos consignados não autorizados e golpes" },
      { name: "Negativação Indevida", desc: "Remoção do nome de cadastros de inadimplentes + indenização" },
      { name: "Superendividamento", desc: "Renegociação e plano de pagamento conforme a Lei 14.181/21" },
      { name: "Ação de Repetição de Indébito", desc: "Restituição de valores cobrados indevidamente" },
    ],
    investment: "Honorários adequados à natureza da demanda — consulta inicial para avaliação do caso sem compromisso.",
    whatsappText: "Olá, gostaria de saber mais sobre Direito Bancário.",
    ctaLabel: "Consultar sobre Direito Bancário",
  },
  {
    icon: FileCheck,
    title: "Direito Previdenciário",
    subtitle: "Conquiste o benefício que você merece",
    description: "Assistência completa em benefícios do INSS, desde o requerimento administrativo até a esfera judicial.",
    services: [
      { name: "Aposentadoria", desc: "Por idade, tempo de contribuição, especial e por invalidez" },
      { name: "Auxílio-Doença e BPC/LOAS", desc: "Benefícios por incapacidade e assistência social" },
      { name: "Pensão por Morte", desc: "Para dependentes do segurado falecido" },
      { name: "Revisão de Benefícios", desc: "Correção de valores e teses revisionais" },
      { name: "Planejamento Previdenciário", desc: "Simulação e melhor estratégia para sua aposentadoria" },
    ],
    investment: "Cada situação previdenciária é única — os honorários são discutidos com total transparência após avaliação do caso.",
    whatsappText: "Olá, gostaria de saber mais sobre Direito Previdenciário.",
    ctaLabel: "Consultar sobre Previdenciário",
  },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-12 md:py-16 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">Áreas de Atuação</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
          Soluções jurídicas para cada momento da sua vida
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
          Conheça nossas áreas de atuação e entenda como podemos ajudar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {areas.map((area) => (
          <div
            key={area.title}
            className="bg-card border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-colors duration-300 flex flex-col"
          >
            <div className="p-8 flex-1">
              <area.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">{area.title}</h3>
              <p className="text-primary text-base mb-4 italic">{area.subtitle}</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">{area.description}</p>

              <div className="space-y-4">
                {area.services.map((service) => (
                  <div key={service.name} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="text-foreground text-base font-medium">{service.name}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-secondary border-t border-border">
              <p className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wide">Sobre o investimento</p>
              <p className="text-muted-foreground text-base mb-4">{area.investment}</p>
              <a
                href={`https://wa.me/5564999881043?text=${encodeURIComponent(area.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 w-full justify-center"
              >
                {area.ctaLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasSection;
