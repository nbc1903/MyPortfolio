import React from "react";

interface MenuButtonProps {
  href: string;
  title: string;
  Icon: React.ElementType;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  href,
  title,
  Icon,
  onClick,
}) => {
  return (
    <a id={`menu-button-${title}`} onClick={onClick} title={title} href={href}>
      <Icon className="pointer-events-none h-5 w-5" />
    </a>
  );
};
export default MenuButton;
