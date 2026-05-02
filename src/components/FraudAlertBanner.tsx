import { useEffect, useState } from "react";
import { AlertTriangle, ChevronDown, ChevronUp, X } from "lucide-react";

const STORAGE_KEY = "fraud-alert-dismissed";

const FraudAlertBanner = () => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(true);

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
      className="sticky top-0 z-[60] w-full border-b border-destructive/40 bg-destructive text-destructive-foreground shadow-md"
    >
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <div className="flex-1 text-sm leading-snug">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">
                ATENÇÃO: Canais oficiais e prevenção ao golpe do falso advogado — praticado por
                estelionatários que utilizam nome, imagem, número da OAB, dados processuais e
                documentos para solicitar pagamentos indevidos. WhatsApp/Telefone oficial:{" "}
                <a href="tel:+5564999881043" className="underline underline-offset-2">
                  (64) 9988-1043
                </a>
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium hover:bg-destructive-foreground/10"
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
                  O escritório <strong>KÊNIA GARCIA ADVOCACIA</strong>, por intermédio da Dra. Kênia
                  Garcia, alerta sobre a crescente ocorrência do <strong>“golpe do falso advogado”</strong>,
                  praticado por estelionatários que utilizam nome, imagem, número da OAB, dados
                  processuais e documentos para solicitar pagamentos indevidos sob falsa promessa de
                  liberação de valores, alvarás, precatórios, RPVs, benefícios previdenciários,
                  indenizações ou atrasados.
                </p>
                <p>
                  A Dra. Kênia Garcia <strong>não solicita pagamentos por números desconhecidos</strong>{" "}
                  e não autoriza terceiros, supostos funcionários, correspondentes, assessores,
                  prepostos ou despachantes a requerer Pix, depósitos, transferências, boletos,
                  custas, taxas ou guias para liberação de qualquer valor.
                </p>
                <p>
                  <strong>Nenhum valor</strong> deve ser pago, transferido ou depositado sem
                  confirmação direta, pessoal e expressa com a Dra. Kênia Garcia, preferencialmente
                  por videoconferência, ligação confirmada pelo número oficial ou atendimento
                  presencial no escritório.
                </p>
                <p>
                  Em caso de dúvida ou suspeita, interrompa imediatamente o contato e confirme
                  exclusivamente pelo número oficial{" "}
                  <a href="tel:+5564999881043" className="font-semibold underline underline-offset-2">
                    (64) 9988-1043
                  </a>
                  . Pagamentos realizados a terceiros sem essa confirmação serão considerados
                  praticados por conta e risco do contratante.
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
