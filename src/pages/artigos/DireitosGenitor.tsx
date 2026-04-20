import ArticleLayout from "@/components/ArticleLayout";

const DireitosGenitor = () => (
  <ArticleLayout
    title="Direitos do Genitor: O que a Lei Garante aos Pais"
    description="Conheça os direitos do genitor no Direito de Família brasileiro: guarda, visitação, participação nas decisões e proteção contra alienação parental."
  >
    <p>
      O <strong>genitor</strong> — pai ou mãe — possui uma série de direitos assegurados pela legislação brasileira, especialmente após situações de separação ou divórcio. Conhecer esses direitos é fundamental para garantir o <strong>melhor interesse da criança</strong> e o exercício pleno da parentalidade.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Direito à convivência</h2>
    <p>
      O genitor que não detém a guarda física principal tem direito à <strong>convivência regular</strong> com os filhos. A regulamentação de visitas pode ser definida por acordo entre as partes ou por decisão judicial, sempre priorizando o bem-estar da criança.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Participação nas decisões</h2>
    <p>
      Na guarda compartilhada, ambos os genitores participam igualmente das decisões sobre:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Educação e escolha de escola</li>
      <li>Tratamentos médicos e de saúde</li>
      <li>Viagens e mudança de domicílio</li>
      <li>Atividades extracurriculares</li>
      <li>Questões religiosas e culturais</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Proteção contra alienação parental</h2>
    <p>
      A <strong>Lei 12.318/2010</strong> protege o genitor contra atos de alienação parental, que é a interferência na formação psicológica da criança, promovida por um dos pais ou familiares, para que repudie o outro genitor. A alienação parental pode resultar em alteração da guarda, multa e até suspensão da autoridade parental.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Direito à informação</h2>
    <p>
      O genitor tem direito a receber informações sobre o filho diretamente das escolas, hospitais e demais instituições, independentemente de quem detenha a guarda. Negar essas informações é ilegal.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Revisão de guarda e alimentos</h2>
    <p>
      Qualquer genitor pode solicitar a <strong>revisão da guarda</strong> ou do valor da pensão alimentícia sempre que houver mudança nas circunstâncias fáticas. Isso garante que as decisões judiciais acompanhem a realidade das famílias.
    </p>
  </ArticleLayout>
);

export default DireitosGenitor;
