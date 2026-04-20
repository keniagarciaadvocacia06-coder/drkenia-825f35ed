import { MessageCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import draKenia from "@/assets/dra-kenia-enhanced.jpg";

import { openWhatsApp } from "@/lib/whatsapp";

const HeroSection = () => {
  const { t } = useTranslation();
  const waMessage = t("hero.wa_message");
...
            <button
              type="button"
              onClick={() => openWhatsApp(waMessage)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
            >
              <MessageCircle size={18} />
              {t("hero.cta")}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
