/* import assets */
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme, useThemeUpdate } from "util/ThemeContext";

/** @namespace @component/SwitcherTheme/Component */
export default function SwitcherTheme() {
  return (
    <button className="icon" onClick={useThemeUpdate()}>
      {useTheme() === "dark" ? <BiSun /> : <BiMoon />}
    </button>
  );
}
