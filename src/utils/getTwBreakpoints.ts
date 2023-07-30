import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { KeyValuePair } from "tailwindcss/types/config";

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number | undefined => {
  if (fullConfig.theme && fullConfig.theme.screens) {
    return +(fullConfig.theme.screens as KeyValuePair<string, string>)[
      value
    ]?.slice(
      0,
      (fullConfig.theme.screens as KeyValuePair<string, string>)[value].indexOf(
        "px"
      )
    );
  }
};

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint = "xsm";
  if (fullConfig.theme && fullConfig.theme.screens) {
    for (const breakpoint of Object.keys(
      fullConfig.theme.screens as KeyValuePair<string, string>
    )) {
      const breakpointValue = getBreakpointValue(breakpoint);
      if (breakpointValue) {
        if (window.innerWidth >= breakpointValue) {
          currentBreakpoint = breakpoint;
        }
      }
    }
  }
  return currentBreakpoint;
};
