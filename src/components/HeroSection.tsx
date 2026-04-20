import { MessageCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

const HeroSection = () => {
  const { t } = useTranslation();
  const waMessage = t("hero.wa_message");

  return (
    <section id="inicio" className="relative overflow-hidden bg-brown-dark pt-36 pb-16 xl:min-h-screen">
      <div className="pointer-events-none absolute inset-0 hidden xl:block">
        <div className="absolute right-0 top-[136px] bottom-0 w-[60%] overflow-hidden bg-brown-dark">
          <img
            src={draKenia}
            alt="Dra. Kênia Garcia - Advogada"
            className="h-full w-full object-cover object-[center_5%] brightness-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark via-brown-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brown-dark/80 to-transparent" />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="-mx-6 mb-10 overflow-hidden bg-brown-dark md:-mx-12 lg:-mx-16 xl:hidden">
          <div className="relative h-[520px] md:h-[640px] lg:h-[720px]">
            <img
              src={draKenia}
              alt="Dra. Kênia Garcia - Advogada"
              className="h-full w-full object-cover object-[center_10%] brightness-110 md:object-[center_15%] lg:object-[center_12%]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown-dark/65 via-transparent to-transparent" />
          </div>
        </div>

        <div className="flex items-start xl:min-h-screen xl:items-center">
          <div className="max-w-xl">
            <h1 className="mb-6 font-heading text-5xl font-light leading-tight text-cream md:text-6xl lg:text-7xl">
              {t("hero.title_1")} <em className="text-gold-gradient not-italic">{t("hero.title_faith")}</em>,
              <br />
              <span className="text-gold-gradient">{t("hero.title_welcoming")}</span> {t("hero.title_and")} <span className="text-gold-gradient underline decoration-1 underline-offset-8">{t("hero.title_purpose")}</span>.
            </h1>
            <p className="mb-10 max-w-lg text-lg font-light leading-relaxed text-cream-muted md:text-xl">
              {t("hero.subtitle")}
            </p>
            <a
              href={buildWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
            >
              <MessageCircle size={18} />
              {t("hero.cta")}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
