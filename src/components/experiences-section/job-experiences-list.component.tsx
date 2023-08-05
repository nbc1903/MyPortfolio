import { experiences } from "../../data/experiences";
import SectionTitle from "../shared/section-title.component";
import JobExperienceSection from "./job-experience-section.component";

const JobExperiencesList = () => {
  return (
    <div id="experience" className="navigation_section flex flex-col gap-10">
      <SectionTitle title="Job Experience" />
      {experiences.map((experience, idx) => (
        <JobExperienceSection key={`job-${idx}`} {...experience} />
      ))}
    </div>
  );
};

export default JobExperiencesList;
