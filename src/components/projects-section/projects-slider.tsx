import { useState, useEffect, useCallback, useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import ProjectSection from "./project-section.component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useCurrentBreakpoint from "../../hooks/useCurrentBreakpoint";
import SectionTitle from "../shared/section-title.component";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import RevealAnimation from "../shared/reveal-animation.component";
import { Project, Projects } from "../../types/contentTypes";
import useContentTranslation from "../../hooks/useContentTranslation";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { projectsSectionConstants } from "./constants/projects-section-constants";

const ProjectsSlider = () => {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const { isMobile, isTablet, isTabletLarge, isDesktop, isDesktopLarge } =
    useCurrentBreakpoint();
  const projectsContent = useContentTranslation<Projects>("projects");
  const { currentLanguage } = useCurrentLanguage();
  const { sectionTitle } = projectsSectionConstants[currentLanguage];
  const projects = Object.values(projectsContent) as Project[];

  const renderCarouselArrow =
    (type: "next" | "prev") =>
    (onClickHandle: () => void, hasNextOrPrev: boolean, label: string) => {
      if (!hasNextOrPrev) return;
      const isNext = type === "next";
      const Icon = isNext ? ChevronRightIcon : ChevronLeftIcon;
      const positionClass = isNext
        ? "right-0 hover:right-1 "
        : "left-0 hover:left-1";

      return (
        <button
          onClick={onClickHandle}
          disabled={!hasNextOrPrev}
          title={label}
          className={`${positionClass} absolute top-[calc(50%-40px)] z-10 h-8 w-8 rounded-full bg-white p-1 text-gray-800 opacity-90 transition-all hover:scale-110 hover:opacity-100 sm:h-10 sm:w-10 md:h-9 md:w-9`}
        >
          <Icon />
        </button>
      );
    };

  const renderProjectSectionMap = useCallback(() => {
    return projects.map((project, idx) => {
      const isSelected = activeSlideIdx === idx;
      const isNotSelectedClass = !isSelected ? `scale-75 opacity-30` : "";
      return (
        <div
          key={`${project.title}-project-${idx}`}
          className={`mb-11 transition-all ${isNotSelectedClass}`}
        >
          <ProjectSection {...project} isAvailable={isSelected} />
        </div>
      );
    });
  }, [activeSlideIdx, projects]);

  const onCarouselChange = (index: number) => {
    setActiveSlideIdx(index);
  };

  const slidePercentage = useMemo(() => {
    const desktopPercentage = projects.length < 3 ? 50 : 33.33;
    if (isMobile || isTablet) return 100;
    if (isTabletLarge || isDesktop || isDesktopLarge) return 50;
    else return desktopPercentage;
  }, [
    isDesktop,
    isDesktopLarge,
    isMobile,
    isTablet,
    isTabletLarge,
    projects.length,
  ]);

  useEffect(() => {
    setActiveSlideIdx(0);
  }, [isTabletLarge]);

  return (
    <section id="projects" className="navigation_section">
      <SectionTitle Icon={CodeBracketSquareIcon} title={sectionTitle} />
      <RevealAnimation type="down">
        <Carousel
          className="[&_.slider]:items-center"
          showStatus={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={slidePercentage}
          swipeScrollTolerance={20}
          renderArrowNext={renderCarouselArrow("next")}
          renderArrowPrev={renderCarouselArrow("prev")}
          onChange={onCarouselChange}
          onClickItem={onCarouselChange}
          selectedItem={activeSlideIdx}
        >
          {renderProjectSectionMap()}
        </Carousel>
      </RevealAnimation>
    </section>
  );
};

export default ProjectsSlider;
