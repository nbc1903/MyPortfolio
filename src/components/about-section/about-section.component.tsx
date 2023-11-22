import SectionTitle from "../shared/section-title.component";
import RevealAnimation from "../shared/reveal-animation.component";
import { UserIcon } from "@heroicons/react/24/outline";
import useContentTranslation from "../../hooks/useContentTranslation";
import { About } from "../../types/contentTypes";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { aboutSectionConstants } from "./constants/about-section-constants";
import { useMemo } from "react";

const AboutSection = () => {
  const aboutContent = useContentTranslation<About>("about");
  const { currentLanguage } = useCurrentLanguage();
  const { sectionTitle, ...labels } = aboutSectionConstants[currentLanguage];

  const timeOfExperience = useMemo(() => {
    const workStartingDate = new Date(aboutContent.workStartingDate);
    const yearsExperience =
      new Date().getFullYear() - workStartingDate.getFullYear();
    const monthsDifferenceExperience =
      new Date().getMonth() - workStartingDate.getMonth();

    return (
      <strong className="text-xl">
        <em>
          {yearsExperience} {labels.yearsLabel} {labels.andLabel}{" "}
          {monthsDifferenceExperience} {labels.monthsLabel}
        </em>
      </strong>
    );
  }, [aboutContent.workStartingDate, labels]);

  return (
    <RevealAnimation type="down">
      <section id="about" className="navigation_section">
        <SectionTitle Icon={UserIcon} title={sectionTitle} />

        <div className="flex flex-col gap-4 lg:flex-1">
          {aboutContent.content.map((paragraph, idx) => (
            <p
              key={`paragraph-$${idx}`}
              className="text-sm leading-normal text-brandColors-text"
            >
              {idx === 0 && timeOfExperience} {paragraph}
            </p>
          ))}
        </div>
      </section>
    </RevealAnimation>
  );
};

export default AboutSection;
