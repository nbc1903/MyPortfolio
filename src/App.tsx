//import HorizontalSlider from './components/horizontal-slider.component'
import JobExperienceSection from "./components/job-experience-section.component";
import PresentationCard from "./components/presentation-card.component";
import ProjectsSlider from "./components/projects-slider";
import { experiences } from "./data/experiences";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
      <PresentationCard />
      <div className="mt-10">
        {experiences.map((experience, idx) => (
          <JobExperienceSection key={`job-${idx}`} {...experience} />
        ))}
      </div>
      <ProjectsSlider />
    </>
  );
}

export default App;
