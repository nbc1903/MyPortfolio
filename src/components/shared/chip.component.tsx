import React from "react";

interface ChipComponentProps {
  text: string;
}

const ChipComponent: React.FC<ChipComponentProps> = ({ text }) => {
  return (
    <div
      className="bg-cyan-500 text-cyan-50 font-bold rounded-full px-3 py-0.5 text-xs
        flex items-center leading-5"
    >
      {text}
    </div>
  );
};

export default ChipComponent;
