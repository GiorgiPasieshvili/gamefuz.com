/* import assets */
import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme, useThemeUpdate } from "util/ThemeContext";

/** @namespace @component/ThemeToggle/Component */
export default function ThemeToggle() {
  return (
    <button className="icon" onClick={useThemeUpdate()}>
      {useTheme() === "dark" ? <BiSun /> : <BiMoon />}
    </button>
  );
}
