import React from "react";

interface ChipComponentProps {
  text: string;
}

const ChipComponent: React.FC<ChipComponentProps> = ({ text }) => {
  return (
    <div
      className="bg-brandColors-contrast text-brandColors-main font-bold rounded-full px-3 py-0.5 text-xs
        flex items-center leading-5"
    >
      {text}
    </div>
  );
};

export default ChipComponent;
