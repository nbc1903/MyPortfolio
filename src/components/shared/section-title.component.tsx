import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center">
      <span
        className={`
          text-transparent 
          bg-center
          bg-cyan-500
          bg-clip-text
          [background-size:150%_auto]
          font-extrabold text-2xl
          bg-[url("/src/assets/title-bg.svg")]
          flex-shrink-0
        `}
      >
        {title}
      </span>
      <hr className="flex-grow ml-2 [border-image:linear-gradient(to_left,#155e75,transparent)_1] border-8 rounded-full" />
    </div>
  );
};

export default SectionTitle;
