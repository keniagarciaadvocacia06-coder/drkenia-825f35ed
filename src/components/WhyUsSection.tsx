import { Award, UserCheck, MessageSquare, Globe, Eye, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Award, UserCheck, MessageSquare, Globe, Eye, Zap];

interface Item { title: string; desc: string; }

const WhyUsSection = () => {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true }) as Item[];

  return (
    <section id="diferenciais" className="py-12 md:py-16 lg:py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">{t("why.kicker")}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">{t("why.heading")}</h2>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((r, i) => {
          const Icon = icons[i];
          return (
            <div key={r.title} className="flex gap-4 items-start p-6 bg-card rounded-sm border border-border hover:border-primary/40 transition-colors">
              <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{r.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUsSection;
