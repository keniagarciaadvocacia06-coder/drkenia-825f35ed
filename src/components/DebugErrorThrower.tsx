import { useEffect } from "react";

/**
 * Escuta o evento global "lovable-debug-error" e, ao recebê-lo,
 * lança um erro fatal DURANTE O RENDER para que escape ao overlay
 * global da Lovable (acionando o botão "Try to Fix").
 *
 * IMPORTANTE: este componente deve ficar FORA de qualquer
 * ErrorBoundary / Suspense / boundary local.
 */
const DebugErrorThrower = () => {
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const msg = typeof detail === "string" ? detail : String(detail ?? "");
      console.info("Lovable debug instruction received:", msg);
    };
    window.addEventListener("lovable-debug-error", handler);
    return () => window.removeEventListener("lovable-debug-error", handler);
  }, []);

  return null;
};

export default DebugErrorThrower;
