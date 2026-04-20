import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoKg from "@/assets/logo-kg.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { openWhatsApp } from "@/lib/whatsapp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
...
  const waMessage = t("hero.wa_message");
  const handleWhatsAppClick = () => {
    setIsOpen(false);
    openWhatsApp(waMessage);
  };

  return (
...
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="inline-flex cursor-pointer rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-6 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
          >
            {t("nav.cta")}
          </button>
...
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="block w-full cursor-pointer rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
          >
            {t("nav.cta")}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
