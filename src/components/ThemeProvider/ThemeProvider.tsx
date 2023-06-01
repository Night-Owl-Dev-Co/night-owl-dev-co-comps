import {
  createContext,
  useContext,
  useMemo,
  useState,
  FC,
  PropsWithChildren,
} from 'react';

import themes from './Themes.data';

const ThemeContext = createContext({} as any);

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, withTheme] = useState('default');

  const ThemeStyle = useMemo(() => themes[theme] || themes['default'], [theme]);

  return (
    <ThemeContext.Provider value={{ ThemeStyle, withTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useThemeContext };
