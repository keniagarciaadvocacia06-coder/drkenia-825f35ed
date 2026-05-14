import ArticleLayout from "@/components/ArticleLayout";

const PensaoRetroativa = () => (
  <ArticleLayout
    title="Pensão alimentícia retroativa: quando é possível cobrar valores atrasados?"
    description="Entenda o que é a pensão alimentícia retroativa, a partir de quando pode ser cobrada, prazo prescricional, cálculo e o que fazer quando o pai nunca pagou."
    image="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=1200"
  >
    <p>
      Muita gente acredita que a pensão alimentícia só começa a valer depois que o juiz profere a decisão final. Na prática, não é bem assim. Em alguns casos, mesmo que a decisão demore meses para sair, o responsável pode ser obrigado a quitar valores referentes a um período anterior — é a chamada <strong>pensão alimentícia retroativa</strong>.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O que é?</h2>
    <p>
      É o valor que pode ser cobrado em relação a um período anterior ao início efetivo do pagamento — parcelas que deveriam ter sido pagas desde determinado marco jurídico, mas não foram. Em regra, os alimentos fixados judicialmente <strong>retroagem à data da citação</strong> do responsável.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Pode ser cobrada desde o nascimento da criança?</h2>
    <p>
      Em regra, <strong>não</strong>. A cobrança retroativa fica limitada à data da citação na ação de alimentos. Por isso, é fundamental buscar orientação jurídica o quanto antes — a demora pode gerar prejuízo significativo.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quando é possível cobrar?</h2>
    <h3 className="font-serif text-xl text-primary/80 mt-6 mb-2">1. Ação proposta com decisão demorada</h3>
    <p>Se o pai foi citado em fevereiro e o juiz só fixou o valor em julho, pode haver cobrança desde a data da citação.</p>
    <h3 className="font-serif text-xl text-primary/80 mt-6 mb-2">2. Alimentos provisórios não pagos</h3>
    <p>Se o juiz fixou alimentos provisórios e o devedor não pagou, as parcelas vencidas formam dívida alimentar passível de cobrança.</p>
    <h3 className="font-serif text-xl text-primary/80 mt-6 mb-2">3. Revisão da pensão</h3>
    <p>Em ações revisionais, o juiz pode definir a partir de quando a alteração produz efeitos.</p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Como calcular?</h2>
    <p>
      Identifica-se o marco inicial (em regra, a citação), aplica-se o valor ou percentual fixado, considera-se atualização monetária, juros e eventual abatimento de valores já pagos comprovadamente. O cálculo exige cuidado quando há pagamentos parciais, depósitos sem identificação ou despesas pagas diretamente em favor do menor.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Existe prazo para cobrar?</h2>
    <p>
      Sim. O Código Civil prevê prescrição em <strong>2 anos</strong> para haver prestações alimentares, contados de cada vencimento. Mas há regras de proteção quando o alimentando é criança ou adolescente — a prescrição não corre contra absolutamente incapazes nem entre ascendentes e descendentes durante o poder familiar. A análise deve ser caso a caso.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">E se o pai nunca pagou?</h2>
    <p>
      Se já existe decisão judicial ou acordo homologado, as parcelas podem ser cobradas por <strong>execução de alimentos</strong>, que admite bloqueio de valores, penhora de bens e, em determinados casos, prisão civil do devedor. Se não houver ação anterior, o primeiro passo é ingressar com a ação de alimentos — o juiz poderá fixar provisórios já no início.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Pode ser parcelada?</h2>
    <p>
      Sim. Especialmente em dívidas altas, é comum o devedor continuar pagando a pensão atual e acrescentar uma parcela extra para quitar o débito retroativo, por acordo homologado ou decisão judicial.
    </p>

    <p>
      A pensão envolve dignidade, sustento, saúde e desenvolvimento da criança. Antes de calcular, cobrar ou negociar valores atrasados, busque a análise de uma advogada especialista em Direito de Família.
    </p>
  </ArticleLayout>
);

export default PensaoRetroativa;
