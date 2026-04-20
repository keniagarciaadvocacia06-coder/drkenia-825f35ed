import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

interface Item { q: string; a: string; }

const FaqSection = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as Item[];

  return (
    <section id="duvidas" className="py-12 md:py-16 lg:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">{t("faq.kicker")}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">{t("faq.heading")}</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-sm px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="font-heading text-xl md:text-2xl text-foreground hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
