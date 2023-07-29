import React from "react";
import ChipComponent from "./chip.component";

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
      <p className="text-sm text-gray-400 text-justify mb-2">{duties}</p>
      <ul className="mb-4 list-disc list-inside text-sm text-gray-400">
        {achievements.map((achievement, idx) => (
          <li key={`${jobTitle}-achievement-${idx}`}>{achievement}</li>
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
