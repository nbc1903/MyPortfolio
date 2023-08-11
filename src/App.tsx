import { useState, useEffect } from "react";
import HeaderMenu from "./components/header-menu/header-menu.components";
import JobExperienceSection from "./components/experiences-section/job-experience-section.component";
import PresentationCard from "./components/presentation-card/presentation-card.component";
import ProjectsSlider from "./components/projects-section/projects-slider";
import { experiences } from "./data/experiences";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JobExperiencesList from "./components/experiences-section/job-experiences-list.component";
import SectionTitle from "./components/shared/section-title.component";
import AboutSection from "./components/about-section/about-section.component";
import useCurrentBreakpoint from "./hooks/useCurrentBreakpoint";

function App() {
  const { isDesktopLarge, isDesktopExtraLarge } = useCurrentBreakpoint();

  const isUpDesktop = isDesktopLarge || isDesktopExtraLarge;

  return (
    <>
      {!isUpDesktop && <HeaderMenu />}
      <PresentationCard />
      <main className="flex flex-col gap-24 mt-24 xl:mt-0 xl:ml-[450px] xl:mr-32">
        <AboutSection />
        <JobExperiencesList />
        <ProjectsSlider />
      </main>
      {isUpDesktop && <HeaderMenu />}
    </>
  );
}

export default App;
