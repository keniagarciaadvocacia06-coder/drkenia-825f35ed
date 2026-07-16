import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoKg from "@/assets/logo-kg.webp";
import LanguageSwitcher from "./LanguageSwitcher";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: t("nav.home"), href: isHome ? "#inicio" : "/" },
    { label: t("nav.about"), href: isHome ? "#sobre" : "/#sobre" },
    { label: t("nav.areas"), href: isHome ? "#areas" : "/#areas" },
    { label: t("nav.articles"), href: "/artigos" },
    { label: t("nav.differentials"), href: isHome ? "#diferenciais" : "/#diferenciais" },
    { label: t("nav.faq"), href: isHome ? "#duvidas" : "/#duvidas" },
    { label: t("nav.contact"), href: isHome ? "#contato" : "/#contato" },
  ];

  const waMessage = t("hero.wa_message");
  const waHref = buildWhatsAppUrl(waMessage);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/30 bg-gradient-to-r from-[#d4b896] to-[#66503d] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-24">
        <Link to="/" className="block">
          <img src={logoKg} alt="KG — Kênia Garcia Advocacia" width={420} height={221} className="h-10 w-auto block lg:h-20" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:text-primary drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:text-primary drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-4 py-1.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
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
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            )
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
