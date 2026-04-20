import { Users, Landmark, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppRelayUrl } from "@/lib/whatsapp";

const areaKeys = [
  { key: "family", icon: Users },
  { key: "banking", icon: Landmark },
  { key: "social_security", icon: FileCheck },
] as const;

interface Service { name: string; desc: string; }

const AreasSection = () => {
  const { t } = useTranslation();

  return (
    <section id="areas" className="px-6 py-12 md:py-16 lg:py-24">
      <div className="mx-auto mb-8 max-w-6xl text-center md:mb-12 lg:mb-16">
        <p className="mb-4 text-base uppercase tracking-[0.3em] text-muted-foreground">{t("areas.kicker")}</p>
        <h2 className="mb-4 font-heading text-4xl text-foreground md:text-5xl">
          {t("areas.heading")}
        </h2>
        <p className="mx-auto max-w-xl text-base text-muted-foreground md:text-lg">
          {t("areas.subtitle")}
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {areaKeys.map((area) => {
          const Icon = area.icon;
          const services = t(`areas.${area.key}.services`, { returnObjects: true }) as Service[];
          const waText = t(`areas.${area.key}.wa`);
          return (
            <div
              key={area.key}
              className="flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex-1 p-8">
                <Icon className="mb-6 h-10 w-10 text-primary" strokeWidth={1.5} />
                <h3 className="mb-2 font-heading text-2xl text-foreground md:text-3xl">{t(`areas.${area.key}.title`)}</h3>
                <p className="mb-4 text-base italic text-primary">{t(`areas.${area.key}.subtitle`)}</p>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">{t(`areas.${area.key}.description`)}</p>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.name} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="text-base font-medium text-foreground">{service.name}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border bg-secondary p-8">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">{t("areas.investment_label")}</p>
                <p className="mb-4 text-base text-muted-foreground">{t(`areas.${area.key}.investment`)}</p>
                <a
                  href={buildWhatsAppRelayUrl(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full cursor-pointer justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
                >
                  {t(`areas.${area.key}.cta`)}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AreasSection;
