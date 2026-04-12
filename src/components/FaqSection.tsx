import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa uma consulta?",
    answer: "Cada caso é único e os honorários são definidos após uma análise individual, respeitando a tabela da OAB e a complexidade da demanda. Entre em contato para uma avaliação inicial.",
  },
  {
    question: "Processos judiciais são muito demorados?",
    answer: "O tempo varia conforme a complexidade e o tipo de ação. Trabalhamos para agilizar ao máximo, buscando soluções extrajudiciais quando possível e acompanhando de perto o andamento processual.",
  },
  {
    question: "Posso ter certeza do resultado do meu caso?",
    answer: "Nenhum advogado pode garantir resultados. O que garantimos é uma análise honesta, estratégia sólida e dedicação total para alcançar o melhor resultado possível.",
  },
  {
    question: "Não sei se tenho direito. Como saber?",
    answer: "O primeiro passo é uma consulta para avaliar sua situação. Muitas pessoas descobrem que possuem direitos que desconheciam. Entre em contato e vamos analisar seu caso.",
  },
  {
    question: "Tenho medo de entrar na justiça e piorar a situação.",
    answer: "Esse é um receio comum. Por isso, oferecemos uma orientação transparente sobre os riscos e benefícios de cada caminho, para que você tome a melhor decisão com segurança.",
  },
  {
    question: "Vocês atendem online?",
    answer: "Sim! Atendemos de forma presencial e online, em todo o Brasil. Você pode agendar uma consulta por videoconferência com total comodidade e segurança.",
  },
];

const FaqSection = () => {
  return (
    <section id="duvidas" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Dúvidas Frequentes</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">Tire suas dúvidas</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-sm px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="font-heading text-lg text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
