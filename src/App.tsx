import HeaderMenu from "./components/header-menu/header-menu.components";
import JobExperienceSection from "./components/experiences-section/job-experience-section.component";
import PresentationCard from "./components/presentation-card/presentation-card.component";
import ProjectsSlider from "./components/projects-section/projects-slider";
import { experiences } from "./data/experiences";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JobExperiencesList from "./components/experiences-section/job-experiences-list.component";
import SectionTitle from "./components/shared/section-title.component";

function App() {
  return (
    <>
      <HeaderMenu />
      <main className="flex flex-col gap-20">
        <PresentationCard />
        <JobExperiencesList />
        <ProjectsSlider />
      </main>
    </>
  );
}

export default App;
