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
      className="group rounded-full p-2 hover:scale-110 hover:rotate-12 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <Icon className="h-6 w-6 group-hover:fill-brandColors-contrast" />
    </a>
  );
};

export default ButtonIcon;
