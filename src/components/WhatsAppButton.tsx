import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppRelayUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const message = t("hero.wa_message");

  return (
    <a
      href={buildWhatsAppRelayUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
