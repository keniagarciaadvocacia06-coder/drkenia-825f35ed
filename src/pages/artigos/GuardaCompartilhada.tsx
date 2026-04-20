import ArticleLayout from "@/components/ArticleLayout";

const GuardaCompartilhada = () => (
  <ArticleLayout
    title="Guarda Compartilhada: Direitos, Deveres e Como Funciona"
    description="Saiba como funciona a guarda compartilhada no Brasil, quais os direitos dos pais e da criança, e quando ela é aplicada. Dra. Kênia Garcia - Advocacia."
  >
    <p>
      A <strong>guarda compartilhada</strong> é o regime em que ambos os genitores exercem conjuntamente a responsabilidade legal sobre os filhos menores, dividindo decisões sobre educação, saúde, lazer e bem-estar. Desde a <strong>Lei 13.058/2014</strong>, a guarda compartilhada passou a ser a regra no ordenamento jurídico brasileiro.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O que diz a lei?</h2>
    <p>
      O <strong>artigo 1.584, §2º do Código Civil</strong> determina que, quando não houver acordo entre os pais, a guarda compartilhada será aplicada pelo juiz, salvo se um dos genitores declarar que não deseja a guarda. A lei prioriza o <strong>melhor interesse da criança</strong>.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Como funciona na prática?</h2>
    <p>
      Na guarda compartilhada, ambos os pais participam ativamente das decisões sobre a vida dos filhos. Isso não significa, necessariamente, divisão igualitária de tempo — a criança pode ter uma <strong>residência-base</strong> com um dos genitores, enquanto o outro mantém convivência ampla e regular.
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Decisões sobre escola, médico e atividades são tomadas em conjunto</li>
      <li>O tempo de convivência é definido conforme as necessidades da criança</li>
      <li>A pensão alimentícia pode ser mantida mesmo na guarda compartilhada</li>
      <li>O domicílio-base deve ser o que melhor atende ao interesse do menor</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Guarda Compartilhada x Guarda Alternada</h2>
    <p>
      É comum confundir os dois conceitos. Na guarda <strong>compartilhada</strong>, as decisões são conjuntas, mas a criança pode ter uma residência principal. Na guarda <strong>alternada</strong>, a criança alterna períodos iguais de moradia com cada genitor — modelo que não é expressamente previsto na legislação brasileira e recebe resistência da jurisprudência.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quando a guarda compartilhada pode ser negada?</h2>
    <p>
      O juiz pode negar a guarda compartilhada quando houver situações que coloquem em risco o bem-estar da criança, como violência doméstica, abuso, negligência ou quando um dos genitores não demonstra aptidão para exercer a guarda.
    </p>
  </ArticleLayout>
);

export default GuardaCompartilhada;
