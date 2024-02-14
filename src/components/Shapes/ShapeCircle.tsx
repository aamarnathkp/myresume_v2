import React from "react";

import { useThemeContext } from "../../providers/ThemeContextProvider";

import { ShapeContainer, ShapeIcon } from "./shapeElements";

type CircleProps = {
    color: string;
    diameter: string;
    icon?: React.ReactElement | string;
    lowZIndex?: number;
    href?: string;
    onClick?: () => void;
};

const ShapeCircle = ({
    color = "f7f7f7",
    diameter,
    icon,
    lowZIndex = 4,
    href = "",
    onClick,
}: CircleProps) => {
    const themeContext = useThemeContext();

    const onClickHandler = () => {
        onClick && onClick();
    };

    return (
        <ShapeContainer $lowZIndex={lowZIndex} onClick={onClickHandler}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={diameter}
                height={diameter}
                viewBox='0 0 75 75'
                style={{
                    cursor: "pointer",
                    transition: "opacity 0.5s ease-in-out ",
                }}
                fill='none'>
                <circle cx='37.5' cy='37.5' r='37.5' fill={color} />
            </svg>
            {icon && (
                <ShapeIcon
                    href={href}
                    className='shape-icon'
                    target='_blank'
                    $hoverColor={themeContext.activeTheme.dark}>
                    {icon}
                </ShapeIcon>
            )}
        </ShapeContainer>
    );
};

export default ShapeCircle;
