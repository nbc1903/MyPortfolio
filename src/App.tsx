import HeaderMenu from "./components/header-menu/header-menu.components";
import JobExperienceSection from "./components/job-experience-section.component";
import PresentationCard from "./components/presentation-card.component";
import ProjectsSlider from "./components/projects-section/projects-slider";
import { experiences } from "./data/experiences";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
      <HeaderMenu />
      <PresentationCard id="home" />
      <div id="experience" className="navigation_section mt-10">
        {experiences.map((experience, idx) => (
          <JobExperienceSection key={`job-${idx}`} {...experience} />
        ))}
      </div>
      <ProjectsSlider id="projects" />
    </>
  );
}

export default App;
