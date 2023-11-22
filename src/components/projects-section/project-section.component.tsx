import React from "react";
import ChipComponent from "../shared/chip.component";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { projectsSectionConstants } from "./constants/projects-section-constants";

interface ProjectSectionProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  link: string;
  tags: string[];
  isAvailable: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  image,
  description,
  link,
  tags,
  isAvailable,
}) => {
  const { currentLanguage } = useCurrentLanguage();
  const { tagsLabel } = projectsSectionConstants[currentLanguage];
  const WithLink = ({
    children,
    withLink,
  }: {
    children: React.ReactNode;
    withLink: boolean;
  }) =>
    withLink ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      children
    );

  const titleLinkClass = isAvailable
    ? "transition-all duration-500 relative group-hover:text-cyan-500 before:content-[''] before:absolute before:top-full before:left-0 before:origin-left before:w-full before:h-[2px] before:bg-cyan-500 before:scale-0 before:transition-all before:duration-500 before:group-hover:scale-100"
    : "";

  return (
    <section className="group flex flex-grow cursor-pointer flex-col rounded-lg p-5 hover:bg-gray-900">
      <WithLink withLink={isAvailable}>
        <div className="mb-2 flex items-center">
          <h2 className={`text-left font-bold ${titleLinkClass}`}>{title}</h2>
          {isAvailable && (
            <ArrowUpRightIcon className="ml-1 w-5 origin-bottom-left scale-0 transition-all duration-500 group-hover:scale-100 group-hover:animate-link group-hover:text-cyan-500 group-hover:[animation-delay:500ms]" />
          )}
        </div>

        <img
          className="mb-2 rounded-md text-sm font-semibold"
          src={image.src}
          alt={image.alt}
        />

        <p className="mb-4 text-left text-sm leading-normal text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="self-center text-brandColors-text">{tagsLabel}</span>
          {tags.map((tag, idx) => (
            <ChipComponent key={`${title}-tag-${idx}`} text={tag} />
          ))}
        </div>
      </WithLink>
    </section>
  );
};

export default ProjectSection;
