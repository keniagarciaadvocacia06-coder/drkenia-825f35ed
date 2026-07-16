import { MessageCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import banner1Desktop from "@/assets/banner-1-desktop.webp";
import banner1Mobile from "@/assets/banner-1-mobile.webp";
import banner2Desktop from "@/assets/banner-2-desktop.webp";
import banner2Mobile from "@/assets/banner-2-mobile.webp";
import banner3Desktop from "@/assets/banner-3-desktop.webp";
import banner3Mobile from "@/assets/banner-3-mobile.webp";
import banner4Desktop from "@/assets/banner-4-desktop.webp";
import banner4Mobile from "@/assets/banner-4-mobile.webp";
import banner5Desktop from "@/assets/banner-5-desktop.webp";
import banner5Mobile from "@/assets/banner-5-mobile.webp";
import banner6Desktop from "@/assets/banner-6-desktop.webp";
import banner6Mobile from "@/assets/banner-6-mobile.webp";
import banner7Desktop from "@/assets/banner-7-desktop.webp";
import banner7Mobile from "@/assets/banner-7-mobile.webp";

import { openWhatsApp } from "@/lib/whatsapp";

const bannerImages = [
  { desktop: banner1Desktop, mobile: banner1Mobile },
  { desktop: banner2Desktop, mobile: banner2Mobile },
  { desktop: banner3Desktop, mobile: banner3Mobile },
  { desktop: banner4Desktop, mobile: banner4Mobile },
  { desktop: banner5Desktop, mobile: banner5Mobile },
  { desktop: banner6Desktop, mobile: banner6Mobile },
  { desktop: banner7Desktop, mobile: banner7Mobile },
];

const HeroSection = () => {
  const { t } = useTranslation();
  const waMessage = t("hero.wa_message");
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedCount, setLoadedCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % bannerImages.length;
        setLoadedCount((c) => Math.max(c, next + 1));
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="inicio" className="relative overflow-hidden bg-brown-dark pb-16 xl:min-h-screen">
      <div className="pointer-events-none absolute inset-0 hidden xl:block">
        <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden bg-brown-dark">
          {bannerImages.slice(0, loadedCount).map((img, idx) => (
            <picture
              key={idx}
              className={`absolute inset-0 block h-full w-full transition-opacity duration-1000 ${
                idx === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <source srcSet={img.mobile} media="(max-width: 767px)" />
              <img
                src={img.desktop}
                alt="Dra. Kênia Garcia - Advogada"
                width={1100}
                height={1650}
                decoding="async"
                fetchPriority={idx === 0 ? "high" : "low"}
                className="h-full w-full object-cover object-[center_5%]"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </picture>
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark via-brown-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brown-dark/80 to-transparent" />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="-mx-6 mb-10 overflow-hidden bg-brown-dark md:-mx-12 lg:-mx-16 xl:hidden">
          <div className="relative h-[520px] md:h-[640px] lg:h-[720px]">
            {bannerImages.slice(0, loadedCount).map((img, idx) => (
              <picture
                key={idx}
                className={`absolute inset-0 block h-full w-full transition-opacity duration-1000 ${
                  idx === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <source srcSet={img.mobile} media="(max-width: 767px)" />
                <img
                  src={img.desktop}
                  alt="Dra. Kênia Garcia - Advogada"
                  width={1100}
                  height={1650}
                  decoding="async"
                  fetchPriority={idx === 0 ? "high" : "low"}
                  className="h-full w-full object-cover object-[center_10%] md:object-[center_15%] lg:object-[center_12%]"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </picture>
            ))}

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
            <button
              type="button"
              onClick={() => openWhatsApp(waMessage)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
            >
              <MessageCircle size={18} />
              {t("hero.cta")}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
