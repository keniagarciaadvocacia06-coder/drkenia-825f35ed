export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Opens WhatsApp reliably, even from inside iframes (like the Lovable preview).
 * Tries window.open first, then falls back to navigating the top window.
 */
export const openWhatsApp = (message?: string) => {
  const url = buildWhatsAppUrl(message);
  try {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) return;
  } catch {
    // ignore and fall through to fallback
  }
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return;
    }
  } catch {
    // cross-origin iframe — cannot touch window.top
  }
  window.location.href = url;
};
