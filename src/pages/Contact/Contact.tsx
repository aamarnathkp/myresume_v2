import React from "react";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";

// Import themed contact SVGs
import greenContact from "../../assets/images/green/contact.svg";
import yellowContact from "../../assets/images/yellow/contact.svg";
import redContact from "../../assets/images/red/contact.svg";

const getContactSvg = (themeNum: number) => {
    if (themeNum === 0) return greenContact;
    if (themeNum === 1) return yellowContact;
    return redContact;
};

const ContactWrapper = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    height: 100%;
    min-height: auto;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 2.5rem;
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
`;

const EmailLink = styled.a<{ $bgColor: string }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.95rem 2.2rem;
    background: ${(props) => props.$bgColor};
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 700;
    border-radius: 2.5rem;
    text-decoration: none;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;

    svg {
        font-size: 1.3rem;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.22);
        filter: brightness(1.08);
    }
`;

const Contact = () => {
    const themeContext = useThemeContext();

    return (
        <PageContainer $activeTheme={themeContext.activeTheme?.lighter} id='contact'>
            <ContactWrapper>
                <ContentColumn>
                    <SectionHeader $themeColor={themeContext.activeTheme?.primary}>
                        Contact
                    </SectionHeader>
                    <MainHeadline>Get In Touch</MainHeadline>
                    <DescriptionParagraph>
                        If you have any questions, want to work together, or just want to say hi, feel free to drop me an email! I will get back to you as soon as possible.
                    </DescriptionParagraph>
                    <EmailLink
                        href="mailto:aamarnathkp@gmail.com"
                        $bgColor={themeContext.activeTheme?.primary}
                    >
                        <FaEnvelope />
                        aamarnathkp@gmail.com
                    </EmailLink>
                </ContentColumn>
                <ImageColumn>
                    <img
                        src={getContactSvg(themeContext.currentThemeNumber)}
                        alt='contact-illustration'
                    />
                </ImageColumn>
            </ContactWrapper>
        </PageContainer>
    );
};

export default Contact;
