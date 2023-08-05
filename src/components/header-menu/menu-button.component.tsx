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
      <Icon className="w-5 h-5 pointer-events-none" />
    </a>
  );
};
export default MenuButton;
