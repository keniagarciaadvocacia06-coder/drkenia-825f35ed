import { useEffect, useState } from "react";

/**
 * Escuta o evento global "lovable-debug-error" e, ao recebê-lo,
 * lança um erro fatal DURANTE O RENDER para que escape ao overlay
 * global da Lovable (acionando o botão "Try to Fix").
 *
 * IMPORTANTE: este componente deve ficar FORA de qualquer
 * ErrorBoundary / Suspense / boundary local.
 */
const DebugErrorThrower = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const msg = typeof detail === "string" ? detail : String(detail ?? "");
      setMessage(msg);
    };
    window.addEventListener("lovable-debug-error", handler);
    return () => window.removeEventListener("lovable-debug-error", handler);
  }, []);

  if (message) {
    // Throw intencional durante o render — NÃO remover, NÃO envolver em try/catch.
    throw new Error(message);
  }

  return null;
};

export default DebugErrorThrower;
