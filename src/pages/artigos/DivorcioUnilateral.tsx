import ArticleLayout from "@/components/ArticleLayout";

const DivorcioUnilateral = () => (
  <ArticleLayout
    title="STJ: é possível pedir o divórcio mesmo sem a assinatura do outro cônjuge"
    description="Entenda o divórcio unilateral, a recente decisão do STJ que permite a decretação liminar e como agir quando o outro cônjuge se recusa a assinar."
    image="/images/artigos/divorcio-unilateral.jpg"
  >
    <p>
      Você quer se divorciar, mas a outra pessoa se recusa a assinar? Essa dúvida angustia muita gente que já decidiu encerrar o casamento, mas se sente presa porque o outro cônjuge não concorda, não responde, desapareceu — ou usa a recusa como forma de controle emocional.
    </p>
    <p>
      O entendimento mais recente do <strong>Superior Tribunal de Justiça</strong> reforça uma proteção importante: <strong>ninguém é obrigado a permanecer casado contra a própria vontade</strong>.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">A decisão do STJ</h2>
    <p>
      O STJ reconheceu a possibilidade de decretação do divórcio de forma <strong>liminar</strong>, logo no início do processo, quando houver prova do casamento e manifestação clara de uma das partes em se divorciar (REsp 2.189.143/SP, rel. Min. Nancy Andrighi). O divórcio é um <em>direito potestativo</em>: depende da vontade de apenas um dos cônjuges.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O outro cônjuge pode impedir o divórcio?</h2>
    <p>
      Não. Após a Emenda Constitucional nº 66/2010, o divórcio não depende mais de prazo de separação, justificativa, culpa ou autorização da outra parte. Basta a vontade de um.
    </p>
    <p>Isso ampara quem vive situações como:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>O outro cônjuge se recusa a assinar;</li>
      <li>Há abandono do lar ou ausência de contato;</li>
      <li>Existe conflito, manipulação ou pressão emocional;</li>
      <li>A pessoa quer reconstruir a vida, mas se sente presa ao casamento;</li>
      <li>Há discussão sobre bens, filhos, pensão ou guarda.</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">E se houver filhos ou bens?</h2>
    <p>
      A existência de filhos menores, bens a dividir ou pedido de pensão <strong>não impede o divórcio</strong>. O juiz pode decretá-lo primeiro e deixar para decidir depois as questões de partilha, guarda, alimentos e convivência. Isso evita que a pessoa fique presa ao estado civil de casada apenas por discussões patrimoniais ou familiares.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Documentos necessários</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Certidão de casamento atualizada;</li>
      <li>RG, CPF e comprovante de endereço;</li>
      <li>Certidão de nascimento dos filhos, se houver;</li>
      <li>Documentos dos bens, se houver patrimônio a partilhar;</li>
      <li>Comprovantes de renda, em caso de pedido de alimentos;</li>
      <li>Endereço do outro cônjuge.</li>
    </ul>

    <p>
      O divórcio é um direito. A recusa da outra parte não pode ser usada como forma de aprisionamento ou chantagem. Se você deseja se divorciar e a outra pessoa não concorda, busque orientação jurídica especializada para identificar o caminho mais seguro para o seu caso.
    </p>
  </ArticleLayout>
);

export default DivorcioUnilateral;
