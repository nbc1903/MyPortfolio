import { useRef, useState, useEffect, useCallback } from "react";
import MenuButton from "./menu-button.component";
import { menuItems } from "../../data/menu";
import useScreenResize from "../../hooks/useScreenResize";
import useCurrentBreakpoint from "../../hooks/useCurrentBreakpoint";
import LanguageButton from "./language-button.component";
import RevealAnimation from "../shared/reveal-animation.component";

const HeaderMenu = () => {
  const menuSelectBackdrop = useRef<HTMLDivElement>(null);
  const [selectedMenuTitle, setSelectedMenuTitle] = useState<string>("");
  const screenWidth = useScreenResize();
  const { isDesktopLarge, isDesktopExtraLarge } = useCurrentBreakpoint();

  const isUpDesktop = isDesktopLarge || isDesktopExtraLarge;

  useEffect(() => {
    setSelectedMenuTitle(!isUpDesktop ? "home" : "about");
  }, [isUpDesktop]);

  const moveMenuSelectBackdrop = useCallback(() => {
    if (menuSelectBackdrop.current) {
      const selectedMenuElement = document.getElementById(
        `menu-button-${selectedMenuTitle}`,
      );
      if (selectedMenuElement) {
        const { left, top } = selectedMenuElement.getBoundingClientRect();

        if (!isUpDesktop) {
          menuSelectBackdrop.current.style.setProperty("--left", `${left}px`);
        } else {
          menuSelectBackdrop.current.style.setProperty("--top", `${top}px`);
        }
      }
    }
  }, [isUpDesktop, selectedMenuTitle]);

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
        },
      );
    };

    window.addEventListener("scroll", navigationSectionsChangeMenu);
    return () => {
      window.removeEventListener("scroll", navigationSectionsChangeMenu);
    };
  }, []);

  useEffect(() => {
    moveMenuSelectBackdrop();
  }, [selectedMenuTitle, screenWidth, moveMenuSelectBackdrop]);

  const menuItemSelect = (selectedMenuTitle: string) => () => {
    setTimeout(() => {
      setSelectedMenuTitle(selectedMenuTitle);
    }, 500);
  };

  const menuSelectedBackdropStylePosition = isUpDesktop
    ? "translate-y-[calc(var(--top)-5px)] right-4 top-0"
    : "translate-x-[calc(var(--left)-25px)] left-0 top-4";
  return (
    <header
      className={`sticky z-30 mb-16 transition-all duration-300 xl:fixed xl:right-10 xl:flex xl:h-screen xl:items-center xl:transition-none ${
        !isUpDesktop ? "top-5" : "top-0"
      }`}
    >
      <RevealAnimation type={"opacity"}>
        <>
          <nav className="rounded-full border bg-gray-800 p-5 shadow-neon">
            <ul className="flex justify-evenly gap-2 xl:flex-col xl:gap-10 xl:py-10">
              {menuItems.map((menuItem) => {
                if (isUpDesktop && menuItem.title === "home") return;
                return (
                  <li
                    key={`menu-${menuItem.title}`}
                    className={`z-20 ${
                      selectedMenuTitle === menuItem.title
                        ? "pointer-events-none [&_svg]:drop-shadow-neon"
                        : "transition-all hover:scale-125 hover:text-cyan-200"
                    }`}
                  >
                    <MenuButton
                      href={menuItem.href}
                      Icon={menuItem.icon}
                      title={menuItem.title}
                      onClick={menuItemSelect(menuItem.title)}
                    />
                  </li>
                );
              })}

              <li>
                <LanguageButton />
              </li>
            </ul>
          </nav>

          <div
            ref={menuSelectBackdrop}
            className={`
              absolute rounded-full border border-cyan-100
              ${menuSelectedBackdropStylePosition}
              z-10 h-[30px]
              w-[30px] transition-all
              duration-300 ease-in-out
            `}
          ></div>
        </>
      </RevealAnimation>
    </header>
  );
};

export default HeaderMenu;
