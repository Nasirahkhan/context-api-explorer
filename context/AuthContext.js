
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      console.log("Using mock login for development");
      
     
      const validUsers = [
  { email: "george.bluth@reqres.in", password: "password123", token: "DEMO_TOKEN_123" },
];
      
      const user = validUsers.find(u => 
        u.email === email.trim() && u.password === password.trim()
      );
      
      if (user) {
        await AsyncStorage.setItem("token", user.token);
        setToken(user.token);
        return { success: true, data: { token: user.token } };
      }
      
      return { success: false, error: "Invalid credentials" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Network error" };
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const loadToken = async () => {
      const savedToken = await AsyncStorage.getItem("token");
      if (savedToken) setToken(savedToken);
      setLoading(false);
    };
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
