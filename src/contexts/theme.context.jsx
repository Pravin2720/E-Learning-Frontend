import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// decide user preferred theme
const preferredTheme = window.matchMedia
  ? window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
  : "dark";

const ThemeContext = React.createContext({
  theme: {},
  changeTheme: () => {},
});

function ThemeContextDefault() {
  // get locally saved theme
  let localTheme = window.localStorage ? localStorage.getItem("theme") : preferredTheme;
  //  if not already set (user landed on website for the first time), set the preferred theme
  if (!localTheme) {
    window.localStorage && localStorage.setItem("theme", preferredTheme);
    localTheme = localStorage.getItem("theme");
  }
  const [theme, setTheme] = React.useState(localTheme);
  const setMode = (mode) => {
    window.localStorage && localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (callback = () => {}) => {
    setMode(localTheme === "light" ? "dark" : "light");
    callback();
  };

  // ================================================================================================

  return {
    theme: themes[theme],
    changeTheme: toggleTheme,
  };
}

export function ThemeProvider({ children }) {
  const value = ThemeContextDefault();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return React.useContext(ThemeContext);
}

export default useThemeContext;
