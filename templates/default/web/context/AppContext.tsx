import React, { useState, createContext, useContext, useEffect } from "react";
import { themeChange } from "theme-change";

export interface AppContext {
  theme: string;
  setTheme: (value: string) => void;
}

const AppContext = createContext<AppContext>({
  theme: "",
  setTheme: () => {},
});

export interface Props {
  [propName: string]: any;
}

export const AppContextProvider = (props: Props) => {
  const [theme, setTheme] = useState<AppContext["theme"]>("");

  useEffect(() => {
    themeChange(false);
  }, []);

  const value = {
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value} {...props} />;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useAppContext must be used within a AppContextProvider.`);
  }
  return context;
};
