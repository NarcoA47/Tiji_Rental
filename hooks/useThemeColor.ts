/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

const useThemeColor = () => {
  const getPreferredTheme = () => 
    window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      const preferredTheme = getPreferredTheme();
      localStorage.setItem('theme', preferredTheme);
      return preferredTheme;
    };

    const [theme, setTheme] = useState(initializeTheme);

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
      document.body.className = theme;

    },[theme]);

    return { theme, toggleTheme};

}

export default useThemeColor;

// export function useThemeColor(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof Colors.light & keyof typeof Colors.dark
// ) {
//   const theme = useColorScheme() ?? 'light';
//   const colorFromProps = props[theme];

//   if (colorFromProps) {
//     return colorFromProps;
//   } else {
//     return Colors[theme][colorName];
//   }
// }
