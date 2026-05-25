import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    /* Tablets and Small Phones */
    @media (max-width: 768px) {
        height: auto;
        align-items: flex-start;
        padding: 1rem 0;
    }
`;

export const HomeImageHolder = styled.div<{ $activeTheme?: string }>`
    position: relative;
    z-index: 1;

    width: 29.0625rem;
    height: 30.375rem;
    border-radius: 30.375rem;
    background: ${(props) => props.$activeTheme};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transform-origin: center center;

    /* Large Desktops */
    @media (min-width: 1025px) and (max-width: 1200px) {
        transform: scale(0.95);
    }

    /* Laptops/Small Screens */
    @media (min-width: 769px) and (max-width: 1024px) {
        transform: scale(0.8);
    }

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        width: 18rem;
        height: 18rem;
        border-radius: 18rem;
        margin: 3rem auto 0 auto;
        box-shadow: none;
        background: transparent;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        width: 14rem;
        height: 14rem;
        border-radius: 14rem;
        margin: 2rem auto 0 auto;
        box-shadow: none;
        background: transparent;
    }
`;

export const HomeAvathar = styled.div<{ $activeTheme?: string }>`
    position: relative;
    z-index: 3;
    top: -8rem;

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        top: -4rem;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
        background: ${(props) => props.$activeTheme};
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

        img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
    }

    /* Small Phones */
    @media (max-width: 480px) {
        top: -3rem;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        background: ${(props) => props.$activeTheme};
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

        img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
    }
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

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        position: relative;
        top: -7rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 2.6rem;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        position: relative;
        top: -5.5rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 2.0rem;
    }
`;

export const NameGreeting = styled.h3`
    position: relative;
    top: -39.8rem;
    left: -29.5rem;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        position: relative;
        top: -6.5rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        position: relative;
        top: -5rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
    }
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

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        position: relative;
        top: -7rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 1.7rem;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        position: relative;
        top: -5.5rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
    }
`;

export const CircleShapeContainer = styled.div`
    position: relative;
    top: -46rem;
    left: -13rem;

    /* Tablets and Small Phones */
    @media (max-width: 768px) {
        display: none;
    }
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

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        position: relative;
        top: -5rem;
        right: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        position: relative;
        top: -4rem;
        right: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
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

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        position: relative;
        top: -3rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        position: relative;
        top: -2rem;
        display: flex;
        justify-content: center;
        width: 100%;
    }
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
    white-space: nowrap;

    /* Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
        position: absolute;
        top: -8rem;
        left: 8.5rem;
        transform: scale(0.48);
        transform-origin: center center;
    }

    /* Small Phones */
    @media (max-width: 480px) {
        display: none;
    }
`;

export const DesktopScreenContainer = styled.span`
    position: relative;
    left: -12rem;
    white-space: nowrap;
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
