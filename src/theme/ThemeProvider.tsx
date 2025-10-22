import React, { createContext, useMemo, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import { darkTheme, lightTheme, Theme } from './index';

type ThemeContextValue = {
  theme: Theme;
  mode: 'dark' | 'light';
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  mode: 'light',
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'dark' | 'light'>(
    Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'
  );

  // 🔁 Listen for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) {
        setMode(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });
    return () => subscription.remove();
  }, []);

  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  const value = useMemo(
    () => ({ mode, theme: mode === 'dark' ? darkTheme : lightTheme, toggle }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
