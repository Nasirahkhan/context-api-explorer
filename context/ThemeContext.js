// ThemeContext.js - COMPLETE FIXED VERSION
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [isThemeLoading, setIsThemeLoading] = useState(true);

  // Toggle function
  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    // Save to storage
    AsyncStorage.setItem('app_theme', newTheme ? 'dark' : 'light');
  };

  // Load saved theme on app start
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('app_theme');
        if (savedTheme !== null) {
          setDark(savedTheme === 'dark');
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      } finally {
        setIsThemeLoading(false);
      }
    };
    loadTheme();
  }, []);

  const colors = {
    background: dark ? "#121212" : "#f2f2f2",
    card: dark ? "#1e1e1e" : "#ffffff",
    text: dark ? "#ffffff" : "#000000",
    textSecondary: dark ? "#a0a0a0" : "#666666",
    border: dark ? "#333333" : "#ddd",
    primary: dark ? "#BB86FC" : "#6200EE",
    secondary: dark ? "#03DAC6" : "#3700B3",
  };

  return (
    <ThemeContext.Provider value={{ 
      dark, 
      setDark, 
      toggleTheme, 
      colors, 
      isThemeLoading 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};