import React, { useState } from "react";
import styled from "styled-components";
import { FaBriefcase, FaChevronDown } from "react-icons/fa";
import { useThemeContext } from "../../providers/ThemeContextProvider";
import { PageContainer } from "../../style/commonElements";

const experienceData = [
    {
        role: "Senior Software Engineer",
        company: "Cognizant",
        duration: "Feb 14 2022 - Present",
        projectName: "Frontend Development",
        description: "Working as a ReactJS frontend developer, designing and implementing responsive user interfaces, and ensuring high-quality application delivery.",
        skills: ["REACT", "JAVASCRIPT", "Playwright", "NextJS", "NodeJS"]
    },
    {
        role: "Software Engineer",
        company: "Netstratum",
        duration: "Jan 2018 - Feb 2022",
        projectName: "Contact Center Services (CCS)",
        description: "CCS is a Cloud-based Call Centre Service. Implemented queue call handling, VRQ, conditional routing, extension voice recording, scheduled reporting, and built a live dashboard to track real-time agent events.",
        skills: ["erlang", "react", "javascript", "jenkins", "git", "nginx"]
    },
    {
        role: "Software Engineer",
        company: "Netstratum",
        duration: "Jan 2018 - Apr 2018",
        projectName: "Mayship",
        description: "A repair contract project management system tracking progress and employee status. Developed supervisor approvals, project timelines, and scheduled report delivery with Web and iOS interfaces.",
        skills: ["erlang", "git", "nginx"]
    },
    {
        role: "Associate Software Engineer",
        company: "Netstratum",
        duration: "Apr 2017 - Dec 2017",
        projectName: "Voifinity",
        description: "A cloud-based business telephony and contact center solution for workforce collaboration, customer service, and multi-location business operations.",
        skills: ["erlang", "git", "nginx", "sip"]
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

const TimelineContainer = styled.div<{ $lineColor: string }>`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        position: absolute;
        width: 4px;
        background-color: ${(props) => props.$lineColor};
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -2px;

        @media (max-width: 768px) {
            left: 1.5rem;
        }
    }
`;

const TimelineItem = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 50%;
    padding: 0.5rem 2rem;
    box-sizing: border-box;

    &:nth-child(even) {
        align-self: flex-end;
        justify-content: flex-start;
        left: 0;
    }

    &:nth-child(odd) {
        align-self: flex-start;
        left: 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        left: 0 !important;
        align-self: flex-start !important;
        justify-content: flex-start;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 3rem;
        padding-right: 0;
        margin-bottom: 1.25rem;
    }
`;

const TimelineIcon = styled.div<{ $bgColor: string }>`
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${(props) => props.$bgColor};
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 2;
    top: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);

    /* Placement on line */
    left: 100%;
    transform: translateX(-50%);

    .timeline-item-even & {
        left: 0;
    }

    ${TimelineItem}:nth-child(even) & {
        left: 0;
    }

    ${TimelineItem}:nth-child(odd) & {
        left: 100%;
    }

    @media (max-width: 768px) {
        left: 1.5rem !important;
        transform: translateX(-50%) scale(0.85);
        top: 0.5rem;
    }
`;

const TimelineCard = styled.div`
    background: #ffffff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 420px;
    box-sizing: border-box;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 1.5rem;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExpandIcon = styled.div<{ $expanded: boolean; $color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.$color};
    font-size: 1.2rem;
    transform: rotate(${(props) => (props.$expanded ? "180deg" : "0deg")});
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    margin-left: 1rem;
    flex-shrink: 0;
`;

const CollapsibleContent = styled.div<{ $expanded: boolean }>`
    max-height: ${(props) => (props.$expanded ? "500px" : "0px")};
    overflow: hidden;
    opacity: ${(props) => (props.$expanded ? 1 : 0)};
    transition: max-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
                opacity 0.3s ease-in-out,
                margin-top 0.3s ease;
    margin-top: ${(props) => (props.$expanded ? "1rem" : "0px")};
`;

const CompanyName = styled.h3<{ $color: string }>`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.$color};
    margin: 0 0 0.25rem 0;
`;

const RoleText = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
`;

const ProjectName = styled.h5`
    font-size: 0.95rem;
    font-weight: 700;
    color: #7f8c8d;
    margin: 0 0 0.75rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
`;

const DurationText = styled.span`
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #95a5a6;
    margin-bottom: 1rem;
`;

const ProjectDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.5;
    color: #5d6d7e;
    margin-bottom: 1.5rem;
`;

const SkillTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const SkillTag = styled.span<{ $bgColor: string; $textColor: string }>`
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.$textColor};
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.35rem 0.8rem;
    border-radius: 1rem;
    text-transform: uppercase;
`;

const Experience = () => {
    const themeContext = useThemeContext();
    const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

    return (
        <PageContainer id='experience'>
            <SectionHeader $themeColor={themeContext.activeTheme?.primary}>
                Career Journey
            </SectionHeader>
            <PageTitle>Work Experience</PageTitle>

            <TimelineContainer $lineColor={themeContext.activeTheme?.light}>
                {experienceData.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineIcon $bgColor={themeContext.activeTheme?.primary}>
                            <FaBriefcase />
                        </TimelineIcon>
                        <TimelineCard
                            onClick={() => setExpandedIdx(expandedIdx === index ? null : index)}
                        >
                            <CardHeader>
                                <HeaderLeft>
                                    <CompanyName $color={themeContext.activeTheme?.primary}>
                                        {exp.company}
                                    </CompanyName>
                                    <RoleText>{exp.role}</RoleText>
                                    <DurationText>{exp.duration}</DurationText>
                                </HeaderLeft>
                                <ExpandIcon
                                    $expanded={expandedIdx === index}
                                    $color={themeContext.activeTheme?.primary}
                                >
                                    <FaChevronDown />
                                </ExpandIcon>
                            </CardHeader>
                            <CollapsibleContent $expanded={expandedIdx === index}>
                                <ProjectName>{exp.projectName}</ProjectName>
                                <ProjectDesc>{exp.description}</ProjectDesc>
                                <SkillTagsContainer>
                                    {exp.skills.map((skill) => (
                                        <SkillTag
                                            key={skill}
                                            $bgColor={themeContext.activeTheme?.lighter}
                                            $textColor={themeContext.activeTheme?.dark}
                                        >
                                            {skill}
                                        </SkillTag>
                                    ))}
                                </SkillTagsContainer>
                            </CollapsibleContent>
                        </TimelineCard>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </PageContainer>
    );
};

export default Experience;
