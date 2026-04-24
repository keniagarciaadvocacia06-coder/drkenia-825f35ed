import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

type Testimonial = {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  area: string;
  color: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Souza",
    initials: "MS",
    rating: 5,
    date: "há 2 semanas",
    text: "A Dra. Kênia conduziu meu divórcio com muita sensibilidade e profissionalismo. Me senti acolhida do início ao fim. Recomendo de olhos fechados.",
    area: "Direito de Família",
    color: "bg-rose-500",
  },
  {
    name: "Roberto Almeida",
    initials: "RA",
    rating: 5,
    date: "há 1 mês",
    text: "Excelente atendimento no inventário do meu pai. Explicou cada etapa com clareza e resolveu tudo de forma rápida. Profissional de altíssimo nível.",
    area: "Sucessões",
    color: "bg-blue-500",
  },
  {
    name: "Juliana Carvalho",
    initials: "JC",
    rating: 5,
    date: "há 3 semanas",
    text: "Consegui minha aposentadoria após anos de tentativas. A Dra. Kênia foi incansável no meu caso previdenciário. Gratidão eterna!",
    area: "Previdenciário",
    color: "bg-emerald-500",
  },
  {
    name: "Carlos Eduardo",
    initials: "CE",
    rating: 5,
    date: "há 2 meses",
    text: "Atendimento humanizado de verdade. Resolveu uma questão bancária complexa que outros advogados disseram ser impossível. Super recomendo.",
    area: "Direito Bancário",
    color: "bg-amber-600",
  },
  {
    name: "Patrícia Nogueira",
    initials: "PN",
    rating: 5,
    date: "há 1 semana",
    text: "Profissional ética, dedicada e muito competente. Me ajudou na guarda compartilhada com muita estratégia. Indico para todos!",
    area: "Família",
    color: "bg-purple-500",
  },
  {
    name: "Fernando Lima",
    initials: "FL",
    rating: 5,
    date: "há 1 mês",
    text: "Atendimento online impecável, mesmo eu morando em outro estado. Comunicação clara, prazos cumpridos e resultado excelente.",
    area: "Sucessões",
    color: "bg-teal-500",
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);
  const total = TESTIMONIALS.length;

  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-heading"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho com resumo estilo Google */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Depoimentos de clientes
          </span>
          <h2
            id="avaliacoes-heading"
            className="text-3xl md:text-4xl font-serif text-foreground mb-6"
          >
            O que dizem sobre nosso atendimento
          </h2>

          <div className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
            <div className="text-left">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{avg}</span>
                <Stars rating={5} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Baseado em {total}+ avaliações de clientes
              </p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Estilo Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                className="absolute top-4 right-4 h-6 w-6 text-primary/15"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center h-11 w-11 rounded-full text-white font-semibold text-sm ${t.color}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <Stars rating={t.rating} />
                <span className="text-[10px] uppercase tracking-wider text-primary font-medium">
                  {t.area}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{t.text}"
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
          Depoimentos reais de clientes atendidos. Por questões de sigilo profissional, nomes e
          detalhes podem ser preservados conforme solicitação.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
