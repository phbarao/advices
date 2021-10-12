import { useState, useContext, createContext, useEffect } from "react";

export const themes = [
  {
    name: "light",
    colors: {
      background: "rgba(255,255,255,0.8)",
      text: "#000",
    },
  },
  {
    name: "dark",
    colors: {
      background: "rgba(0,0,0,0.8)",
      text: "#fff",
    },
  },
];

// CONTEXT
const ThemeContext = createContext();

// PROVIDER
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    const themeStorage = localStorage.getItem("@Advices:theme");

    if (themeStorage) {
      setTheme(JSON.parse(themeStorage));
    } else {
      setTheme(themes[0]);
      localStorage.setItem("@Advices:theme", JSON.stringify(theme));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// HOOK
export const useTheme = () => useContext(ThemeContext);
