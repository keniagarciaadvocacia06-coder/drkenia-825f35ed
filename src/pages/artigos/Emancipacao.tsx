import ArticleLayout from "@/components/ArticleLayout";

const Emancipacao = () => (
  <ArticleLayout
    title="Emancipação: O que é e como funciona no Direito Brasileiro"
    description="Entenda o que é emancipação, quais os tipos, requisitos legais e como funciona o processo de emancipação no Brasil. Dra. Kênia Garcia - Advocacia."
  >
    <p>
      A <strong>emancipação</strong> é o instituto jurídico que antecipa a maioridade civil de um adolescente, concedendo-lhe plena capacidade para praticar todos os atos da vida civil antes de completar 18 anos. Prevista no <strong>artigo 5º do Código Civil</strong>, a emancipação pode ocorrer de três formas distintas.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Tipos de Emancipação</h2>

    <h3 className="font-serif text-xl text-primary/80 mt-6 mb-2">1. Emancipação Voluntária</h3>
    <p>
      Concedida pelos pais, ou por um deles na falta do outro, mediante escritura pública, ao menor que já completou <strong>16 anos</strong>. Não depende de homologação judicial, sendo realizada diretamente em cartório. Ambos os pais devem concordar; havendo divergência, é necessário recorrer ao Judiciário.
    </p>

    <h3 className="font-serif text-xl text-primary/80 mt-6 mb-2">2. Emancipação Judicial</h3>
    <p>
      Concedida por sentença judicial, ouvido o tutor, no caso de menores sob tutela que já tenham 16 anos completos. O juiz analisa se o menor possui maturidade suficiente para gerir sua vida e seus bens.
    </p>

    <h3 className="font-serif text-xl text-primary/80 mt-6 mb-2">3. Emancipação Legal</h3>
    <p>
      Ocorre automaticamente nas seguintes hipóteses previstas em lei:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Casamento</li>
      <li>Exercício de emprego público efetivo</li>
      <li>Colação de grau em curso de ensino superior</li>
      <li>Estabelecimento civil ou comercial com economia própria</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Efeitos da Emancipação</h2>
    <p>
      Uma vez emancipado, o menor adquire capacidade civil plena, podendo assinar contratos, administrar bens, abrir empresa e praticar todos os atos da vida civil. No entanto, a emancipação <strong>não altera a responsabilidade penal</strong> — o menor continua inimputável até os 18 anos conforme o Estatuto da Criança e do Adolescente.
    </p>
    <p>
      Importante destacar que os pais que concedem a emancipação voluntária <strong>continuam responsáveis</strong> civilmente pelos atos do filho emancipado, conforme entendimento jurisprudencial consolidado.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quando buscar orientação jurídica?</h2>
    <p>
      A emancipação é uma decisão importante que deve ser avaliada com cuidado. Um advogado especialista em Direito de Família pode orientar sobre a melhor forma de proceder, analisando as circunstâncias de cada caso e garantindo que todos os requisitos legais sejam atendidos.
    </p>
  </ArticleLayout>
);

export default Emancipacao;
