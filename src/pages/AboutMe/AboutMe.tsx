import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";
import GetImage from "../../components/GetImage/GetImage";
import ResumePDF from "../../assets/files/AmarnathKP.pdf";

const AboutWrapper = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    height: 100%;
    min-height: calc(100vh - 8rem);

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 2rem;
        text-align: center;
    }
`;

const ContentColumn = styled.div`
    flex: 1.2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const ImageColumn = styled.div`
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        height: auto;
        max-height: 25rem;
    }
`;

const SectionHeader = styled.h4<{ $themeColor: string }>`
    color: ${(props) => props.$themeColor};
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin-bottom: 1rem;
`;

const MainHeadline = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #1a1a1a;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const DescriptionParagraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4a4a4a;
    margin-bottom: 2rem;
    white-space: pre-line;
`;

const DownloadButton = styled.a<{ $themeColor: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 2rem;
    background: ${(props) => props.$themeColor};
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 2rem;
    text-decoration: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25);
        filter: brightness(1.1);
    }
`;

const AboutMe = () => {
    const themeContext = useThemeContext();

    // Dynamically calculate years of experience
    const startDate = new Date("2017-07-01");
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const experienceYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));

    const headLine = `Self-motivated developer with ${experienceYears}+ years of experience in software development`;

    const description = `Professional involvement in React JS encompasses identifying web-based user interactions, designing and implementing highly responsive user interface components, and deploying React concepts.\n\nProficient in translating designs into high-quality code through JS and React workflows. Also worked as a backend Erlang developer.`;

    return (
        <PageContainer $activeTheme={themeContext.activeTheme?.lighter} id='about'>
            <AboutWrapper>
                <ContentColumn>
                    <SectionHeader $themeColor={themeContext.activeTheme?.primary}>
                        About Me
                    </SectionHeader>
                    <MainHeadline>{headLine}</MainHeadline>
                    <DescriptionParagraph>{description}</DescriptionParagraph>
                    <DownloadButton
                        href={ResumePDF}
                        download="AmarnathKP_Resume.pdf"
                        $themeColor={themeContext.activeTheme?.primary}
                    >
                        Download Resume
                    </DownloadButton>
                </ContentColumn>
                <ImageColumn>
                    <GetImage avathar={true} whichAvathar='aboutMe' />
                </ImageColumn>
            </AboutWrapper>
        </PageContainer>
    );
};

export default AboutMe;
