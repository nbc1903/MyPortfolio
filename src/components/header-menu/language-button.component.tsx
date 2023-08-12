import { useState } from "react";
import spainImg from "../../assets/spain.png";
import ukImg from "../../assets/united-kingdom.png";
import { useTranslation } from "react-i18next";
import useCurrentBreakpoint from "../../hooks/useCurrentBreakpoint";

const LanguageButton = () => {
  const { isDesktopLarge, isDesktopExtraLarge } = useCurrentBreakpoint();
  const isUpDesktop = isDesktopLarge || isDesktopExtraLarge;
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState<boolean>(i18n.language === "en");
  let buttonTranslateClass;
  let lngTextTranslateClass;
  function toggleTheme() {
    i18n.changeLanguage(isEnglish ? "es" : "en");
    setIsEnglish((prev) => !prev);
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
        className="relative w-10 h-5 xl:w-5 xl:h-10 rounded-full bg-gray-900 border flex items-center xl:flex-col transition duration-300 focus:outline-none shadow"
        onClick={toggleTheme}
      >
        <p
          className={`absolute transition duration-500 ${lngTextTranslateClass}`}
        >
          {isEnglish ? "EN" : "ES"}
        </p>
        <div
          className={`w-6 h-6 relative rounded-full transition duration-500 transform p-1 text-white ${buttonTranslateClass}`}
        >
          <img
            id="ukImg"
            className={`absolute left-0 top-0 transition-opacity ${
              !isEnglish && "opacity-0"
            }`}
            src={ukImg}
          />
          <img
            id="colImg"
            className={`absolute left-0 top-0 transition-opacity ${
              isEnglish && "opacity-0"
            }`}
            src={spainImg}
          />
        </div>
      </button>
    </>
  );
};

export default LanguageButton;
