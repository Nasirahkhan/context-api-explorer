import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const colors = {
    background: dark ? "#121212" : "#f2f2f2",
    card: dark ? "#1e1e1e" : "#ffffff",
    text: dark ? "#ffffff" : "#000000",
    textSecondary: dark ? "#a0a0a0" : "#666666",
    border: dark ? "#333333" : "#ddd",
    primary: "#6200EE",
    secondary: dark ? "#BB86FC" : "#3700B3",
  };

  return (
    <ThemeContext.Provider value={{ dark, setDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};