import React from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";

const Experience = () => {
    const themeContext = useThemeContext();

    console.log("Experience !");

    return (
        <PageContainer $activeTheme={themeContext.activeTheme?.lighter}>
            <div>Experience</div>
            <h1>{`Experience - ${themeContext.activeTheme?.primary}`}</h1>
            <button onClick={() => themeContext.nextTheme()}>Theme</button>
        </PageContainer>
    );
};

export default Experience;
