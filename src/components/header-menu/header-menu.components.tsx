import { useRef, useState, useEffect } from "react";
import MenuButton from "./menu-button.component";
import { menuItems } from "../../data/menu";
import useScrollDirection from "../../hooks/useScrollDirection";
import useScreenResize from "../../hooks/useScreenResize";

const HeaderMenu = () => {
  const menuSelectBackdrop = useRef<HTMLDivElement>(null);
  const [selectedMenuTitle, setSelectedMenuTitle] = useState<string>("home");
  const scrollDirection = useScrollDirection();
  const screenWidth = useScreenResize();

  const moveMenuSelectBackdrop = () => {
    if (menuSelectBackdrop.current) {
      const selectedMenuElement = document.getElementById(
        `menu-button-${selectedMenuTitle}`
      );
      if (selectedMenuElement) {
        const { left } = selectedMenuElement.getBoundingClientRect();
        menuSelectBackdrop.current.style.setProperty("--left", `${left}px`);
      }
    }
  };

  useEffect(() => {
    const navigationSectionsChangeMenu = () => {
      const allNavigationSections =
        document.getElementsByClassName("navigation_section");
      Array.prototype.forEach.call(
        allNavigationSections,
        function (navigationSection, idx) {
          if (idx !== allNavigationSections.length - 1) {
            if (navigationSection.getBoundingClientRect().top < 200) {
              setSelectedMenuTitle(navigationSection.id);
            }
          } else {
            if (
              navigationSection.getBoundingClientRect().top <
              window.innerHeight - 200
            ) {
              setSelectedMenuTitle(navigationSection.id);
            }
          }
        }
      );
    };

    window.addEventListener("scroll", navigationSectionsChangeMenu);
    return () => {
      window.removeEventListener("scroll", navigationSectionsChangeMenu);
    };
  }, []);

  useEffect(() => {
    moveMenuSelectBackdrop();
  }, [selectedMenuTitle, screenWidth]);

  const menuItemSelect = (selectedMenuTitle: string) => () => {
    setSelectedMenuTitle(selectedMenuTitle);
  };

  return (
    <header
      className={`sticky mb-16 transition-all duration-300 z-30 ${
        scrollDirection == "down" ? "-top-16" : "top-5"
      }`}
    >
      <nav className="p-5 border rounded-full shadow-neon bg-gray-800">
        <ul className="flex justify-evenly gap-2">
          {menuItems.map((menuItem) => (
            <li
              key={`menu-${menuItem.title}`}
              className={`z-20 ${
                selectedMenuTitle === menuItem.title
                  ? "pointer-events-none [&_svg]:drop-shadow-neon"
                  : "hover:scale-125 transition-all hover:text-cyan-500"
              }`}
            >
              <MenuButton
                href={menuItem.href}
                Icon={menuItem.icon}
                title={menuItem.title}
                onClick={menuItemSelect(menuItem.title)}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div
        ref={menuSelectBackdrop}
        className={`
          absolute border border-cyan-100 rounded-full
          translate-x-[calc(var(--left)-25px)]
          left-0 top-4
          w-[30px] h-[30px]
          transition-all duration-300
          ease-in-out z-10
        `}
      ></div>
    </header>
  );
};

export default HeaderMenu;
