import { FC,  useState } from 'react';
import styled, { css } from 'styled-components';

interface ITooltip {
    children: JSX.Element;
    content?: JSX.Element;
    label?: string;
    hideDelay?: number;
    labelSide?: 'top' | 'bottom' | 'right' | 'left';
}

export const Tooltip: FC<ITooltip> = ({
    children,
    content,
    hideDelay,
    labelSide,
    label = '',
}) => {
    const [visibleContent, setVisibleContent] = useState(false);

    const showContent = () => {
        setVisibleContent(true);
    };

    const hideContent = () => {
        setTimeout(() => {
            setVisibleContent(false);
        }, hideDelay);
    };

    return (
        <Wrapper onMouseEnter={showContent} onMouseLeave={hideContent}>
            {visibleContent && (
                <ContentBlock
                    onMouseEnter={showContent}
                    labelSide={labelSide}
                    text={label}
                    hasContent={content ? true : false}
                >
                    {content ? content : <Text>{label}</Text>}
                </ContentBlock>
            )}
            {children}
        </Wrapper>
    );
};

interface IContentBlock {
    labelSide?: 'top' | 'bottom' | 'right' | 'left';
    text: string;
    hasContent: boolean;
}

const ContentBlock = styled.div<IContentBlock>`
    position: absolute;
    justify-content: center;
    z-index: 5;
    ${(props) =>
        props.text &&
        css`
            pointer-events: none;
            &::after {
                display: none;
            }
        `}
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
        ${(props) =>
        props.hasContent &&
        css`
            &::after {
                position: absolute;
                content: '';
                width: 60px;
                height: 20px;
                transform: translate(-20px, -20px);
                top: 0;
                left: 50%;
            }
        `}
`;

const Wrapper = styled.div`
    position: relative;
`;

const Text = styled.span`
    font-size: 12px;
`;
