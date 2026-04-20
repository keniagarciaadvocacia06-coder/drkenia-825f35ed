import { useTranslation } from "react-i18next";
import draKeniaAbout from "@/assets/dra-kenia-about.jpg";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="sobre" className="scroll-mt-24 py-12 md:py-16 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        <div className="relative w-full max-w-lg mx-auto">
          <div className="absolute -inset-2 border border-primary/20 rounded-sm" />
          <img
            src={draKeniaAbout}
            alt="Dra. Kênia Garcia - Advogada"
            className="w-full rounded-sm object-cover aspect-[3/4]"
            loading="lazy"
            decoding="async"
            width="900"
            height="1200"
          />
          <p className="text-center mt-6 font-heading text-2xl text-primary">{t("about.name")}</p>
        </div>
        <div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            {t("about.heading")}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
            {t("about.p1_pre")} <strong className="text-foreground">{t("about.p1_strong")}</strong> {t("about.p1_post")}
          </p>
          <blockquote className="border-l-2 border-primary pl-6 italic text-cream-muted mb-6 leading-relaxed text-base md:text-lg">
            {t("about.quote")}
          </blockquote>
          <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
            {t("about.p2")}
          </p>
          <p className="font-heading text-xl md:text-2xl text-primary italic">
            {t("about.verse")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
