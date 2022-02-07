import { useContext } from "react";
import { ColorModeContext } from "./../App";
const useDarkMode = () => {
  return useContext(ColorModeContext);
};
export { useDarkMode };
