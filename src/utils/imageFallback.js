export const setImageFallback = (event, fallbackSrc) => {
  const img = event.currentTarget;
  if (!img) return;
  img.onerror = null;
  img.src = fallbackSrc;
}; 