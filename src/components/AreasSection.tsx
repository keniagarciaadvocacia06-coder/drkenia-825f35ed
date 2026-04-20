import { Users, Landmark, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

const areaKeys = [
  { key: "family", icon: Users },
  { key: "banking", icon: Landmark },
  { key: "social_security", icon: FileCheck },
] as const;

interface Service { name: string; desc: string; }

const AreasSection = () => {
  const { t } = useTranslation();

  return (
    <section id="areas" className="py-12 md:py-16 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">{t("areas.kicker")}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
          {t("areas.heading")}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
          {t("areas.subtitle")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {areaKeys.map((area) => {
          const Icon = area.icon;
          const services = t(`areas.${area.key}.services`, { returnObjects: true }) as Service[];
          const waText = t(`areas.${area.key}.wa`);
          return (
            <div
              key={area.key}
              className="bg-card border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-colors duration-300 flex flex-col"
            >
              <div className="p-8 flex-1">
                <Icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">{t(`areas.${area.key}.title`)}</h3>
                <p className="text-primary text-base mb-4 italic">{t(`areas.${area.key}.subtitle`)}</p>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{t(`areas.${area.key}.description`)}</p>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.name} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="text-foreground text-base font-medium">{service.name}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-secondary border-t border-border">
                <p className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wide">{t("areas.investment_label")}</p>
                <p className="text-muted-foreground text-base mb-4">{t(`areas.${area.key}.investment`)}</p>
                <button
                  type="button"
                  onClick={() => openWhatsApp(waText)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground text-sm font-medium rounded-sm hover:from-[#7a5c10] hover:to-[#d4bc7c] transition-all duration-300 w-full justify-center cursor-pointer"
                >
                  {t(`areas.${area.key}.cta`)}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AreasSection;
