// src/theme/ThemeProvider.tsx
import React, { createContext, useMemo, useState, ReactNode } from 'react';
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
  const colorScheme = Appearance.getColorScheme(); // 'light' | 'dark' | null
  const [mode, setMode] = useState<'dark' | 'light'>(colorScheme === 'dark' ? 'dark' : 'light');

  const toggle = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  const value = useMemo(
    () => ({ mode, theme: mode === 'dark' ? darkTheme : lightTheme, toggle }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
