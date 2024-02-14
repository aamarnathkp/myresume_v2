export type GetImageProps = {
    avathar?: boolean;
    plant?: boolean;
    item?: boolean;
    logo?: boolean;
    whichAvathar?:
        | "home"
        | "expSitting"
        | "expHandsUp"
        | "aboutMe"
        | "expSittingChart"
        | "avathar";
    whichPlant?: "plant1" | "plant2" | "plant3";
    whichItem?: "computerScreen" | "display" | "longFeetTable" | "longChair";
};
