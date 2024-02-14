import React from "react";

import { ThemeBubblesContainer, BubbleOne } from "./homeElements";
import ThemeBubble from "../../components/ThemeSelect/ThemeBubble";
import { useThemeContext } from "../../providers/ThemeContextProvider";

const ThemeBubbles = () => {
    const themeContext = useThemeContext();
    return (
        <ThemeBubblesContainer>
            <BubbleOne>
                <ThemeBubble
                    themeNumber={themeContext.currentThemeNumber}
                    bubbleDiameter='100'
                />
                <ThemeBubble
                    themeNumber={themeContext.currentThemeNumber}
                    bubbleDiameter='100'
                />
                <ThemeBubble
                    themeNumber={themeContext.currentThemeNumber}
                    bubbleDiameter='100'
                />
            </BubbleOne>
        </ThemeBubblesContainer>
    );
};

export default ThemeBubbles;
