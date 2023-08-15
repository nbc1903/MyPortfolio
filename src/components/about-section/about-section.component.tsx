import SectionTitle from "../shared/section-title.component";
// import TSIcon from "../../assets/typescript.svg";
// import JSIcon from "../../assets/javascript-js-square.svg";
// import ReactIcon from "../../assets/react.svg";
import { useTranslation } from "react-i18next";
import RevealAnimation from "../shared/reveal-animation.component";
import { UserIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  const { t } = useTranslation("translation");

  return (
    <RevealAnimation type="down">
      <section id="about" className="navigation_section">
        <SectionTitle Icon={UserIcon} title="About me" />

        <div className="flex flex-col gap-4 lg:flex-1">
          {(t("content", { returnObjects: true }) as string[]).map(
            (paragraph, idx) => (
              <p
                key={`paragraph-$${idx}`}
                className="text-sm leading-normal text-brandColors-text"
              >
                {paragraph}
              </p>
            ),
          )}
        </div>
      </section>
    </RevealAnimation>
  );
};

export default AboutSection;
