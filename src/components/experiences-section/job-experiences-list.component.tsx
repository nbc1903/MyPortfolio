import { experiences } from "../../data/experiences";
import SectionTitle from "../shared/section-title.component";
import JobExperienceSection from "./job-experience-section.component";

import { BriefcaseIcon } from "@heroicons/react/24/outline";

const JobExperiencesList = () => {
  return (
    <div id="experience" className="navigation_section">
      <SectionTitle Icon={BriefcaseIcon} title="Job Experience" />
      <div className="flex flex-col gap-10">
        {experiences.map((experience, idx) => (
          <JobExperienceSection key={`job-${idx}`} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default JobExperiencesList;
