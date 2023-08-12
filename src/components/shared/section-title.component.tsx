import React from "react";
import RevealAnimation from "./reveal-animation.component";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <RevealAnimation type="left">
      <div className="flex items-center mb-10">
        <span
          className={`
          text-transparent
          font-extrabold text-2xl 
          bg-center
          bg-cyan-500
          bg-clip-text
          [background-size:60%_auto]
          bg-[url("/src/assets/title-bg.svg")]
          flex-shrink-0
          animate-sectionTitleBackground
        `}
        >
          {title}
        </span>
        <hr className="flex-grow ml-4 mt-2 [border-image:linear-gradient(to_right,#06b6d4,transparent)_1] border-2 rounded-full" />
      </div>
    </RevealAnimation>
  );
};

export default SectionTitle;
