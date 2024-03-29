import styled, { css } from 'styled-components';

interface ITextProps {
    labelSide?: 'top' | 'bottom' | 'right' | 'left';
}

export const Wrapper = styled.div`
    position: relative;
`;

export const Text = styled.span<ITextProps>`
    color: ${({ theme }) => theme.color.text};
    display: none;
    @media ${({ theme }) => theme.media.tablet} {
        font-size: 12px;
        position: absolute;
        display: block;
        ${(props) =>
            props.labelSide === 'top' &&
            css`
                transform: translate(-50%, -100%);
                top: 0;
                left: 0;
            `}
        ${(props) =>
            props.labelSide === 'bottom' &&
            css`
                bottom: 0;
                left: 0;
                transform: translate(-50%, 110%);
            `}
    ${(props) =>
            props.labelSide === 'left' &&
            css`
                left: 0;
                top: 0;
                transform: translate(-110%, -50%);
            `}
    ${(props) =>
            props.labelSide === 'right' &&
            css`
                right: 0;
                top: 0;
                transform: translate(110%, -50%);
            `}
    }
`;
