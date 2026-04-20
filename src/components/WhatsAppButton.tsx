import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const href = `https://wa.me/5564999881043?text=${encodeURIComponent(t("hero.wa_message"))}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:from-[#7a5c10] hover:to-[#d4bc7c] transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
