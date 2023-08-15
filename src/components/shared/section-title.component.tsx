import React from "react";
import RevealAnimation from "./reveal-animation.component";

interface SectionTitleProps {
  title: string;
  Icon: React.ElementType;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, Icon }) => {
  return (
    <RevealAnimation type="left">
      <div className="mb-10 flex items-center">
        <Icon className="mr-2 w-4 text-cyan-200" />
        <span
          className={`
              flex-shrink-0
              animate-sectionTitleBackground bg-cyan-500 
              bg-[url("/src/assets/title-bg.svg")]
              bg-clip-text
              bg-center
              text-2xl
              font-extrabold
              text-transparent
              [background-size:60%_auto]
            `}
        >
          {title}
        </span>
        <hr className="ml-4 mt-2 flex-grow rounded-full border-2 [border-image:linear-gradient(to_right,#06b6d4,transparent)_1]" />
      </div>
    </RevealAnimation>
  );
};

export default SectionTitle;
