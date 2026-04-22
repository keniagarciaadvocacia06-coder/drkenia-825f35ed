import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoKg from "@/assets/logo-kg.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const artigos = [
  { slug: "emancipacao", title: "Emancipação", desc: "O que é, tipos e como funciona no Direito Brasileiro." },
  { slug: "guarda-compartilhada", title: "Guarda Compartilhada", desc: "Direitos, deveres e como funciona na prática." },
  { slug: "comunhao-parcial-de-bens", title: "Comunhão Parcial de Bens", desc: "O regime patrimonial mais comum no Brasil." },
  { slug: "pensao-socioafetiva", title: "Pensão Socioafetiva", desc: "Direitos dos filhos afetivos e multiparentalidade." },
  { slug: "direitos-do-genitor", title: "Direitos do Genitor", desc: "O que a lei garante aos pais após a separação." },
  { slug: "danos-morais-direito-de-familia", title: "Danos Morais no Direito de Família", desc: "Quando cabe indenização em questões familiares." },
  { slug: "uniao-estavel", title: "União Estável", desc: "Direitos, deveres e como formalizar." },
  { slug: "concubinato", title: "Concubinato", desc: "Diferenças para união estável e direitos." },
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
                className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <h2 className="font-serif text-xl text-primary group-hover:text-accent transition-colors mb-2">
                  {artigo.title}
                </h2>
                <p className="text-muted-foreground text-sm">{artigo.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoKg} alt="KG — Kênia Garcia Advocacia" className="h-20 w-auto" />
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Artigos;
