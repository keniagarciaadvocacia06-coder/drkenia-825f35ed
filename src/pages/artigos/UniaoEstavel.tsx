import ArticleLayout from "@/components/ArticleLayout";

const UniaoEstavel = () => (
  <ArticleLayout
    title="União Estável: Direitos, Deveres e Como Formalizar"
    description="Entenda o que é união estável, como formalizar, quais os direitos patrimoniais e a diferença para casamento. Dra. Kênia Garcia - Advocacia."
  >
    <p>
      A <strong>união estável</strong> é reconhecida pela Constituição Federal (art. 226, §3º) como entidade familiar. Configura-se pela convivência pública, contínua e duradoura, com o objetivo de constituir família, <strong>sem necessidade de prazo mínimo</strong> ou coabitação.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Requisitos para configuração</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Convivência pública:</strong> o relacionamento é conhecido pela sociedade</li>
      <li><strong>Continuidade:</strong> a relação é estável, sem interrupções significativas</li>
      <li><strong>Durabilidade:</strong> permanece ao longo do tempo</li>
      <li><strong>Objetivo de constituir família:</strong> intenção de vida em comum</li>
      <li><strong>Ausência de impedimentos:</strong> nenhum dos companheiros pode ser casado (salvo se separado de fato)</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Direitos patrimoniais</h2>
    <p>
      Na união estável, aplica-se o regime da <strong>comunhão parcial de bens</strong> como regra, salvo contrato escrito entre os companheiros. Isso significa que os bens adquiridos onerosamente durante a convivência são comuns, enquanto os anteriores permanecem particulares.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Como formalizar?</h2>
    <p>
      A formalização pode ser feita por <strong>escritura pública em cartório</strong>, o que facilita a comprovação dos direitos. Embora não seja obrigatória, a escritura traz segurança jurídica para ambos os companheiros e simplifica procedimentos como inclusão em planos de saúde, declaração de imposto de renda e partilha de bens.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Direito à herança</h2>
    <p>
      O companheiro em união estável tem <strong>direito à herança</strong>, conforme decisão do STF (Tema 809), que equiparou os direitos sucessórios do companheiro aos do cônjuge. Isso inclui direito real de habitação e participação na partilha dos bens.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Conversão em casamento</h2>
    <p>
      A união estável pode ser convertida em casamento mediante pedido ao juiz, conforme previsto no Código Civil. Esse procedimento é simplificado e não exige cerimônia.
    </p>
  </ArticleLayout>
);

export default UniaoEstavel;
