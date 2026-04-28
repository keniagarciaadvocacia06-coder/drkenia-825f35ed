import { useEffect } from "react";

/**
 * Componente utilitário para lançar erros de desenvolvimento
 * que são capturados pelo ErrorDebugPopup.
 * Escuta o evento global "lov-debug-throw".
 */
const DebugErrorThrower = () => {
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const message = typeof detail === "string" ? detail : "Debug error";
      throw new Error(message);
    };
    window.addEventListener("lov-debug-throw", handler);
    return () => window.removeEventListener("lov-debug-throw", handler);
  }, []);

  return null;
};

export default DebugErrorThrower;
