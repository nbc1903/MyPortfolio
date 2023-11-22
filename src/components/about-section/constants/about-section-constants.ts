import { TranslatedContent } from "../../../types/languageTypes";

export const aboutSectionConstants: TranslatedContent<{
  sectionTitle: string;
  yearsLabel: string;
  monthsLabel: string;
  andLabel: string;
}> = {
  es: {
    sectionTitle: "Sobre mí",
    yearsLabel: "años",
    monthsLabel: "meses",
    andLabel: "y",
  },
  en: {
    sectionTitle: "About me",
    yearsLabel: "years",
    monthsLabel: "months",
    andLabel: "and",
  },
};
