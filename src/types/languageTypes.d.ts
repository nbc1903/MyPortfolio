export type Language = "en" | "es";
export type TranslatedContent<T> = {
  [key in Language]: T;
};
