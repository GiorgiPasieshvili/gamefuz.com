import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const ThemeUpdateContext = createContext(() => {});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export function ThemeProvider({ children }: any) {
  const localTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(localTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
