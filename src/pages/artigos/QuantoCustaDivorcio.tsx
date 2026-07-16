import ArticleLayout from "@/components/ArticleLayout";

const QuantoCustaDivorcio = () => (
  <ArticleLayout
    title="Quanto custa um divórcio? Entenda antes de tomar qualquer decisão"
    description="Saiba quem paga os custos do divórcio, quanto custa o divórcio amigável, em cartório, judicial e litigioso, e como pedir gratuidade da justiça."
    image="/images/artigos/quanto-custa.webp"
  >
    <p>
      Pensar em divórcio nunca é simples. Além do desgaste emocional, muitas pessoas ficam preocupadas com uma pergunta comum: <strong>quanto vou gastar para me divorciar?</strong>
    </p>
    <p>
      Não existe um valor único. O custo muda conforme a realidade do casal, a existência de filhos, bens a partilhar, acordo entre as partes e a forma escolhida (cartório ou via judicial).
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quem paga os custos do divórcio?</h2>
    <p>Em regra, as próprias partes envolvidas. Quando há acordo, é comum dividir as despesas. Possibilidades:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Casal divide os custos de comum acordo;</li>
      <li>Cada parte contrata seu próprio advogado;</li>
      <li>Em processo litigioso, o juiz pode fixar honorários de sucumbência;</li>
      <li>Sem condições financeiras, é possível pedir gratuidade da justiça.</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quanto custa um divórcio amigável?</h2>
    <p>
      O divórcio consensual costuma ser mais econômico porque o casal já chegou a um acordo sobre os principais pontos. Pode ser feito em cartório ou judicialmente, conforme o caso.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quanto custa em cartório?</h2>
    <p>
      Envolve principalmente honorários advocatícios e taxas cartoriais (variam por estado). Quando há bens a partilhar, podem incidir averbações, registros, escritura e impostos. A grande vantagem é a agilidade — em situações simples, pode ser resolvido em poucos dias.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quanto custa o divórcio judicial?</h2>
    <p>O custo depende de fatores como:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Existência de bens a partilhar;</li>
      <li>Valor do patrimônio;</li>
      <li>Discussão sobre guarda e pensão;</li>
      <li>Quantidade de audiências e produção de provas;</li>
      <li>Perícias, avaliações ou diligências;</li>
      <li>Tempo de duração do processo.</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O litigioso é mais caro?</h2>
    <p>
      Na maioria dos casos, sim, porque exige maior atuação do advogado e do Judiciário. Além do custo financeiro, há o custo emocional. Sempre que possível, um acordo bem orientado é uma solução mais inteligente — sem abrir mão de direitos.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">É possível se divorciar de graça?</h2>
    <p>
      Sim. Quem não tem condições financeiras pode pedir gratuidade da justiça (CPC) ou procurar a Defensoria Pública. Documentos como declaração de hipossuficiência, comprovantes de renda e despesas costumam ser exigidos.
    </p>

    <p>
      Antes de iniciar, avalie regime de bens, patrimônio, dívidas, filhos, guarda e pensão. Uma boa estratégia inicial evita gastos desnecessários e reduz o desgaste emocional.
    </p>
  </ArticleLayout>
);

export default QuantoCustaDivorcio;
