import { useLayoutEffect, useState } from "react";

const useScreenResize = () => {
  const [screenWidth, setScreenWidth] = useState<number>();

  useLayoutEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return screenWidth;
};

export default useScreenResize;
