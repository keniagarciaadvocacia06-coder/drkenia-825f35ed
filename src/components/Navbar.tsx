import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoKg from "@/assets/logo-kg.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.areas"), href: "#areas" },
    { label: t("nav.differentials"), href: "#diferenciais" },
    { label: t("nav.faq"), href: "#duvidas" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  const waMessage = t("hero.wa_message");
  const waHref = buildWhatsAppUrl(waMessage);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-gradient-to-r from-[#d4b896] to-[#66503d] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="#inicio" className="block">
          <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-40 w-auto" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium tracking-wide text-cream transition-colors duration-300 hover:text-primary drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-6 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
          >
            {t("nav.cta")}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-cream"
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-4 border-t border-border bg-background px-6 py-6 lg:hidden">
          <div className="border-b border-border pb-4">
            <div className="mb-3 flex items-center gap-2 text-muted-foreground">
              <Globe size={16} />
              <span className="text-xs font-semibold uppercase tracking-widest">
                {t("nav.language", { defaultValue: "Idioma / Language" })}
              </span>
            </div>
            <LanguageSwitcher />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full cursor-pointer rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
          >
            {t("nav.cta")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
