import { MessageCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

import { buildWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

const HeroSection = () => {
  const { t } = useTranslation();
  const waMessage = t("hero.wa_message");
  const waHref = buildWhatsAppUrl(waMessage);

  return (
    <section id="inicio" className="relative overflow-hidden bg-brown-dark pt-36 pb-16 xl:min-h-screen">
      {/* Desktop background image - right side */}
      <div className="absolute inset-0 hidden xl:block">
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
        <div className="-mx-6 md:-mx-12 lg:-mx-16 mb-10 overflow-hidden bg-brown-dark xl:hidden">
          <div className="relative h-[520px] md:h-[640px] lg:h-[720px]">
            <img
              src={draKenia}
              alt="Dra. Kênia Garcia - Advogada"
              className="w-full h-full object-cover object-[center_10%] brightness-110 md:object-[center_15%] lg:object-[center_12%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/65 via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex items-start xl:min-h-screen xl:items-center">
          <div className="max-w-xl">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
              {t("hero.title_1")}{" "}
              <em className="italic text-gold-gradient not-italic">{t("hero.title_faith")}</em>,
              <br />
              <span className="text-gold-gradient">{t("hero.title_welcoming")}</span> {t("hero.title_and")}{" "}
              <span className="text-gold-gradient underline decoration-1 underline-offset-8">{t("hero.title_purpose")}</span>.
            </h1>
            <p className="text-cream-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
              {t("hero.subtitle")}
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground font-medium rounded-sm hover:from-[#7a5c10] hover:to-[#d4bc7c] transition-all duration-300 tracking-wide text-sm"
            >
              <MessageCircle size={18} />
              {t("hero.cta")}
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
