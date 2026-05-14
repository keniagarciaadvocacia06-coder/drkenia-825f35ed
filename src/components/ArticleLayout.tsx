import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoKg from "@/assets/logo-kg.png";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { buildWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

interface ArticleLayoutProps {
  title: string;
  description: string;
  image?: string;
  children: React.ReactNode;
}

const ArticleLayout = ({ title, description, image, children }: ArticleLayoutProps) => {
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
      <Navbar />

      {/* Article */}
      <main className="pt-28 pb-16 px-6">
        <article className="max-w-3xl mx-auto">
          <Link 
            to="/artigos" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Artigos
          </Link>

          {image && (
            <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-2xl mb-8 border border-border">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          )}

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
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ArticleLayout;