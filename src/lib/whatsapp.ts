export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const openWhatsApp = (message?: string) => {
  const targetUrl = buildWhatsAppUrl(message);
  const newWindow = window.open(targetUrl, "_blank", "noopener,noreferrer");

  if (newWindow) {
    newWindow.opener = null;
    return;
  }

  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = targetUrl;
      return;
    }
  } catch {
    // Ignore cross-frame access issues and fall back below.
  }

  window.location.href = targetUrl;
};
