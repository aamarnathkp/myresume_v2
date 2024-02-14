import React from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import ShapeCircle from "../Shapes/ShapeCircle";
import { themeColors } from "../../constants/colors";

type ThemeBubbleProps = {
    themeNumber: number;
    onThemeClick?: () => void;
    bubbleDiameter?: string;
};

const themeBtnDiameter = "15";
const selectedThemeBtnDiameter = "35";

const ThemeBubble = ({
    themeNumber,
    bubbleDiameter = themeBtnDiameter,
}: ThemeBubbleProps) => {
    const themeContext = useThemeContext();

    const currentBtnSelected = (themeColor: string) => {
        if (themeColor === themeContext.activeTheme.primary)
            return selectedThemeBtnDiameter;
        return bubbleDiameter;
    };

    return (
        <ShapeCircle
            color={themeColors[themeNumber].primary}
            onClick={() => themeContext.changeTheme(themeNumber)}
            diameter={currentBtnSelected(themeColors[themeNumber].primary)}
        />
    );
};

export default ThemeBubble;
