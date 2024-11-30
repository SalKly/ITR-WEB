import React, { createContext, useContext, ReactNode } from "react";
import { ThemeHook, useTheme } from "../hooks/useTheme";

// Define the type for the context
interface ThemeDataContextType extends ThemeHook {}

// Create the context with default values
export const ThemeDataContext = createContext<ThemeDataContextType | undefined>(undefined);

//provider properties
interface ThemeDataProviderProps {
  children: ReactNode;
}

// Provider component
export const ThemeDataProvider: React.FC<ThemeDataProviderProps> = ({ children }) => {
  const ThemeData = useTheme();

  return <ThemeDataContext.Provider value={ThemeData}>{children}</ThemeDataContext.Provider>;
};

export const useThemeDataContext = () => {
  const context = useContext(ThemeDataContext);
  if (context === undefined) {
    throw new Error("useThemeDataContext must be used within a ThemeDataProvider");
  }
  return context;
};
