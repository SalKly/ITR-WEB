import { formatArabicNumber } from "./textFormatters";

export const getCurrentTimeAr = (currentTime: Date): string => {
  const hours12 = currentTime.getHours() % 12 || 12;
  const period = currentTime.getHours() >= 12 ? "م" : "ص";
  const formattedHours = formatArabicNumber(hours12);
  const formattedMinutes = currentTime
    .getMinutes()
    .toString()
    .padStart(2, "0")
    .split("")
    .map((digit) => formatArabicNumber(Number(digit)))
    .join("");
  const time = `${formattedHours}:${formattedMinutes} ${period}`;
  return time;
};

export const getCurrentLocalDateAr = (currentTime: Date): string => {
  const currentDate = currentTime.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Replace spaces between parts with commas
  const formattedDate = currentDate.replace(/\s+/g, " ، ");

  return formattedDate;
};

export const getCurrentLocalHijriDateAr = (currentTime: Date): string => {
  const hijriFormatter = new Intl.DateTimeFormat("ar-EG-u-ca-islamic", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const hijriParts = hijriFormatter.formatToParts(currentTime);
  const hijriDay = hijriParts.find((part) => part.type === "day")?.value;
  const hijriMonth = hijriParts.find((part) => part.type === "month")?.value;
  const hijriYear = hijriParts.find((part) => part.type === "year")?.value;

  const hijriDate = `${hijriDay} ، ${hijriMonth}، ${hijriYear}`;
  return hijriDate;
};
