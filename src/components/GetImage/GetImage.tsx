import React, { useState, useEffect } from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import { GetImageProps } from "./types";
import { findImagePath } from "./helper";

const GetImage = (props: GetImageProps) => {
    const [svgUrl, setSvgUrl] = useState<string>("");
    const { currentThemeNumber } = useThemeContext();

    useEffect(() => {
        const imagePath = findImagePath({ ...props }, currentThemeNumber);
        import(`../../assets/images/${imagePath}`)
            .then((module) => {
                setSvgUrl(module.default);
            })
            .catch((error) => {
                console.error("error loading svg", error);
            });
    }, [svgUrl, currentThemeNumber]);

    return <img src={svgUrl} alt='expHandsUp' />;
};

export default GetImage;
