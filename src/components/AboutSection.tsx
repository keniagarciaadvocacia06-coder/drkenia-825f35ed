import draKeniaAbout from "@/assets/dra-kenia-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
          <img
            src={draKeniaAbout}
            alt="Dra. Kênia Garcia - Advogada"
            className="w-full max-w-md mx-auto rounded-sm object-cover aspect-[3/4]"
            loading="lazy"
          />
          <p className="text-center mt-6 font-heading text-2xl text-primary">Dra. Kênia Garcia</p>
        </div>
        <div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            Justiça com fé, acolhimento e propósito
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Com <strong className="text-foreground">13 anos de experiência</strong> no mercado jurídico, 
            a Dra. Kênia Garcia construiu sua carreira sobre um pilar fundamental: a crença de que cada 
            pessoa merece ser tratada com dignidade, respeito e empatia.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 italic text-cream-muted mb-6 leading-relaxed">
            "A minha missão sempre foi proporcionar um atendimento humanizado, onde o cliente se sinta 
            acolhido e compreendido. Acredito que cada caso é único e que, mais do que oferecer soluções 
            jurídicas, é essencial estar ao lado do meu cliente em cada passo do processo."
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Guiada pela fé e pelos princípios cristãos, a Dra. Kênia enxerga no exercício da advocacia 
            um chamado divino — uma oportunidade de servir ao próximo e levar justiça àqueles que mais precisam.
          </p>
          <p className="font-heading text-lg text-primary italic">
            "Bem-aventurados os que têm fome e sede de justiça, porque serão fartos." — Mateus 5:6
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
