import { createContext, useState } from "react";

export const ThemeContext = createContext();

const themes = ["dark", "light"];

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const themeData = themes;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = [{ theme, themeData }, toggleTheme];

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
