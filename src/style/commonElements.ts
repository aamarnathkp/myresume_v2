import styled from "styled-components";

export const PageContainer = styled.div<{ $activeTheme?: string }>`
    width: 100%;
    min-height: 100vh;
    padding: 4rem 2rem;
    background: ${(props) =>
        props.$activeTheme ? props.$activeTheme : "#f7f7f7"};
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;
