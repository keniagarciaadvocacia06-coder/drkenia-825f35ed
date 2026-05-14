import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoKg from "@/assets/logo-kg.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const artigos = [
  {
    slug: "guia-completo-divorcio",
    title: "Divórcio em 2026: tipos, etapas e custos",
    desc: "Guia completo: modalidades, documentos, prazos e como fazer com segurança.",
    image: "/images/artigos/dra-kenia-desk.jpg"
  },
  {
    slug: "divorcio-online",
    title: "Divórcio online",
    desc: "Como se separar com segurança, privacidade e sem sair de casa.",
    image: "/images/artigos/divorcio-online.jpg"
  },
  {
    slug: "divorcio-unilateral",
    title: "Divórcio sem assinatura do cônjuge",
    desc: "STJ: é possível pedir o divórcio mesmo sem o consentimento do outro.",
    image: "/images/artigos/divorcio-unilateral.jpg"
  },
  {
    slug: "quanto-custa-divorcio",
    title: "Quanto custa um divórcio?",
    desc: "Entenda os custos antes de tomar qualquer decisão.",
    image: "/images/artigos/quanto-custa.jpg"
  },
  {
    slug: "guarda-dos-filhos",
    title: "Como funciona a guarda dos filhos",
    desc: "Tipos de guarda, direitos dos pais e quando pedir mudança na Justiça.",
    image: "/images/artigos/dra-kenia-tablet.jpg"
  },
  {
    slug: "pensao-retroativa",
    title: "Pensão alimentícia retroativa",
    desc: "Quando é possível cobrar valores atrasados e como calcular.",
    image: "/images/artigos/pensao-retroativa.jpg"
  },
  {
    slug: "alimentos-compensatorios",
    title: "Alimentos compensatórios",
    desc: "Decisão do TJGO reconhece direito ao reequilíbrio econômico no divórcio.",
    image: "/images/artigos/dra-kenia-portrait-1.jpg"
  },
  { 
    slug: "emancipacao", 
    title: "Emancipação", 
    desc: "O que é, tipos e como funciona no Direito Brasileiro.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "guarda-compartilhada", 
    title: "Guarda Compartilhada", 
    desc: "Direitos, deveres e como funciona na prática.",
    image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "comunhao-parcial-de-bens", 
    title: "Comunhão Parcial de Bens", 
    desc: "O regime patrimonial mais comum no Brasil.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "pensao-socioafetiva", 
    title: "Pensão Socioafetiva", 
    desc: "Direitos dos filhos afetivos e multiparentalidade.",
    image: "https://images.unsplash.com/photo-1536640712247-c45474762887?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "direitos-genitor", 
    title: "Direitos do Genitor", 
    desc: "O que a lei garante aos pais após a separação.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "danos-morais", 
    title: "Danos Morais no Direito de Família", 
    desc: "Quando cabe indenização em questões familiares.",
    image: "https://images.unsplash.com/photo-1453948574633-3348078f9380?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "uniao-estavel", 
    title: "União Estável", 
    desc: "Direitos, deveres e como formalizar.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "concubinato", 
    title: "Concubinato", 
    desc: "Diferenças para união estável e direitos.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800"
  },
];

const Artigos = () => {
  useEffect(() => {
    document.title = "Artigos sobre Direito de Família e Sucessões | Dra. Kênia Garcia";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Artigos sobre Direito de Família e Sucessões
          </h1>
          <p className="text-muted-foreground mb-10">
            Conteúdos informativos para ajudar você a entender seus direitos.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {artigos.map((artigo) => (
              <Link
                key={artigo.slug}
                to={`/artigos/${artigo.slug}`}
                className="block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                {artigo.image && (
                  <div className="w-full h-48 overflow-hidden bg-muted">
                    <img 
                      src={artigo.image} 
                      alt={artigo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                <h2 className="font-serif text-xl text-primary group-hover:text-accent transition-colors mb-2">
                  {artigo.title}
                </h2>
                <p className="text-muted-foreground text-sm">{artigo.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Artigos;
