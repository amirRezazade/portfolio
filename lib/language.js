export const languageStorageKey = "amir-portfolio-language";
export const fallbackLanguage = "fa";

export function normalizeLanguage(language) {
  return language === "en" || language === "fa" ? language : fallbackLanguage;
}

export function getLanguageDirection(language) {
  return normalizeLanguage(language) === "fa" ? "rtl" : "ltr";
}
