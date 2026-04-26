const MAX_IMAGE_EDGE = 720;
const MAX_IMAGE_BYTES = 180 * 1024;
const MIN_IMAGE_QUALITY = 0.5;

const readFileAsDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });

const dataUrlSize = (dataUrl: string) => Math.ceil((dataUrl.length * 3) / 4);

export const prepareDebugImage = async (file: File) => {
  const originalDataUrl = await readFileAsDataUrl(file);
  const image = await loadImage(originalDataUrl);
  const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(image.width, image.height));
  const width = Math.max(1, Math.round(image.width * scale));
  const height = Math.max(1, Math.round(image.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  if (!context) {
    return { dataUrl: originalDataUrl, size: file.size };
  }

  context.drawImage(image, 0, 0, width, height);

  let quality = 0.82;
  let dataUrl = canvas.toDataURL("image/jpeg", quality);

  while (dataUrlSize(dataUrl) > MAX_IMAGE_BYTES && quality > MIN_IMAGE_QUALITY) {
    quality = Math.max(MIN_IMAGE_QUALITY, quality - 0.08);
    dataUrl = canvas.toDataURL("image/jpeg", quality);
  }

  return { dataUrl, size: dataUrlSize(dataUrl) };
};
