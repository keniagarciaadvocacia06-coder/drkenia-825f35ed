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
    <div
      className={
        variant === "desktop"
          ? "flex items-center gap-1 rounded-sm border border-cream/30 px-1 py-1"
          : "flex items-center gap-2 justify-center pt-2"
      }
    >
      {languages.map((lng) => {
        const active = current === lng.code;
        return (
          <button
            key={lng.code}
            onClick={() => i18n.changeLanguage(lng.code)}
            aria-label={`Switch to ${lng.label}`}
            className={`text-xs font-semibold tracking-wide px-2 py-1 rounded-sm transition-colors ${
              active
                ? "bg-gradient-to-r from-[#8b6914] to-[#e8d090] text-primary-foreground"
                : "text-cream/80 hover:text-cream"
            }`}
          >
            <span className="mr-1">{lng.flag}</span>
            {lng.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
