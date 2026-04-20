import { useTranslation } from "react-i18next";

const languages = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

interface Props {
  variant?: "desktop" | "mobile";
}

const LanguageSwitcher = ({ variant = "desktop" }: Props) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.split("-")[0] || "pt";

  return (
    <div className="flex items-center gap-1 rounded-sm bg-brown-dark/40 border border-cream/40 p-1">
      {languages.map((lng) => {
        const active = current === lng.code;
        return (
          <button
            key={lng.code}
            onClick={() => i18n.changeLanguage(lng.code)}
            aria-label={`Switch to ${lng.label}`}
            className={`text-sm font-bold tracking-wide px-2.5 py-1 rounded-sm transition-all ${
              active
                ? "bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground shadow-md scale-105"
                : "text-cream hover:bg-cream/10"
            }`}
          >
            <span className="mr-1 text-base">{lng.flag}</span>
            {lng.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
