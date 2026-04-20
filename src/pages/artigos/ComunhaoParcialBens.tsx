import ArticleLayout from "@/components/ArticleLayout";

const ComunhaoParcialBens = () => (
  <ArticleLayout
    title="Comunhão Parcial de Bens: Entenda o Regime Mais Comum no Brasil"
    description="Saiba como funciona o regime de comunhão parcial de bens, quais bens são partilhados no divórcio e seus direitos. Dra. Kênia Garcia - Advocacia."
  >
    <p>
      A <strong>comunhão parcial de bens</strong> é o regime patrimonial mais comum no Brasil. Quando os cônjuges não fazem pacto antenupcial, este é o regime automaticamente aplicado ao casamento, conforme o <strong>artigo 1.640 do Código Civil</strong>.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Como funciona?</h2>
    <p>
      Neste regime, comunicam-se (tornam-se comuns) os <strong>bens adquiridos na constância do casamento</strong> a título oneroso. Já os bens que cada cônjuge possuía antes do casamento, bem como os recebidos por herança ou doação durante a união, permanecem como bens particulares.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O que entra na partilha?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Imóveis comprados durante o casamento</li>
      <li>Veículos adquiridos na constância da união</li>
      <li>Saldo de contas bancárias acumulado durante o casamento</li>
      <li>Investimentos realizados com recursos do casal</li>
      <li>Empresas constituídas durante o casamento</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O que NÃO entra na partilha?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Bens adquiridos antes do casamento</li>
      <li>Heranças e doações recebidas individualmente</li>
      <li>Bens de uso pessoal (roupas, instrumentos de trabalho)</li>
      <li>Valores recebidos a título de indenização pessoal</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Sub-rogação de bens</h2>
    <p>
      Se um cônjuge vende um bem particular e com o valor compra outro bem, este novo bem permanece particular por <strong>sub-rogação</strong>. É fundamental manter registros e documentação para comprovar a origem dos recursos.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Importância da orientação jurídica</h2>
    <p>
      A partilha de bens pode ser um dos momentos mais delicados do divórcio. Contar com um advogado especialista garante que seus direitos sejam preservados e que a divisão seja feita de forma justa e legal.
    </p>
  </ArticleLayout>
);

export default ComunhaoParcialBens;
