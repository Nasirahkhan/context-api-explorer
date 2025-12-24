import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/AuthContext";
import { ApiProvider } from "./context/ApiContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LoaderProvider } from "./context/LoaderContext";
import AppNavigator from "./navigation/AppNavigator";
import Loader from "./components/Loader";
import Toast from "react-native-toast-message";
import { toastConfig } from "./config/ToastConfig";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <LoaderProvider>
            <ApiProvider>
              <AppNavigator />
              <Loader />
              <Toast config={toastConfig} />
            </ApiProvider>
          </LoaderProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}