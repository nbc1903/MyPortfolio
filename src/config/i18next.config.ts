import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector, {
  DetectorOptions,
} from "i18next-browser-languagedetector";

const DETECTION_OPTIONS: DetectorOptions = {
  order: ["navigator"],
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    detection: DETECTION_OPTIONS,
    supportedLngs: ["en", "es"],
  });
