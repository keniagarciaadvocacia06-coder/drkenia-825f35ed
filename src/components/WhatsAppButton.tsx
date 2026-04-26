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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 rounded-2xl bg-white px-4 py-3 pr-5 shadow-xl ring-1 ring-black/5 transition-transform hover:scale-[1.02] max-w-[20rem]"
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Fechar"
            className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground/80 text-background shadow hover:bg-foreground"
          >
            <X size={14} />
          </button>
          <div className="text-sm leading-snug text-foreground">
            <p className="font-bold">Olá, tudo bem?</p>
            <p>Fale conosco no WhatsApp!</p>
            <p>Rápido e seguro.</p>
          </div>
          <img
            src={draFoto}
            alt="Dra."
            className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-white"
          />
        </a>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(true)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe57]"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
