import { Users, Landmark, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { openWhatsApp } from "@/lib/whatsapp";
...
                <button
                  type="button"
                  onClick={() => openWhatsApp(waText)}
                  className="inline-flex w-full cursor-pointer justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b6914] to-[#e8d090] px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:from-[#7a5c10] hover:to-[#d4bc7c]"
                >
                  {t(`areas.${area.key}.cta`)}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AreasSection;
