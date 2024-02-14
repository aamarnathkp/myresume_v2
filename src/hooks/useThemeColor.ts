import { useState, useCallback } from "react";

import { themeColors } from "../constants/colors";

const useThemeColor = () => {
    const [currentTheme, updateCurrentTheme] = useState(0);

    const nextThemeColor = useCallback(() => {
        if (currentTheme >= themeColors.length) {
            updateCurrentTheme(0);
        } else {
            updateCurrentTheme((prevTheme) => prevTheme + 1);
        }
    }, [currentTheme]);

    return {
        activeTheme: themeColors[currentTheme],
        nextTheme: nextThemeColor,
    };
};

export default useThemeColor;
