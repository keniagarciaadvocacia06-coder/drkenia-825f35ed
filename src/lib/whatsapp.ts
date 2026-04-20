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
 * Opens an internal relay page in a new tab first, then that page redirects to WhatsApp.
 * This avoids iframe blocking in the Lovable preview.
 */
export const openWhatsApp = (message?: string) => {
  const relayUrl = buildWhatsAppRelayUrl(message);
  const newWindow = window.open("about:blank", "_blank", "noopener,noreferrer");

  if (newWindow) {
    newWindow.opener = null;
    newWindow.location.replace(relayUrl);
    return;
  }

  const link = document.createElement("a");
  link.href = relayUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
