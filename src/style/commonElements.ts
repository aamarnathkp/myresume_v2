import styled from "styled-components";

export const PageContainer = styled.div<{ $activeTheme?: string }>`
    width: 100%;
    height: 100vh;
    padding: 1rem 2rem 1rem 2rem;
    background: ${(props) =>
        props.$activeTheme ? props.$activeTheme : "f7f7f7"};
    overflow: hidden;

    /* Tablets and Small Phones */
    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
        padding: 2rem 1rem;
        overflow-y: auto;
    }
`;
