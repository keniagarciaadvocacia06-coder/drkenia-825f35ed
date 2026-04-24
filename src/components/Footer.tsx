import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Instagram, Heart } from "lucide-react";
import logoKg from "@/assets/logo-kg.png";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card">
      {/* gold top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-24 w-auto" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Advocacia com fé, acolhimento e propósito. +15 anos cuidando de quem mais importa: você.
            </p>
            <p className="font-heading text-xs italic text-primary">
              "Bem-aventurados os que têm fome e sede de justiça." — Mt 5:6
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-widest text-primary">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" onClick={scrollTo("sobre")} className="text-muted-foreground transition-colors hover:text-primary">{t("nav.about")}</a></li>
              <li><a href="#areas" onClick={scrollTo("areas")} className="text-muted-foreground transition-colors hover:text-primary">{t("nav.areas")}</a></li>
              <li><a href="#diferenciais" onClick={scrollTo("diferenciais")} className="text-muted-foreground transition-colors hover:text-primary">{t("nav.differentials")}</a></li>
              <li><a href="#faq" onClick={scrollTo("faq")} className="text-muted-foreground transition-colors hover:text-primary">{t("nav.faq")}</a></li>
              <li><Link to="/artigos" className="text-muted-foreground transition-colors hover:text-primary">Artigos</Link></li>
              <li><a href="#contato" onClick={scrollTo("contato")} className="text-muted-foreground transition-colors hover:text-primary">{t("nav.contact")}</a></li>
            </ul>
          </div>

          {/* Áreas */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-widest text-primary">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Família e Sucessões</li>
              <li className="text-muted-foreground">Direito Previdenciário</li>
              <li className="text-muted-foreground">Direito Bancário</li>
              <li className="text-muted-foreground">Atendimento em todo o Brasil</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-widest text-primary">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <span>(64) 99988-1043</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:keniagarcia.advocacia@gmail.com"
                  className="group flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                  <span className="break-all">keniagarcia.advocacia@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span>Presencial e Online — Brasil</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/dra.keniagarcia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={buildWhatsAppUrl("Olá, gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>
            © {year} <span className="text-foreground">Kênia Garcia Advocacia</span>. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5">
            OAB/GO — Advocacia regulamentada
          </p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="h-3 w-3 fill-primary text-primary" /> e fé
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
