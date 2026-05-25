import React, { useState, useEffect } from "react";

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

const Home = () => {
    const themeContext = useThemeContext();
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            // On screens smaller than 1080px (the approximate design width of the desktop layout),
            // dynamically calculate the scale factor to fit the viewport perfectly.
            if (width < 1080) {
                setScale(width / 1080);
            } else {
                setScale(1);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log("Home, scale:", scale);
    return (
        <PageContainer>
            <HomeContainer>
                <HomeImageHolder
                    $activeTheme={`${themeContext.activeTheme?.primary}20`}
                    $scale={scale}>
                    <MyDetails />
                    <MySocialHandles />
                    <MyThemeSelectionContainer>
                        <ThemeSelect />
                        <DeskTopImage />
                    </MyThemeSelectionContainer>
                </HomeImageHolder>
            </HomeContainer>
        </PageContainer>
    );
};

export default Home;
