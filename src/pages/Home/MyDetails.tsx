import React from "react";
import styled from "styled-components";

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

const ExperienceYearText = styled.span<{ $bgColor?: string }>`
    color: #f7f7f7;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 1rem;
    padding-right: 1rem;

    @media (max-width: 768px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.$bgColor};
        color: #ffffff;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        padding: 0;
        margin: 0 0.5rem;
        font-size: 1.3rem;
    }
`;

const MyDetails = () => {
    const themeContext = useThemeContext();

    return (
        <>
            <HomeAvathar $activeTheme={`${themeContext.activeTheme?.primary}20`}>
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
                <ExperienceYearText $bgColor={themeContext.activeTheme?.primary}>
                    {homeText.experience}
                </ExperienceYearText>
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
