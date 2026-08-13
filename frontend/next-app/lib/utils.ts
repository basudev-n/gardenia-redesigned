export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}

export function estimateReadTime(text: string | undefined) {
  if (!text) return 3;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
