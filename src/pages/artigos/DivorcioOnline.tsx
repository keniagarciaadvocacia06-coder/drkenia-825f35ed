import ArticleLayout from "@/components/ArticleLayout";

const DivorcioOnline = () => (
  <ArticleLayout
    title="Divórcio online: como se separar com segurança, privacidade e sem sair de casa"
    description="Entenda como funciona o divórcio online, quem pode fazer, documentos necessários, custos e por que o acompanhamento jurídico é essencial."
    image="/images/artigos/divorcio-online.jpg"
  >
    <p className="text-xl font-medium text-primary mb-6">
      Divórcio online: como se separar com segurança, privacidade e sem sair de casa.
    </p>
    <p>
      Encerrar um casamento nunca é uma decisão simples. Mesmo quando existe respeito entre o casal, surgem dúvidas: quanto vai custar? Demora muito? Preciso ir ao fórum? E se eu não quiser exposição?
    </p>
    <p>
      A boa notícia é que, em muitos casos, o <strong>divórcio pode ser feito de forma online</strong>, com mais rapidez, privacidade e segurança jurídica. Tudo pode ser conduzido pela internet, com acompanhamento de advogado, envio de documentos, videoconferência com o cartório e assinatura digital.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">O que é o divórcio online?</h2>
    <p>
      O divórcio online é uma forma de encerrar legalmente o casamento por meio digital, sem comparecimento presencial ao cartório ou fórum, quando preenchidos os requisitos legais. O procedimento é realizado por meio da plataforma <strong>e-Notariado</strong>, que permite videoconferência com o tabelião e assinatura eletrônica com validade jurídica (Provimentos CNJ nº 100/2020 e 149/2023).
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">É permitido no Brasil?</h2>
    <p>
      Sim. O art. 733 do Código de Processo Civil permite o divórcio consensual por escritura pública quando não há nascituro ou filhos incapazes, com a obrigatória assistência de advogado. Com a digitalização dos cartórios, esse ato pode ser feito eletronicamente com a mesma segurança jurídica do ato presencial.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quem pode fazer?</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Casais que concordam com o fim do casamento;</li>
      <li>Que estão de acordo sobre a partilha de bens, se houver;</li>
      <li>Com assistência de advogado;</li>
      <li>Que possuam certificado digital;</li>
      <li>Sem filhos menores ou incapazes — salvo nas hipóteses da Resolução CNJ nº 571/2024, que admite divórcio em cartório quando guarda, convivência e pensão já estiverem resolvidas judicialmente.</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Documentos necessários</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>RG, CPF e comprovante de endereço dos cônjuges;</li>
      <li>Certidão de casamento atualizada;</li>
      <li>Pacto antenupcial, se houver;</li>
      <li>Documentos dos bens (imóveis, veículos, empresas, financiamentos);</li>
      <li>Certidão de nascimento dos filhos, quando houver;</li>
      <li>Certificado digital para assinatura eletrônica.</li>
    </ul>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Vantagens</h2>
    <p>
      Mais rapidez, menos burocracia, mais privacidade, conforto, redução de deslocamentos, menor desgaste emocional e segurança jurídica com acompanhamento profissional.
    </p>

    <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Quando não é indicado?</h2>
    <p>
      Quando não há acordo entre as partes, quando há disputa sobre bens, pensão, guarda ou convivência, ou quando uma das partes se sente pressionada. Nesses casos, o caminho adequado é o judicial.
    </p>

    <p>
      O divórcio online trouxe facilidade, mas não pode ser feito de qualquer jeito. Um documento mal elaborado pode gerar prejuízos por anos. Antes de assinar, busque orientação jurídica especializada.
    </p>
  </ArticleLayout>
);

export default DivorcioOnline;
