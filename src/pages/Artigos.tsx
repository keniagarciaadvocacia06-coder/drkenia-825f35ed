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
    title: "Divórcio em 2026: tipos, etapas, custos e como fazer com segurança",
    desc: "Guia completo: modalidades, documentos, prazos e como fazer com segurança.",
    image: "/images/artigos/guia-divorcio.png"
  },
  {
    slug: "divorcio-online",
    title: "Divórcio online",
    desc: "Como se separar com segurança, privacidade e sem sair de casa.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "divorcio-unilateral",
    title: "Divórcio sem assinatura do cônjuge",
    desc: "STJ: é possível pedir o divórcio mesmo sem o consentimento do outro.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "quanto-custa-divorcio",
    title: "Quanto custa um divórcio?",
    desc: "Entenda os custos antes de tomar qualquer decisão.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "guarda-dos-filhos",
    title: "Como funciona a guarda dos filhos",
    desc: "Tipos de guarda, direitos dos pais e quando pedir mudança na Justiça.",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "pensao-retroativa",
    title: "Pensão alimentícia retroativa",
    desc: "Quando é possível cobrar valores atrasados e como calcular.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "alimentos-compensatorios",
    title: "Alimentos compensatórios",
    desc: "Decisão do TJGO reconhece direito ao reequilíbrio econômico no divórcio.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "pensao-filho-autismo",
    title: "Pensão para filho com autismo",
    desc: "Direitos, necessidades reais e a possibilidade de pensão vitalícia.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "emancipacao", 
    title: "Emancipação", 
    desc: "O que é, tipos e como funciona no Direito Brasileiro.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "guarda-compartilhada", 
    title: "Guarda Compartilhada", 
    desc: "Direitos, deveres e como funciona na prática.",
    image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "comunhao-parcial-bens", 
    title: "Comunhão Parcial de Bens", 
    desc: "O regime patrimonial mais comum no Brasil.",
    image: "https://images.unsplash.com/photo-1582213726895-32ac44efd557?auto=format&fit=crop&q=80&w=800"
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
    image: "https://images.unsplash.com/photo-1481107561552-06839e944b61?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "danos-morais", 
    title: "Danos Morais no Direito de Família", 
    desc: "Quando cabe indenização em questões familiares.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
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
                className="block overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group hover:bg-muted"
              >
                {artigo.image && (
                  <div className="w-full aspect-video overflow-hidden bg-muted relative">
                    <img 
                      src={artigo.image} 
                      alt={artigo.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4 p-1.5">
                      <img src={logoKg} alt="Logo" className="h-8 w-auto brightness-0 invert" />
                    </div>
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
