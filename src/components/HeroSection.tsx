import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-8">
          Advocacia Especializada
        </p>
        <div className="w-12 h-[2px] bg-primary mx-auto mb-10" />
        <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground leading-tight mb-8">
          Justiça com <em className="text-cream italic">fé</em>,
          <br />
          <span className="text-cream">acolhimento</span> e{" "}
          <span className="text-cream underline decoration-1 underline-offset-8">propósito</span>.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          +13 anos de experiência em Família e Sucessões, Previdenciário e Bancário. 
          Atendimento humanizado em todo o Brasil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wide text-sm"
          >
            <MessageCircle size={18} />
            AGENDE SUA CONSULTA
          </a>
          <a
            href="#areas"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium rounded-sm hover:bg-primary/10 transition-colors duration-300 tracking-wide text-sm"
          >
            CONHEÇA NOSSOS SERVIÇOS
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
