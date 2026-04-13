import { MessageCircle, ArrowRight } from "lucide-react";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brown-dark">
      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 items-end gap-0">
        {/* Left - Text Content */}
        <div className="px-6 md:px-12 lg:px-16 py-12 md:py-24 flex flex-col justify-center min-h-[70vh]">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
            Justiça com{" "}
            <em className="italic text-gold-gradient not-italic">fé</em>,
            <br />
            <span className="text-gold-gradient">acolhimento</span> e{" "}
            <span className="text-gold-gradient underline decoration-1 underline-offset-8">propósito</span>.
          </h1>
          <p className="text-cream-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            +13 anos de experiência em Família e Sucessões, Previdenciário e Bancário.
            Atendimento humanizado em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
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

        {/* Right - Photo */}
        <div className="relative flex items-end justify-center md:justify-end">
          <img
            src={draKenia}
            alt="Dra. Kênia Garcia - Advogada"
            className="w-auto h-[75vh] object-cover object-top"
            loading="eager"
          />
          {/* Gradient fade at bottom to blend with background */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brown-dark to-transparent" />
          {/* Gradient fade on left edge to blend */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brown-dark to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
