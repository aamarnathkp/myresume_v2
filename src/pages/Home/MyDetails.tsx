import React from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import GetImage from "../../components/GetImage/GetImage";
import {
    HomeAvathar,
    NameHeader,
    NameGreeting,
    DesignationText,
    CircleShapeContainer,
} from "./homeElements";
import Circle from "../../components/Shapes/ShapeCircle";
import { homeText } from "../../constants/homeSection";

const MyDetails = () => {
    const themeContext = useThemeContext();

    return (
        <>
            <HomeAvathar>
                <GetImage avathar={true} whichAvathar='home' />
            </HomeAvathar>
            <NameGreeting>{homeText.greeting}</NameGreeting>
            <NameHeader $activeTheme={themeContext.activeTheme?.primary}>
                {homeText.name}
            </NameHeader>
            <DesignationText $activeTheme={themeContext.activeTheme?.primary}>
                {homeText.designation}
            </DesignationText>
            <span className='experience-text-container '>
                <span className='experience-text-description'>
                    {homeText.expDescriptionStart}
                </span>
                <span className='experience-year-text'>
                    {homeText.experience}{" "}
                </span>
                <span className='experience-text-description'>
                    {homeText.expDescription}
                </span>
            </span>
            <CircleShapeContainer>
                <Circle
                    color={themeContext.activeTheme?.primary}
                    diameter='75'
                    lowZIndex={2}
                />
            </CircleShapeContainer>
        </>
    );
};

export default MyDetails;
