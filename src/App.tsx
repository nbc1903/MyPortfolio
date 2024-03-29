import HeaderMenu from "./components/header-menu/header-menu.components";
import PresentationCard from "./components/presentation-card/presentation-card.component";
import ProjectsSlider from "./components/projects-section/projects-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import JobExperiencesList from "./components/experiences-section/job-experiences-list.component";
import AboutSection from "./components/about-section/about-section.component";
import useCurrentBreakpoint from "./hooks/useCurrentBreakpoint";
import "./config/i18next.config";
import { Suspense } from "react";
import Loader from "./components/shared/loader.component";
import FooterSection from "./components/footer-section/footer-section.component";
import CertificatesSection from "./components/certificates-section/certificates-section.component";

function App() {
  const { isDesktopLarge, isDesktopExtraLarge } = useCurrentBreakpoint();

  const isUpDesktop = isDesktopLarge || isDesktopExtraLarge;

  return (
    <Suspense fallback={<Loader />}>
      {!isUpDesktop && <HeaderMenu />}

      <PresentationCard />

      <main className="mt-24 flex flex-col gap-24 xl:ml-[28vw] xl:mr-36 xl:mt-0">
        <AboutSection />
        <JobExperiencesList />
        <ProjectsSlider />
        <CertificatesSection />
        <FooterSection />
      </main>
      {isUpDesktop && <HeaderMenu />}
    </Suspense>
  );
}

export default App;
