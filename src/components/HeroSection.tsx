import { MessageCircle, ArrowRight } from "lucide-react";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brown-dark pt-36 pb-16 lg:min-h-screen">
      {/* Desktop background image - right side */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute right-0 top-[136px] bottom-0 w-[60%] overflow-hidden bg-brown-dark">
          <img
            src={draKenia}
            alt="Dra. Kênia Garcia - Advogada"
            className="w-full h-full object-cover object-[center_5%] brightness-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark via-brown-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brown-dark/80 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Mobile & tablet hero image */}
        <div className="-mx-6 md:-mx-12 mb-10 overflow-hidden bg-brown-dark lg:hidden">
          <div className="relative h-[360px] md:h-[600px]">
            <img
              src={draKenia}
              alt="Dra. Kênia Garcia - Advogada"
              className="w-full h-full object-contain object-top brightness-110 md:object-cover md:object-[center_15%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/65 via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex items-start lg:min-h-screen lg:items-center">
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
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
