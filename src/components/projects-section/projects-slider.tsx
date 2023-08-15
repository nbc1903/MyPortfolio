import { useState, useEffect, useCallback, useMemo } from "react";
import { projects } from "../../data/projects";
import { Carousel } from "react-responsive-carousel";
import ProjectSection from "./project-section.component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useCurrentBreakpoint from "../../hooks/useCurrentBreakpoint";
import SectionTitle from "../shared/section-title.component";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import RevealAnimation from "../shared/reveal-animation.component";

const ProjectsSlider = () => {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const { isMobile, isTablet, isTabletLarge } = useCurrentBreakpoint();

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
          className={`${positionClass} w-8 h-8 sm:w-10 sm:h-10 md:w-9 md:h-9 p-1 opacity-90 bg-white text-gray-800 rounded-full absolute top-[calc(50%-40px)] z-10 hover:opacity-100 hover:scale-110 transition-all`}
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
  }, [activeSlideIdx]);

  const onCarouselChange = (index: number) => {
    setActiveSlideIdx(index);
  };

  const slidePercentage = useMemo(() => {
    if (isMobile || isTablet) return 100;
    if (isTabletLarge) return 33.33;
    else return 33.33;
  }, [isMobile, isTablet, isTabletLarge]);

  useEffect(() => {
    setActiveSlideIdx(0);
  }, [isTabletLarge]);

  return (
    <section id="projects" className="navigation_section">
      <SectionTitle Icon={CodeBracketSquareIcon} title="Personal Projects" />
      <RevealAnimation type="down">
        <Carousel
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
