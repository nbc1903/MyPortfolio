import { useLayoutEffect, useState } from "react";
import { getCurrentBreakpoint } from "../utils/getTwBreakpoints";

const useCurrentBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>();

  useLayoutEffect(() => {
    function updateCurrentBreakpoint() {
      setCurrentBreakpoint(getCurrentBreakpoint());
    }
    window.addEventListener("resize", updateCurrentBreakpoint);
    updateCurrentBreakpoint();
    return () => window.removeEventListener("resize", updateCurrentBreakpoint);
  }, []);

  return {
    isMobile: currentBreakpoint === "xsm",
    isTablet: currentBreakpoint === "sm",
    isTabletLarge: currentBreakpoint === "md",
    isDesktop: currentBreakpoint === "lg",
    isDesktopLarge: currentBreakpoint === "xl",
    isDesktopExtraLarge: currentBreakpoint === "2xl",
  };
};

export default useCurrentBreakpoint;
