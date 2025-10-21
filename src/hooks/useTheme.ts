// src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

export const useTheme = () => useContext(ThemeContext);
