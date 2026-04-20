import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoKg from "@/assets/logo-kg.png";
import LanguageSwitcher from "./LanguageSwitcher";

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

  const waHref = `https://wa.me/5564999881043?text=${encodeURIComponent(t("hero.wa_message"))}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#d4b896] to-[#66503d] backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#inicio" className="block">
          <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-40 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-cream hover:text-primary transition-colors duration-300 tracking-wide drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-2.5 bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground text-sm font-medium rounded-sm hover:from-[#7a5c10] hover:to-[#d4bc7c] transition-all duration-300 tracking-wide"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-2.5 bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground text-sm font-medium rounded-sm text-center hover:from-[#7a5c10] hover:to-[#d4bc7c] transition-all duration-300"
          >
            {t("nav.cta")}
          </a>
          <div className="pt-2 border-t border-border">
            <div className="bg-brown-dark rounded-sm py-2">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
