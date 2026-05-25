import React from "react";
import styled from "styled-components";
import {
    FaReact,
    FaErlang,
    FaHtml5,
    FaJenkins,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiMysql,
    SiNginx,
    SiCouchbase,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { MdDialerSip } from "react-icons/md";

import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";

const skillsCategories = [
    {
        title: "Key Skills",
        skills: [
            { name: "React", icon: <FaReact /> },
            { name: "Erlang", icon: <FaErlang /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
            { name: "TypeScript", icon: <SiTypescript /> }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "Mnesia", icon: <DiDatabase /> },
            { name: "CouchDB", icon: <SiCouchbase /> },
            { name: "MySQL", icon: <SiMysql /> }
        ]
    },
    {
        title: "Others",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Jenkins", icon: <FaJenkins /> },
            { name: "Nginx", icon: <SiNginx /> },
            { name: "SIP Protocol", icon: <MdDialerSip /> }
        ]
    }
];

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

const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const CategorySection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const CategoryTitle = styled.h3<{ $themeColor: string }>`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    border-left: 4px solid ${(props) => props.$themeColor};
    padding-left: 0.75rem;
    margin: 0;
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1.5rem;

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 1rem;
    }
`;

const SkillCard = styled.div<{ $borderColor: string; $hoverColor: string }>`
    background: #ffffff;
    border: 2px solid ${(props) => props.$borderColor};
    border-radius: 1rem;
    padding: 1.75rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    box-sizing: border-box;

    svg {
        font-size: 3.2rem;
        color: ${(props) => props.$hoverColor};
        transition: all 0.3s ease-in-out;
    }

    span {
        font-size: 1.05rem;
        font-weight: 600;
        color: #2c3e50;
        transition: all 0.3s ease-in-out;
        text-align: center;
    }

    &:hover {
        background: ${(props) => props.$hoverColor};
        transform: translateY(-5px);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
        border-color: ${(props) => props.$hoverColor};

        svg {
            color: #ffffff;
            transform: scale(1.1);
        }

        span {
            color: #ffffff;
        }
    }
`;

const Skills = () => {
    const themeContext = useThemeContext();

    return (
        <PageContainer $activeTheme={themeContext.activeTheme?.lighter} id='skills'>
            <SectionHeader $themeColor={themeContext.activeTheme?.primary}>
                Tech Stack
            </SectionHeader>
            <PageTitle>My Skills</PageTitle>

            <SkillsWrapper>
                {skillsCategories.map((category, index) => (
                    <CategorySection key={index}>
                        <CategoryTitle $themeColor={themeContext.activeTheme?.primary}>
                            {category.title}
                        </CategoryTitle>
                        <SkillsGrid>
                            {category.skills.map((skill, sIdx) => (
                                <SkillCard
                                    key={sIdx}
                                    $borderColor={themeContext.activeTheme?.light}
                                    $hoverColor={themeContext.activeTheme?.primary}
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </SkillCard>
                            ))}
                        </SkillsGrid>
                    </CategorySection>
                ))}
            </SkillsWrapper>
        </PageContainer>
    );
};

export default Skills;
