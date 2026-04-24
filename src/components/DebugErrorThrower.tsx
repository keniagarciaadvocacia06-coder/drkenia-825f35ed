import { useEffect, useState } from "react";

export default function DebugErrorThrower() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string" && detail.length > 0) {
        setErrorMessage(detail);
      }
    };
    window.addEventListener("lovable-debug-error", handler as EventListener);
    return () => window.removeEventListener("lovable-debug-error", handler as EventListener);
  }, []);

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return null;
}
