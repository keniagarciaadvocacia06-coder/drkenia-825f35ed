export const WHATSAPP_NUMBER = "5564999881043";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const buildWhatsAppNativeUrl = (message?: string) => {
  const base = `whatsapp://send?phone=${WHATSAPP_NUMBER}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
};

const isEmbeddedPreview = () => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

const shouldUseNativeWhatsApp = () => {
  const userAgent = navigator.userAgent;
  const isMobileOrTablet = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(userAgent);
  const isTouchDevice = navigator.maxTouchPoints > 0;
  const isCompactViewport = window.matchMedia("(max-width: 1024px)").matches;

  return isEmbeddedPreview() && (isMobileOrTablet || isTouchDevice || isCompactViewport);
};

const openInNewTab = (url: string) => {
  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (popup) {
    popup.opener = null;
    return true;
  }

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return false;
};

export const openWhatsApp = (message?: string) => {
  const webUrl = buildWhatsAppUrl(message);

  if (shouldUseNativeWhatsApp()) {
    window.location.assign(buildWhatsAppNativeUrl(message));
    return;
  }

  const opened = openInNewTab(webUrl);

  if (!opened && !isEmbeddedPreview()) {
    window.location.assign(webUrl);
  }
};
