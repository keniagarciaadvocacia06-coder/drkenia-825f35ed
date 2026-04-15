import logoKg from "@/assets/logo-kg.png";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-10 w-auto" />
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
