import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Création du contexte
const ThemeContext = createContext();

// Thèmes
const themes = {
  light: {
    background: "#ffffff",
    text: "#111111",
    card: "#f2f2f2",
    primary: "#2f80ed",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    card: "#1e1e1e",
    primary: "#2f80ed",
  },
};

// Provider
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("APP_THEME").then((storedTheme) => {
      if (storedTheme) setMode(storedTheme);
      setReady(true);
    });
  }, []);

  const toggleTheme = async () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    await AsyncStorage.setItem("APP_THEME", newMode);
  };

  if (!ready) return null;

  return (
    <ThemeContext.Provider
      value={{ theme: themes[mode], mode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé
export const useTheme = () => useContext(ThemeContext);
