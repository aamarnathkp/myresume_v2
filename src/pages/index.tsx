import React from "react";

import { ThemeProvider } from "../providers/ThemeContextProvider";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
import Contact from "./Contact/Contact";

const index = () => {
    return (
        <ThemeProvider>
            <Home />
            <AboutMe />
            <Experience />
            <Skills />
            <Hobbies />
            <Contact />
        </ThemeProvider>
    );
};

export default index;
