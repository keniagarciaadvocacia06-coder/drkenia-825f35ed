export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/**
 * Navigates directly to WhatsApp without opening a popup,
 * avoiding browser popup blockers in the preview.
 */
export const openWhatsApp = (message?: string) => {
  const url = buildWhatsAppUrl(message);
  window.location.assign(url);
};
