import React from "react";

import { ThemeSelectContainer } from "./themeSelectElements";
import ThemeBubble from "./ThemeBubble";

const ThemeSelect = () => {
    return (
        <ThemeSelectContainer>
            <ThemeBubble themeNumber={0} />
            <ThemeBubble themeNumber={1} />
            <ThemeBubble themeNumber={2} />
        </ThemeSelectContainer>
    );
};

export default ThemeSelect;
