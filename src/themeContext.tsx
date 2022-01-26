import React from 'react';

export type theme = 'darkgreen' | 'lightgreen' | 'purple';

interface themeContextModel<T> {
    theme: T;
    toggleTheme?: (theme: T) => void;
}

const ThemeContext = React.createContext<themeContextModel<theme>>({theme: 'darkgreen'})
export default ThemeContext;
