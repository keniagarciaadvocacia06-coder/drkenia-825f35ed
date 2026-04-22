import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoKg from "@/assets/logo-kg.png";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import { buildWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

interface ArticleLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ArticleLayout = ({ title, description, children }: ArticleLayoutProps) => {
  useEffect(() => {
    document.title = `${title} | Dra. Kênia Garcia - Advocacia`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-gradient-to-r from-[#d4b896] to-[#66503d] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <Link to="/" className="block">
            <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-20 w-auto" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Article */}
      <main className="pt-28 pb-16 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h1>
          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
            <h2 className="font-serif text-2xl text-primary mb-3">Precisa de orientação jurídica?</h2>
            <p className="text-muted-foreground mb-6">
              A Dra. Kênia Garcia possui mais de 15 anos de experiência em Direito de Família e Sucessões. Agende sua consulta.
            </p>
            <button
              onClick={() => openWhatsApp("Olá, vim do artigo sobre " + title + " e gostaria de agendar uma consulta.")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              FALE COM UM ESPECIALISTA
            </button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-20 w-auto" />
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default ArticleLayout;
