import useContentTranslation from "../../hooks/useContentTranslation";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { JobExperience, JobExperiences } from "../../types/contentTypes";
import SectionTitle from "../shared/section-title.component";
import { experiencesSectionConstants } from "./constants/experiences-section-constants";
import JobExperienceSection from "./job-experience-section.component";

import { BriefcaseIcon } from "@heroicons/react/24/outline";

const JobExperiencesList = () => {
  const { currentLanguage } = useCurrentLanguage();
  const { sectionTitle } = experiencesSectionConstants[currentLanguage];
  const experiencesContent =
    useContentTranslation<JobExperiences>("experiences");
  const experiences = Object.values(experiencesContent) as JobExperience[];

  return (
    <div id="experience" className="navigation_section">
      <SectionTitle Icon={BriefcaseIcon} title={sectionTitle} />
      <div className="flex flex-col gap-10">
        {experiences.map((experience, idx) => (
          <JobExperienceSection key={`job-${idx}`} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default JobExperiencesList;
