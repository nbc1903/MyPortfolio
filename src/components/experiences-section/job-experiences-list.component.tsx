import { experiences } from "../../data/experiences";
import SectionTitle from "../shared/section-title.component";
import JobExperienceSection from "./job-experience-section.component";

const JobExperiencesList = () => {
  return (
    <div id="experience" className="navigation_section">
      <SectionTitle title="Job Experience" />
      <div className="flex flex-col gap-10">
        {experiences.map((experience, idx) => (
          <JobExperienceSection key={`job-${idx}`} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default JobExperiencesList;
