export const truncateText = (text: string, wordLimit = 12) => {
  if (!text) return "";

  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) {
    return text;
  }

  const truncated = words.slice(0, wordLimit).join(" ");
  return `${truncated}... شاهد المزيد`;
};

export const formatArabicNumber = (number: number) => new Intl.NumberFormat("ar-EG").format(number);
