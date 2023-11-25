import React from "react";
import ChipComponent from "../shared/chip.component";
import RevealAnimation from "../shared/reveal-animation.component";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { experiencesSectionConstants } from "./constants/experiences-section-constants";
import useCurrentBreakpoint from "../../hooks/useCurrentBreakpoint";
import { JobExperience } from "../../types/contentTypes";

type JobExperienceSectionProps = JobExperience;

const JobExperienceSection: React.FC<JobExperienceSectionProps> = ({
  date,
  company,
  jobTitle,
  duties,
  achievements,
  tags,
}) => {
  const { isMobile } = useCurrentBreakpoint();
  const { currentLanguage } = useCurrentLanguage();
  const { tagsLabel } = experiencesSectionConstants[currentLanguage];
  return (
    <RevealAnimation type="down">
      <section className="flex flex-col">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">{company}</h2>
          {!isMobile && (
            <p className="ml-auto text-xs font-semibold text-brandColors-text">
              {date}
            </p>
          )}
        </div>
        {isMobile && (
          <p className="text-xs font-semibold text-brandColors-text">{date}</p>
        )}
        <h3 className="mb-2 text-sm font-semibold">{jobTitle}</h3>

        <p className="mb-2 text-sm leading-normal text-brandColors-text">
          {duties}
        </p>
        {achievements && (
          <ul className="mb-4 text-sm text-brandColors-text">
            {achievements.map((achievement, idx) => (
              <li
                key={`${jobTitle}-achievement-${idx}`}
                className="relative mb-1 pl-5 before:absolute before:-top-1 before:left-0 before:text-lg before:text-cyan-500 before:content-['➮']"
              >
                {achievement}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          <span className="self-center text-brandColors-text">{tagsLabel}</span>
          {tags.map((tag, idx) => (
            <ChipComponent key={`${jobTitle}-tag-${idx}`} text={tag} />
          ))}
        </div>
      </section>
    </RevealAnimation>
  );
};

export default JobExperienceSection;
