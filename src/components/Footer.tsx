import { useTranslation } from "react-i18next";
import logoKg from "@/assets/logo-kg.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-20 w-auto" />
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
