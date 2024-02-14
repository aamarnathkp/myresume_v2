import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsTwitterX, BsGithub } from "react-icons/bs";

import {
    MySocialHandleContainer,
    MySocialHandleIcons,
    MySocialHandleHeading,
} from "../homeElements";
import ShapeCircle from "../../../components/Shapes/ShapeCircle";
import { useThemeContext } from "../../../providers/ThemeContextProvider";
import { socialHandles, homeText } from "../../../constants/homeSection";

type MysSocialIconProps = {
    name?: string;
    href?: string;
};

const MySocialIcon = ({ name, href }: MysSocialIconProps) => {
    switch (name) {
        case "facebook":
            return (
                <BsFacebook href={href} aria-label='Vist my Facebook page' />
            );
        case "instagram":
            return (
                <AiFillInstagram href={href} aria-label='Visit my Instagram' />
            );
        case "twitter":
            return <BsTwitterX href={href} aria-label='Visit my Twitter(X)' />;
        case "linkedin":
            return (
                <AiFillLinkedin
                    href={href}
                    aria-label='Visit my LinkedIn profile'
                />
            );
        case "git":
            return <BsGithub href={href} aria-label='Visit my Github repos' />;
        default:
            return <BsFacebook />;
    }
};

const MySocialHandles = () => {
    const themeContext = useThemeContext();

    return (
        <MySocialHandleContainer>
            <MySocialHandleHeading>
                {homeText.socialHandle}
            </MySocialHandleHeading>
            <MySocialHandleIcons>
                {socialHandles.map((smedia) => (
                    <ShapeCircle
                        key={smedia.name}
                        color={themeContext.activeTheme.primary}
                        diameter='50'
                        href={smedia.link}
                        icon={
                            <MySocialIcon
                                name={smedia.name}
                                href={smedia.link}
                            />
                        }
                    />
                ))}
            </MySocialHandleIcons>
        </MySocialHandleContainer>
    );
};

export default MySocialHandles;
