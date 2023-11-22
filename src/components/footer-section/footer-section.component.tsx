import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { footerSectionConstants } from "./constants/footer-section-constants";

const FooterSection = () => {
  const { currentLanguage } = useCurrentLanguage();
  const { authorLabel, spainIconLabel, ukIconLabel } =
    footerSectionConstants[currentLanguage];
  return (
    <footer className="flex flex-col items-center gap-1 text-center text-xs text-brandColors-text">
      <p>{authorLabel} Nicolás Bolaños - 2023</p>
      <div>
        <a
          className="hover:text-cyan-500"
          href="https://www.flaticon.com/free-icons/spain"
          title="spain icons"
        >
          {spainIconLabel} Freepik - Flaticon
        </a>
        {" / "}
        <a
          className="hover:text-cyan-500"
          href="https://www.flaticon.com/free-icons/uk-flag"
          title="uk flag icons"
        >
          {ukIconLabel} Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
