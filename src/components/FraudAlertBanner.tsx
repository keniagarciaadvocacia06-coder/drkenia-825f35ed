import { useEffect, useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, X } from "lucide-react";

const STORAGE_KEY = "fraud-alert-dismissed-v2";

const FraudAlertBanner = () => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") setVisible(false);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      role="alert"
      className="relative z-[60] w-full border-b border-red-700 bg-red-600 text-white shadow-md"
    >
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <div className="flex-1 text-sm leading-snug">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">
                ⚠️ <strong>KÊNIA GARCIA ADVOCACIA</strong> alerta: cuidado com o{" "}
                <strong>“golpe do falso advogado”</strong> — estelionatários usam nosso nome.
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium hover:bg-white/10"
                  aria-expanded={expanded}
                >
                  {expanded ? (
                    <>
                      Ocultar <ChevronUp className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      Saiba mais <ChevronDown className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="rounded p-1 hover:bg-destructive-foreground/10"
                  aria-label="Fechar aviso"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {expanded && (
              <div className="mt-2 space-y-2 text-xs leading-relaxed opacity-95">
                <p>
                  Os criminosos utilizam imagens, número de inscrição na OAB, dados processuais,
                  documentos, decisões judiciais ou informações aparentemente verdadeiras para
                  solicitar pagamentos indevidos, especialmente sob a falsa promessa de liberação de
                  valores, alvarás, precatórios, RPVs, benefícios previdenciários, indenizações,
                  atrasados ou qualquer vantagem econômica.
                </p>
                <p>
                  Para fins de segurança e prevenção de fraudes, fica expressamente informado que o
                  escritório <strong>KÊNIA GARCIA ADVOCACIA</strong>, por intermédio da Dra. Kênia
                  Garcia, utiliza como canal oficial para confirmação de qualquer informação
                  financeira o seguinte número de WhatsApp/Telefone:{" "}
                  <a href="tel:+5564999881043" className="font-semibold underline underline-offset-2">
                    (64) 9988-1043
                  </a>
                  .
                </p>
                <p>
                  O(a) CONTRATANTE declara estar ciente de que a Dra. Kênia Garcia e o escritório
                  Kênia Garcia Advocacia <strong>não solicitam pagamentos por números desconhecidos</strong>,
                  nem autorizam terceiros, supostos funcionários, correspondentes, assessores,
                  prepostos ou despachantes a requerer Pix, depósitos, transferências, boletos,
                  custas, taxas, guias, impostos ou valores para liberação de benefícios, alvarás,
                  atrasados ou indenizações, sem prévia confirmação pessoal com a própria Dra.
                  Kênia Garcia.
                </p>
                <p>
                  Fica ajustado que <strong>nenhum valor</strong> deverá ser pago, transferido ou
                  depositado sem confirmação direta, pessoal e expressa com a Dra. Kênia Garcia,
                  preferencialmente por videoconferência, ligação confirmada pelo número oficial
                  acima indicado ou atendimento presencial no escritório.
                </p>
                <p>
                  Em caso de dúvida, suspeita ou recebimento de qualquer solicitação financeira,
                  o(a) CONTRATANTE deverá interromper imediatamente o contato com o terceiro, não
                  realizar nenhum pagamento e confirmar a informação exclusivamente pelo número
                  oficial{" "}
                  <a href="tel:+5564999881043" className="font-semibold underline underline-offset-2">
                    (64) 9988-1043
                  </a>
                  .
                </p>
                <p>
                  O(a) CONTRATANTE declara, ainda, que foi orientado(a) a não confiar em mensagens
                  recebidas por números diversos, ainda que contenham foto, nome, logomarca, dados
                  do processo, documentos, áudios, vídeos ou aparência de legitimidade, pois tais
                  elementos podem ser utilizados por criminosos para dar credibilidade ao golpe.
                </p>
                <p>
                  Caso o(a) CONTRATANTE realize pagamento a terceiros sem a confirmação pessoal e
                  expressa da Dra. Kênia Garcia, por meio do canal oficial indicado, tal ato será
                  considerado praticado por sua conta e risco, não podendo ser imputada
                  responsabilidade ao escritório ou à advogada contratada por valores entregues a
                  fraudadores, golpistas ou terceiros estranhos à relação contratual.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudAlertBanner;
