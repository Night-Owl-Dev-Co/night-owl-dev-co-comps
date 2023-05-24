import {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  PropsWithChildren,
} from 'react';

const ThemeContext = createContext(null);

const useThemeContext = () => useContext(ThemeContext);

export interface IThemeProviderProps extends PropsWithChildren {
  theme: string;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [theme, withTheme] = useState('default');

  return (
    <ThemeContext.Provider value={{ theme, withTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default { ThemeProvider };
