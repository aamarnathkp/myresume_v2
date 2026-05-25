import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../providers/ThemeContextProvider";
import { themeColors } from "../../constants/colors";

const FloatingContainer = styled.div<{ $visible: boolean; $activeThemeColor: string }>`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
    
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 2rem;
    
    /* Glassmorphism styling */
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    /* Animation & visibility transitions */
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: ${(props) => (props.$visible ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.95)")};
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        background: rgba(255, 255, 255, 0.65);
        border-color: ${(props) => props.$activeThemeColor}40;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(0) scale(1.02);
    }

    @media (max-width: 768px) {
        top: 1rem;
        right: 1rem;
        padding: 0.4rem 0.6rem;
        gap: 0.6rem;
    }
`;

const FloatingBubble = styled.button<{ $color: string; $active: boolean }>`
    width: ${(props) => (props.$active ? "1.15rem" : "0.85rem")};
    height: ${(props) => (props.$active ? "1.15rem" : "0.85rem")};
    border-radius: 50%;
    background-color: ${(props) => props.$color};
    border: 2px solid ${(props) => (props.$active ? "#ffffff" : "transparent")};
    box-shadow: ${(props) => 
        props.$active 
            ? "0 0 0 1px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.15)" 
            : "0 1px 3px rgba(0,0,0,0.08)"};
    cursor: pointer;
    padding: 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    outline: none;

    &:hover {
        transform: scale(1.25);
        width: 1.15rem;
        height: 1.15rem;
    }
`;

const FloatingThemeSelect = () => {
    const themeContext = useThemeContext();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount in case the page is already scrolled down
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const themeNames = ["Green Theme", "Yellow Theme", "Red Theme"];

    return (
        <FloatingContainer 
            $visible={visible} 
            $activeThemeColor={themeContext.activeTheme.primary}
            role="group"
            aria-label="Theme Selector"
        >
            {themeColors.map((theme, index) => (
                <FloatingBubble
                    key={index}
                    $color={theme.primary}
                    $active={themeContext.currentThemeNumber === index}
                    onClick={() => themeContext.changeTheme(index)}
                    title={`Switch to ${themeNames[index]}`}
                    aria-label={`Switch to ${themeNames[index]}`}
                />
            ))}
        </FloatingContainer>
    );
};

export default FloatingThemeSelect;
