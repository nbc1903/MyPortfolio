import React from "react";

interface ButtonIconProps {
  href: string;
  Icon: React.ElementType;
  title: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ href, Icon, title }) => {
  return (
    <a
      href={href}
      className="group rounded-full border border-white p-3 transition-[transform,_colors] hover:rotate-12 hover:scale-110 hover:border-cyan-200"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <Icon className="h-6 w-6 group-hover:fill-cyan-200" />
    </a>
  );
};

export default ButtonIcon;
