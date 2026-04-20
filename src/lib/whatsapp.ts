export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const buildWhatsAppRelayUrl = (message?: string) => {
  const params = new URLSearchParams();
  if (message) params.set("text", message);
  return `/open-whatsapp${params.toString() ? `?${params.toString()}` : ""}`;
};

/**
 * Opens an internal relay page first, then that page redirects to WhatsApp.
 * If popups are blocked, it falls back to navigating the current page.
 */
export const openWhatsApp = (message?: string) => {
  const relayUrl = buildWhatsAppRelayUrl(message);
  const newWindow = window.open(relayUrl, "_blank", "noopener,noreferrer");

  if (newWindow) {
    newWindow.opener = null;
    return;
  }

  window.location.href = relayUrl;
};
