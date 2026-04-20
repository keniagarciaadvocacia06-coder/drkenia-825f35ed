import { Scale, Heart, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Scale, Heart, ShieldCheck];

interface Item { title: string; desc: string; }

const PillarsSection = () => {
  const { t } = useTranslation();
  const items = t("pillars.items", { returnObjects: true }) as Item[];

  return (
    <section className="py-12 md:py-16 lg:py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">{t("pillars.kicker")}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-16">
          {t("pillars.heading")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <div
                key={pillar.title}
                className="bg-card p-8 rounded-sm border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
