import React from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";
import {
    HomeContainer,
    HomeImageHolder,
    MyThemeSelectionContainer,
} from "./homeElements";
import MyDetails from "./MyDetails";

import "./homeStyle.css";
import MySocialHandles from "./SocialHandles/MySocialHandles";
import ThemeSelect from "../../components/ThemeSelect/ThemeSelect";
import DeskTopImage from "./DeskTopImage";
// import ThemeBubbles from "./ThemeBubbles";

const Home = () => {
    const themeContext = useThemeContext();

    console.log("Home");
    return (
        <PageContainer>
            <HomeContainer>
                <HomeImageHolder
                    $activeTheme={`${themeContext.activeTheme?.primary}20`}>
                    <MyDetails />
                    <MySocialHandles />
                    <MyThemeSelectionContainer>
                        <ThemeSelect />
                        <DeskTopImage />
                    </MyThemeSelectionContainer>
                </HomeImageHolder>
            </HomeContainer>
            {/* <ThemeBubbles /> */}
        </PageContainer>
    );
};

export default Home;
