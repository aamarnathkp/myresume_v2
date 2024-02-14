import styled from "styled-components";

export const ShapeContainer = styled.div<{
    $lowZIndex?: number;
}>`
    position: relative;
    z-index: ${(props) => props.$lowZIndex};
`;

export const ShapeIcon = styled.a<{ $hoverColor?: string }>`
    position: absolute;
    z-index: 3;
    top: 0.6rem;
    left: 0.55rem;
    font-size: 2rem;
    color: #f7f7f7;

    &:hover {
        color: ${(props) => props.$hoverColor};
        transform: scale(1.6);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        z-index: 10;
    }
`;
