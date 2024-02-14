import React from "react";

import { ThemeProvider } from "../providers/ThemeContextProvider";
import Home from "./Home/Home";
// import Experience from "./Experience/Experience";
// import Contact from "./Contact/Contact";

const index = () => {
    return (
        <ThemeProvider>
            <Home />
            {/* <Experience />
            <Contact /> */}
        </ThemeProvider>
    );
};

export default index;
