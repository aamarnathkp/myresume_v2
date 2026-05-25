import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";

// Import themed SVGs
import greenHobbie1 from "../../assets/images/green/hobbie1.svg";
import greenHobbie2 from "../../assets/images/green/hobbie2.svg";
import greenHobbie3 from "../../assets/images/green/hobbie3.svg";

import yellowHobbie1 from "../../assets/images/yellow/hobbie1.svg";
import yellowHobbie2 from "../../assets/images/yellow/hobbie2.svg";
import yellowHobbie3 from "../../assets/images/yellow/hobbie3.svg";

import redHobbie1 from "../../assets/images/red/hobbie1.svg";
import redHobbie2 from "../../assets/images/red/hobbie2.svg";
import redHobbie3 from "../../assets/images/red/hobbie3.svg";

// Import photography images
import photo1 from "../../assets/images/hobbies/photography/image1.jpg";
import photo2 from "../../assets/images/hobbies/photography/image2.jpg";
import photo3 from "../../assets/images/hobbies/photography/image3.jpg";
import photo4 from "../../assets/images/hobbies/photography/image4.jpg";

// Import digital art images
import art1 from "../../assets/images/hobbies/art/image1.jpg";
import art2 from "../../assets/images/hobbies/art/image2.jpg";
import art3 from "../../assets/images/hobbies/art/image3.jpg";
import art4 from "../../assets/images/hobbies/art/image4.png";
import art5 from "../../assets/images/hobbies/art/image5.png";
import art6 from "../../assets/images/hobbies/art/image6.jpg";
import art7 from "../../assets/images/hobbies/art/image7.jpg";
import art8 from "../../assets/images/hobbies/art/image8.jpg";

const getHobbySvg = (themeNum: number, hobbyIdx: 1 | 2 | 3) => {
    if (themeNum === 0) {
        if (hobbyIdx === 1) return greenHobbie1;
        if (hobbyIdx === 2) return greenHobbie2;
        return greenHobbie3;
    } else if (themeNum === 1) {
        if (hobbyIdx === 1) return yellowHobbie1;
        if (hobbyIdx === 2) return yellowHobbie2;
        return yellowHobbie3;
    } else {
        if (hobbyIdx === 1) return redHobbie1;
        if (hobbyIdx === 2) return redHobbie2;
        return redHobbie3;
    }
};

const SectionHeader = styled.h4<{ $themeColor: string }>`
    color: ${(props) => props.$themeColor};
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const PageTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    color: #1a1a1a;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
`;

const HobbiesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

const HobbyCard = styled.div<{ $borderColor: string; $hoverColor: string }>`
    background: #ffffff;
    border: 2px solid ${(props) => props.$borderColor};
    border-radius: 1.25rem;
    padding: 2rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    box-sizing: border-box;

    img {
        width: 6.5rem;
        height: 6.5rem;
        object-fit: contain;
        margin-bottom: 1.25rem;
        transition: transform 0.3s ease;
    }

    h3 {
        font-size: 1.35rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 0 0 0.75rem 0;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.45;
        color: #5d6d7e;
        margin: 0;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        border-color: ${(props) => props.$hoverColor};

        img {
            transform: scale(1.08);
        }
    }
`;

/* Custom Modal Image Slider Styles */

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SliderContainer = styled.div`
    position: relative;
    width: 600px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        width: 360px;
        height: 270px;
    }

    @media (max-width: 480px) {
        width: 290px;
        height: 218px;
    }
`;

const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CloseButton = styled.button<{ $color: string }>`
    position: absolute;
    top: -3.5rem;
    right: 0;
    background: transparent;
    border: none;
    color: ${(props) => props.$color};
    font-size: 2.5rem;
    cursor: pointer;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
    }
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.25);
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 0.2s;
    z-index: 10;

    &:hover {
        background: rgba(255, 255, 255, 0.45);
    }

    &.prev {
        left: 1rem;
    }

    &.next {
        right: 1rem;
    }

    @media (max-width: 480px) {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1rem;
    }
`;

const DotsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`;

const Dot = styled.div<{ $active: boolean; $color: string }>`
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: ${(props) => (props.$active ? props.$color : "rgba(255, 255, 255, 0.35)")};
    cursor: pointer;
    transition: background 0.2s;
`;

const Hobbies = () => {
    const themeContext = useThemeContext();
    const [modalState, setModalState] = useState<{ open: boolean; hobby: "photography" | "art" | null }>({
        open: false,
        hobby: null
    });
    const [activeIdx, setActiveIdx] = useState(0);

    const getHobbyImages = () => {
        if (modalState.hobby === "photography") {
            return [photo1, photo2, photo3, photo4];
        }
        return [art1, art2, art3, art4, art5, art6, art7, art8];
    };

    const handleOpenModal = (hobby: "photography" | "art") => {
        setModalState({ open: true, hobby });
        setActiveIdx(0);
    };

    const handleCloseModal = () => {
        setModalState({ open: false, hobby: null });
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        const images = getHobbyImages();
        setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        const images = getHobbyImages();
        setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const images = modalState.open ? getHobbyImages() : [];

    return (
        <PageContainer id='hobbies'>
            <SectionHeader $themeColor={themeContext.activeTheme?.primary}>
                Life & Interest
            </SectionHeader>
            <PageTitle>My Hobbies</PageTitle>

            <HobbiesWrapper>
                <HobbyCard
                    onClick={() => handleOpenModal("photography")}
                    $borderColor={themeContext.activeTheme?.light}
                    $hoverColor={themeContext.activeTheme?.primary}
                >
                    <img
                        src={getHobbySvg(themeContext.currentThemeNumber, 1)}
                        alt='photography'
                    />
                    <h3>Photography</h3>
                    <p>
                        Like to click moments and cherish memories, also interested in Fashion, Pets and Portrait photography
                    </p>
                </HobbyCard>

                <HobbyCard
                    onClick={() => handleOpenModal("art")}
                    $borderColor={themeContext.activeTheme?.light}
                    $hoverColor={themeContext.activeTheme?.primary}
                >
                    <img
                        src={getHobbySvg(themeContext.currentThemeNumber, 2)}
                        alt='digital-art'
                    />
                    <h3>Digital Art</h3>
                    <p>
                        Likes to create portraits and digital painting using procreate
                    </p>
                </HobbyCard>

                <HobbyCard
                    $borderColor={themeContext.activeTheme?.light}
                    $hoverColor={themeContext.activeTheme?.primary}
                    style={{ cursor: "default" }}
                >
                    <img
                        src={getHobbySvg(themeContext.currentThemeNumber, 3)}
                        alt='gaming'
                    />
                    <h3>Gaming</h3>
                    <p>Likes to play games</p>
                </HobbyCard>
            </HobbiesWrapper>

            {modalState.open && (
                <ModalOverlay onClick={handleCloseModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton 
                            onClick={handleCloseModal}
                            $color={themeContext.activeTheme?.primary}
                        >
                            <FaTimes />
                        </CloseButton>
                        <SliderContainer>
                            <NavButton className='prev' onClick={handlePrev}>
                                <FaChevronLeft />
                            </NavButton>
                            <SlideImage src={images[activeIdx]} alt='slide' />
                            <NavButton className='next' onClick={handleNext}>
                                <FaChevronRight />
                            </NavButton>
                        </SliderContainer>
                        <DotsContainer>
                            {images.map((_, idx) => (
                                <Dot
                                    key={idx}
                                    $active={activeIdx === idx}
                                    $color={themeContext.activeTheme?.primary}
                                    onClick={() => setActiveIdx(idx)}
                                />
                            ))}
                        </DotsContainer>
                    </ModalContent>
                </ModalOverlay>
            )}
        </PageContainer>
    );
};

export default Hobbies;
