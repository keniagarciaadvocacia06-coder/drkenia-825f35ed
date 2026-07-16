import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { openWhatsApp } from "@/lib/whatsapp";

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
            <div className="w-full h-auto overflow-hidden rounded-2xl mb-8 border border-border bg-card">
              <img 
                src={image} 
                alt={title} 
                width={900}
                height={506}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/artigos/divorcio-unilateral.webp";
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