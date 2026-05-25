import React from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import {
    HomeContainer,
    HomeImageHolder,
    HomePageContainer,
    MyThemeSelectionContainer,
} from "./homeElements";
import MyDetails from "./MyDetails";

import "./homeStyle.css";
import MySocialHandles from "./SocialHandles/MySocialHandles";
import ThemeSelect from "../../components/ThemeSelect/ThemeSelect";
import DeskTopImage from "./DeskTopImage";

const Home = () => {
    const themeContext = useThemeContext();

    console.log("Home");
    return (
        <HomePageContainer>
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
        </HomePageContainer>
    );
};

export default Home;
