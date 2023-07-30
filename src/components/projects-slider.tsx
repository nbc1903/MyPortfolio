import React, { useState, useEffect, useCallback, useMemo } from "react";
import { projects } from "../data/projects";
import { Carousel } from "react-responsive-carousel";
import ProjectSection from "./project-section.component";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useCurrentBreakpoint from "../hooks/useCurrentBreakpoint";
interface ProjectsSliderProps {}

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const { isMobile, isTablet, isTabletLarge } = useCurrentBreakpoint();

  const renderCarouselArrow =
    (type: "next" | "prev") =>
    (onClickHandle: () => void, hasNextOrPrev: boolean, label: string) => {
      const isNext = type === "next";
      const Icon = isNext ? ChevronRightIcon : ChevronLeftIcon;
      const positionClass = isNext ? "right-0 " : "left-0 ";
      let hoverClass = hasNextOrPrev
        ? "hover:bg-gray-200 hover:scale-110 transition-all"
        : "opacity-50";
      hoverClass += hasNextOrPrev
        ? isNext
          ? " hover:right-1"
          : " hover:left-1"
        : "";
      return (
        <button
          onClick={onClickHandle}
          disabled={!hasNextOrPrev}
          title={label}
          className={`w-8 h-8 p-1 bg-white text-gray-800 rounded-full absolute top-[calc(50%-40px)] z-10 ${positionClass} ${hoverClass}`}
        >
          <Icon />
        </button>
      );
    };

  const RenderProjectSectionMap = useCallback(() => {
    return projects.map((project, idx) => {
      const isSelected = activeSlideIdx === idx;
      const isNotSelectedClass = !isSelected ? `scale-90 opacity-40` : "";
      return (
        <div
          key={`${project.title}-project-${idx}`}
          className={` mb-11 transition-all scale ${isNotSelectedClass}`}
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
      {RenderProjectSectionMap()}
    </Carousel>
  );
};

export default ProjectsSlider;
