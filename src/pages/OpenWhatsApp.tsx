import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const OpenWhatsApp = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("text") ?? "";
  const targetUrl = buildWhatsAppUrl(message);

  useEffect(() => {
    const redirectToWhatsApp = () => {
      try {
        if (window.top && window.top !== window.self) {
          window.top.location.href = targetUrl;
          return;
        }
      } catch {
        // Fallback to same-window navigation below.
      }

      window.location.href = targetUrl;
    };

    const timeoutId = window.setTimeout(redirectToWhatsApp, 120);
    return () => window.clearTimeout(timeoutId);
  }, [targetUrl]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="font-heading text-4xl">Abrindo WhatsApp...</h1>
        <p className="text-muted-foreground">
          Se o redirecionamento não acontecer automaticamente, use o botão abaixo.
        </p>
        <a
          href={targetUrl}
          target="_top"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
        >
          Abrir WhatsApp
        </a>
      </div>
    </main>
  );
};

export default OpenWhatsApp;
