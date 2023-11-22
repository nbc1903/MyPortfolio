import { useTranslation } from "react-i18next";
import { Language } from "../types/languageTypes";

const useCurrentLanguage = () => {
  const { i18n } = useTranslation("translation");
  const isSpanish = i18n.language === "es";
  const isEnglish = i18n.language === "en";
  return {
    currentLanguage: i18n.language as Language,
    isSpanish,
    isEnglish,
  };
};

export default useCurrentLanguage;
