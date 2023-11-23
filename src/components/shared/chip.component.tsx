import React from "react";

interface ChipComponentProps {
  text: string;
}

const ChipComponent: React.FC<ChipComponentProps> = ({ text }) => {
  return (
    <div
      className="flex items-center rounded-full bg-cyan-700 px-3 py-0.5 text-xs
        font-bold leading-5 text-brandColors-main"
    >
      {text}
    </div>
  );
};

export default ChipComponent;
