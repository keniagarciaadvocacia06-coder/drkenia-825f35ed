import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { openWhatsApp } from "@/lib/whatsapp";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = `${t("contact.wa_intro")} ${formData.name}.\n${t("contact.wa_email")}: ${formData.email}\n${t("contact.wa_phone")}: ${formData.phone}\n${t("contact.wa_message")}: ${formData.message}`;
    openWhatsApp(text);

    toast({
      title: t("contact.toast_title"),
      description: t("contact.toast_desc"),
    });

    setSending(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const waMessage = t("hero.wa_message");

  return (
    <section id="contato" className="bg-secondary px-6 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-base uppercase tracking-[0.3em] text-muted-foreground">{t("contact.kicker")}</p>
          <h2 className="mb-6 font-heading text-4xl text-foreground md:text-5xl">
            {t("contact.heading")}
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground md:text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 rounded-sm bg-[#fbe074] p-8 md:p-10 lg:order-2">
            <h3 className="mb-2 text-center font-heading text-2xl text-primary-foreground md:text-3xl">
              {t("contact.form_title")}
            </h3>
            <p className="mb-8 text-center text-primary-foreground/80">
              {t("contact.form_subtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={t("contact.name")}
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                required
                maxLength={255}
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("contact.phone")}
                required
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <textarea
                name="message"
                placeholder={t("contact.message")}
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-y rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] py-4 text-base font-bold uppercase tracking-widest text-primary-foreground transition-all hover:from-[#7a5c10] hover:to-[#d4bc7c]"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>

          <div className="order-2 space-y-4 lg:order-1">
            <button
              type="button"
              onClick={() => openWhatsApp(waMessage)}
              className="group flex w-full cursor-pointer items-center gap-4 rounded-sm border border-border bg-card p-6 text-left transition-colors hover:border-primary/40"
            >
              <MessageCircle className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">{t("contact.card_wa")}</h3>
                <p className="text-base text-muted-foreground">(64) 99988-1043</p>
              </div>
            </button>

            <a
              href="mailto:keniagarcia.advocacia@gmail.com"
              className="group flex items-center gap-4 rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <Mail className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">{t("contact.card_email")}</h3>
                <p className="break-all text-sm text-muted-foreground">keniagarcia.advocacia@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-sm border border-border bg-card p-6">
              <MapPin className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">{t("contact.card_service")}</h3>
                <p className="text-base text-muted-foreground">{t("contact.card_service_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
