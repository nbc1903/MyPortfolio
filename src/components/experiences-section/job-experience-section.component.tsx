import React from "react";
import ChipComponent from "../shared/chip.component";

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
    <section className="flex flex-col">
      <div className="flex items-center">
        <h2 className="font-bold">{company}</h2>
        <p className="ml-auto text-gray-400 text-xs font-semibold">{date}</p>
      </div>

      <h3 className="mb-2 text-sm font-semibold">{jobTitle}</h3>
      <p className="text-sm text-gray-400 mb-2 leading-normal">{duties}</p>
      <ul className="mb-4 text-sm text-gray-400">
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
        {tags.map((tag, idx) => (
          <ChipComponent key={`${jobTitle}-tag-${idx}`} text={tag} />
        ))}
      </div>
    </section>
  );
};

export default JobExperienceSection;
