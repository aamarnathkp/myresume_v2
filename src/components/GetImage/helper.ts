import { GetImageProps } from "./types";

export const getThemeNumberStr = (themeNumber: number) => {
    if (themeNumber === 0) return "themeOne";
    if (themeNumber === 1) return "themeTwo";
    return "themeThree";
};

type findImagePathType = (
    imageProps: GetImageProps,
    themeNumber: number
) => string;

export const findImagePath: findImagePathType = (imageProps, themeNumber) => {
    const avatarBasePath = "illustrations/avathar";
    const plantBasePath = "illustrations/plants";
    const itemsBasePath = "illustrations/items";
    const logoBasePath = "logo";

    const theme = getThemeNumberStr(themeNumber);

    if (imageProps.avathar) {
        return `${avatarBasePath}/${theme}/${imageProps.whichAvathar}.svg`;
    } else if (imageProps.plant) {
        return `${plantBasePath}/${imageProps.whichPlant}.svg`;
    } else if (imageProps.item && imageProps.whichItem === "computerScreen") {
        return `${itemsBasePath}/${theme}/${imageProps.whichItem}.svg`;
    } else if (imageProps.item) {
        return `${itemsBasePath}/${imageProps.whichItem}.svg`;
    } else {
        return `${logoBasePath}/${theme}.svg`;
    }
};
