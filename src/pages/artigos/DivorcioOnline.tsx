import ArticleLayout from "@/components/ArticleLayout";

const DivorcioOnline = () => (
  <ArticleLayout
    title="Divórcio online: como se separar com segurança, privacidade e sem sair de casa"
    description="Entenda como funciona o divórcio online, quem pode fazer, documentos necessários, custos e por que o acompanhamento jurídico é essencial."
    image="/images/artigos/divorcio-online.jpg"
  >
    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mb-10">
      <h2 className="font-serif text-2xl text-primary mb-6 text-center">Os 3 pilares do Divórcio Online</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg text-primary mb-2">Segurança</h3>
          <p className="text-sm text-muted-foreground">O procedimento utiliza certificação digital e videoconferência oficial através do e-Notariado, garantindo plena validade jurídica.</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg text-primary mb-2">Privacidade</h3>
          <p className="text-sm text-muted-foreground">Todo o processo é conduzido de forma discreta, sem a necessidade de exposição em fóruns ou ambientes públicos.</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h3 className="font-serif text-lg text-primary mb-2">Sem sair de casa</h3>
          <p className="text-sm text-muted-foreground">Elimina deslocamentos e esperas em cartórios. A resolução acontece no seu tempo e no conforto do seu lar.</p>
        </div>
      </div>
    </div>

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
