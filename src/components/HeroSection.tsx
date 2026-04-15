import { MessageCircle, ArrowRight } from "lucide-react";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-20 overflow-hidden bg-brown-dark">
      {/* Background image - right side */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%]">
          <img
            src={draKenia}
            alt="Dra. Kênia Garcia - Advogada"
            className="w-full h-full object-cover object-[center_15%]"
            loading="eager"
          />
          {/* Gradient overlay from left to blend with dark bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark via-brown-dark/40 to-transparent" />
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brown-dark to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center min-h-screen">
        <div className="max-w-xl">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
            Justiça com{" "}
            <em className="italic text-gold-gradient not-italic">fé</em>,
            <br />
            <span className="text-gold-gradient">acolhimento</span> e{" "}
            <span className="text-gold-gradient underline decoration-1 underline-offset-8">propósito</span>.
          </h1>
          <p className="text-cream-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            +15 anos de experiência em Família e Sucessões, Previdenciário e Bancário.
            Atendimento humanizado em todo o Brasil.
          </p>
          <a
            href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wide text-sm"
          >
            <MessageCircle size={18} />
            FALE COM UM ESPECIALISTA
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
