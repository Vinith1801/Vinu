// src/theme/index.ts
export type Theme = {
  colors: {
    background: string;
    surface: string;
    primary: string;
    accent: string;
    text: string;
    muted: string;
  };
  spacing: {
    tiny: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  radii: {
    sm: number;
    md: number;
    lg: number;
  };
};

export const lightTheme: Theme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F5F5F7',
    primary: '#1F2937', // dark text
    accent: '#FF5252',
    text: '#111827',
    muted: '#6B7280',
  },
  spacing: {
    tiny: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
  },
  radii: {
    sm: 6,
    md: 12,
    lg: 18,
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#0B0B0D',
    surface: '#121214',
    primary: '#E6E7E8', // light text
    accent: '#FF5252',
    text: '#E6E7E8',
    muted: '#9CA3AF',
  },
  spacing: {
    tiny: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
  },
  radii: {
    sm: 6,
    md: 12,
    lg: 18,
  },
};
