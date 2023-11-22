import spainImg from "../../assets/spain.png";
import ukImg from "../../assets/united-kingdom.png";
import { useTranslation } from "react-i18next";
import useCurrentBreakpoint from "../../hooks/useCurrentBreakpoint";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";

const LanguageButton = () => {
  const { isDesktopLarge, isDesktopExtraLarge } = useCurrentBreakpoint();
  const isUpDesktop = isDesktopLarge || isDesktopExtraLarge;
  const { i18n } = useTranslation();
  const { isEnglish } = useCurrentLanguage();
  let buttonTranslateClass;
  let lngTextTranslateClass;
  function toggleTheme() {
    i18n.changeLanguage(isEnglish ? "es" : "en");
  }

  if (isUpDesktop) {
    if (isEnglish) {
      buttonTranslateClass = "translate-y-full";
      lngTextTranslateClass = "translate-y-[5px]";
    } else {
      buttonTranslateClass = "-translate-y-2";
      lngTextTranslateClass = "translate-y-[15px]";
    }
  } else {
    if (isEnglish) {
      buttonTranslateClass = "translate-x-full";
      lngTextTranslateClass = "translate-x-[6px]";
    } else {
      buttonTranslateClass = "-translate-x-2";
      lngTextTranslateClass = "translate-x-[18px]";
    }
  }

  return (
    <>
      <button
        className="relative flex h-5 w-10 items-center rounded-full border bg-gray-900 shadow transition duration-300 focus:outline-none xl:h-10 xl:w-5 xl:flex-col"
        onClick={toggleTheme}
      >
        <p
          className={`absolute transition duration-500 ${lngTextTranslateClass}`}
        >
          {isEnglish ? "EN" : "ES"}
        </p>
        <div
          className={`relative h-6 w-6 transform rounded-full p-1 text-white transition duration-500 ${buttonTranslateClass}`}
        >
          <img
            id="ukImg"
            className={`absolute left-0 top-0 transition-opacity ${
              !isEnglish && "opacity-0"
            }`}
            src={ukImg}
            alt={isEnglish ? "United Kingdom flag" : "bandera de Reino Unido"}
          />
          <img
            id="colImg"
            className={`absolute left-0 top-0 transition-opacity ${
              isEnglish && "opacity-0"
            }`}
            src={spainImg}
            alt={isEnglish ? "Spain flag" : "bandera de España"}
          />
        </div>
      </button>
    </>
  );
};

export default LanguageButton;
