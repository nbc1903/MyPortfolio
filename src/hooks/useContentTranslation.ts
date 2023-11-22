import { useTranslation } from "react-i18next";
import { Content } from "../types/contentTypes";
import { content } from "../data/content";
import { mergeDeep } from "../utils/objectUtils";

const useContentTranslation = <ContentType>(
  contentType: keyof Content,
): ContentType => {
  const { t } = useTranslation("translation");
  const contentTranslation = t(contentType, { returnObjects: true }) as Record<
    string,
    unknown
  >;
  const contentPermanent = content[contentType];
  const mergedContent = mergeDeep(contentTranslation, contentPermanent);
  return mergedContent as ContentType;
};

export default useContentTranslation;
