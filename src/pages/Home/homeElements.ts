import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const HomeImageHolder = styled.div<{ $activeTheme?: string }>`
    position: relative;
    z-index: 1;

    width: 29.0625rem;
    height: 30.375rem;
    border-radius: 30.375rem;
    background: ${(props) => props.$activeTheme};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HomeAvathar = styled.div`
    position: relative;
    z-index: 3;
    top: -8rem;
`;

export const NameHeader = styled.h1<{ $activeTheme?: string }>`
    position: relative;
    top: -40.5rem;
    left: -19rem;
    width: 32rem;

    color: ${(props) => props.$activeTheme};
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`;

export const NameGreeting = styled.h3`
    position: relative;
    top: -39.8rem;
    left: -29.5rem;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const DesignationText = styled.h2<{ $activeTheme?: string }>`
    position: relative;
    top: -40rem;
    left: -25.5rem;
    color: ${(props) => props.$activeTheme};

    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const CircleShapeContainer = styled.div`
    position: relative;
    top: -46rem;
    left: -13rem;
`;

// Social Handles

export const MySocialHandleContainer = styled.div`
    position: relative;
    top: -65.5rem;
    right: -23.5rem;

    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem;
`;

export const MySocialHandleHeading = styled.h4`
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const MySocialHandleIcons = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

// Theme Selection

export const MyThemeSelectionContainer = styled.div`
    position: relative;
    top: -39rem;
`;

// Theme bubbles

export const ThemeBubblesContainer = styled.div`
    position: relative;
    top: -35rem;
    /* background: #f7f7f990; */
    width: 100vw;
    height: 35vh;
    z-index: 4;
`;

export const BubbleOne = styled.div`
    position: absolute;
`;

//DesktopImages

export const DesktopContainer = styled.div`
    position: relative;
    top: -28rem;
    left: 22rem;
`;

export const DesktopScreenContainer = styled.span`
    position: relative;
    left: -12rem;
`;

export const ScreenContainer = styled.span`
    position: relative;
    left: 9rem;
    top: -4rem;
    z-index: 5;
`;

export const PlantContainer = styled.span`
    position: relative;
    left: 9.5rem;
    top: -1.2rem;
    z-index: -1;
`;

export const TableContainer = styled.div`
    position: relative;
    top: -7rem;
    left: -6rem;
`;
