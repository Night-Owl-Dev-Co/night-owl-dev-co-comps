import {
  createContext,
  useContext,
  useMemo,
  useState,
  FC,
  PropsWithChildren,
} from "react";

const themes: { [key: string]: { [key: string]: string } } = {
  default: {
    primaryColor: "#FFA72A",
    accentColor: "#458622",
    backgroundColor: "#FFC777",
    textColor: "#504f4d",
    secondaryColor: "#7F5315",
  },
  dark: {
    primaryColor: "#FFA72A",
    accentColor: "#458622",
    backgroundColor: "#504f4d",
    textColor: "#FFC777",
    secondaryColor: "#252525",
  },
};

const ThemeContext = createContext({} as any);

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, withTheme] = useState("default");

  const ThemeStyle = useMemo(() => themes[theme] || themes["default"], [theme]);

  return (
    <ThemeContext.Provider value={{ ThemeStyle, withTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext };

