import React, { createContext, ReactNode, useState, useContext } from "react";

import { themeColors, themeOne } from "../constants/colors";

type ActiveTheme = {
    primary: string;
    light: string;
    lighter: string;
    dark: string;
};

type ThemeContextValue = {
    currentThemeNumber: number;
    activeTheme: ActiveTheme;
    nextTheme: () => void;
    changeTheme: (x: number) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    currentThemeNumber: 0,
    activeTheme: themeOne,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    nextTheme: () => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    changeTheme: (_x: number) => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [currentTheme, updateCurrentTheme] = useState(0);

    const nextThemeColor = () => {
        console.log("next color fn", currentTheme, themeColors.length);
        if (currentTheme >= themeColors.length - 1) {
            updateCurrentTheme(0);
        } else {
            updateCurrentTheme((prevTheme) => prevTheme + 1);
        }
    };

    const changeThemeColorTo = (themeNumber: number) => {
        if (themeNumber <= themeColors.length - 1) {
            updateCurrentTheme(themeNumber);
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                currentThemeNumber: currentTheme,
                activeTheme: themeColors[currentTheme],
                nextTheme: nextThemeColor,
                changeTheme: changeThemeColorTo,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);
