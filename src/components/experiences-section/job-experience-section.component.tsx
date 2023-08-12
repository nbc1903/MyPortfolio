import React from "react";
import ChipComponent from "../shared/chip.component";
import RevealAnimation from "../shared/reveal-animation.component";

interface JobExperienceSectionProps {
  date: string;
  company: string;
  jobTitle: string;
  duties: string;
  achievements: string[];
  tags: string[];
}

const JobExperienceSection: React.FC<JobExperienceSectionProps> = ({
  date,
  company,
  jobTitle,
  duties,
  achievements,
  tags,
}) => {
  return (
    <RevealAnimation type="down">
      <section className="flex flex-col">
        <div className="flex items-center">
          <h2 className="font-bold text-lg">{company}</h2>
          <p className="ml-auto text-brandColors-text text-xs font-semibold">
            {date}
          </p>
        </div>

        <h3 className="mb-2 text-sm font-semibold">{jobTitle}</h3>
        <p className="text-sm text-brandColors-text mb-2 leading-normal">
          {duties}
        </p>
        <ul className="mb-4 text-sm text-brandColors-text">
          {achievements.map((achievement, idx) => (
            <li
              key={`${jobTitle}-achievement-${idx}`}
              className="mb-1 pl-5 relative before:content-['➮'] before:text-lg before:absolute before:left-0 before:-top-1 before:text-cyan-500"
            >
              {achievement}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          <span className="self-center text-brandColors-text">
            Worked with:
          </span>
          {tags.map((tag, idx) => (
            <ChipComponent key={`${jobTitle}-tag-${idx}`} text={tag} />
          ))}
        </div>
      </section>
    </RevealAnimation>
  );
};

export default JobExperienceSection;
