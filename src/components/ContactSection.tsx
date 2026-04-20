import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";

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

    const text = encodeURIComponent(
      `${t("contact.wa_intro")} ${formData.name}.\n${t("contact.wa_email")}: ${formData.email}\n${t("contact.wa_phone")}: ${formData.phone}\n${t("contact.wa_message")}: ${formData.message}`
    );
    window.open(`https://wa.me/5564999881043?text=${text}`, "_blank");

    toast({
      title: t("contact.toast_title"),
      description: t("contact.toast_desc"),
    });

    setSending(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const waHref = `https://wa.me/5564999881043?text=${encodeURIComponent(t("hero.wa_message"))}`;

  return (
    <section id="contato" className="py-12 md:py-16 lg:py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">{t("contact.kicker")}</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            {t("contact.heading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Formulário */}
          <div className="bg-[#fbe074] rounded-sm p-8 md:p-10 order-1 lg:order-2">
            <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground text-center mb-2">
              {t("contact.form_title")}
            </h3>
            <p className="text-primary-foreground/80 text-center mb-8">
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
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                required
                maxLength={255}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("contact.phone")}
                required
                maxLength={20}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <textarea
                name="message"
                placeholder={t("contact.message")}
                rows={4}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 resize-y"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground font-bold uppercase tracking-widest rounded-sm hover:from-[#7a5c10] hover:to-[#d4bc7c] transition-all text-base"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>

          {/* Cards de contato */}
          <div className="space-y-4 order-2 lg:order-1">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors group"
            >
              <MessageCircle className="w-8 h-8 text-primary shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">{t("contact.card_wa")}</h3>
                <p className="text-muted-foreground text-base">(64) 99988-1043</p>
              </div>
            </a>

            <a
              href="mailto:keniagarcia.advocacia@gmail.com"
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-colors group"
            >
              <Mail className="w-8 h-8 text-primary shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">{t("contact.card_email")}</h3>
                <p className="text-muted-foreground text-sm break-all">keniagarcia.advocacia@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-card border border-border rounded-sm p-6">
              <MapPin className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl text-foreground">{t("contact.card_service")}</h3>
                <p className="text-muted-foreground text-base">{t("contact.card_service_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
