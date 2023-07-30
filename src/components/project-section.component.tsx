import React from "react";
import ChipComponent from "./chip.component";

interface ProjectSectionProps {
  title: string;
  image: string;
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
  const WithLink = ({
    children,
    withLink,
  }: {
    children: React.ReactNode;
    withLink: boolean;
  }) => (withLink ? <a href={link}>{children}</a> : children);

  const titleLinkClass = isAvailable
    ? "transition-all duration-500 relative group-hover:text-cyan-500 before:content-[''] before:absolute before:top-full before:left-0 before:origin-left before:w-full before:h-[2px] before:bg-cyan-500 before:scale-0 before:transition-all before:duration-500 before:group-hover:scale-100"
    : "";
  return (
    <section className="group flex flex-col flex-grow hover:bg-gray-900 cursor-pointer rounded-lg p-5">
      <WithLink withLink={isAvailable}>
        <div className="flex items-center mb-2">
          <h2 className={`font-bold ${titleLinkClass}`}>{title}</h2>
        </div>

        <img className="mb-2 text-sm font-semibold" src={image} />
        <p className="text-sm text-gray-400 text-left mb-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <ChipComponent key={`${title}-tag-${idx}`} text={tag} />
          ))}
        </div>
      </WithLink>
    </section>
  );
};

export default ProjectSection;
