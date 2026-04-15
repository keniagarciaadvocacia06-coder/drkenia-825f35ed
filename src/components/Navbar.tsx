import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoKg from "@/assets/logo-kg.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#d4b896] to-[#66503d] backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#inicio" className="block">
          <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-40 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-gold-light transition-colors duration-300 tracking-wide"
        >
          FALE CONOSCO
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5564999881043?text=Olá, gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm text-center"
          >
            FALE CONOSCO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
