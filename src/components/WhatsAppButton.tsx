import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import draFoto from "@/assets/dra-foto-oficial.png";

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const message = t("hero.wa_message");
  const href = buildWhatsAppUrl(message);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {open && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 sm:gap-3 rounded-2xl bg-white px-3 py-2 pr-3 sm:px-4 sm:py-3 sm:pr-5 shadow-xl ring-1 ring-black/5 transition-transform hover:scale-[1.02] max-w-[16rem] sm:max-w-[20rem]"
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Fechar"
            className="absolute -top-2 -left-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-foreground/80 text-background shadow hover:bg-foreground"
          >
            <X size={12} />
          </button>
          <div className="text-xs sm:text-sm leading-snug text-foreground">
            <p className="font-bold">Olá, tudo bem?</p>
            <p>Fale conosco no WhatsApp!</p>
            <p>Rápido e seguro.</p>
          </div>
          <img
            src={draFoto}
            alt="Dra."
            className="h-10 w-10 sm:h-14 sm:w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-white"
          />
        </a>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(true)}
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe57]"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} className="sm:hidden" />
        <MessageCircle size={26} className="hidden sm:block" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
