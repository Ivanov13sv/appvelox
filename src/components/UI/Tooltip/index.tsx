import { FC, MouseEvent, useRef, useState } from 'react';
import styled from 'styled-components';

interface ITooltip {
    children: JSX.Element;
    content: JSX.Element;
}

export const Tooltip: FC<ITooltip> = ({ children, content }) => {
    const [visibleContent, setVisibleContent] = useState(false);

    const showContent = () => {
        setVisibleContent(true);
    };

    const hideContent = () => {
        setTimeout(() => {
            setVisibleContent(false);
        }, 300);
    };

    return (
        <Wrapper onMouseEnter={showContent} onMouseLeave={hideContent}>
            {visibleContent && (
                <ContentBlock onMouseEnter={showContent}>
                    {content}
                </ContentBlock>
            )}
            {children}
        </Wrapper>
    );
};

const ContentBlock = styled.div`
    position: absolute;
    /* top: 30px; */
    /* right: -50%; */
    transform: translate(-50%, 29px);
    z-index: 5;
    &::after {
        position: absolute;
        content: '';
        width: 60px;
        height: 15px;
        transform: translate(-20px, -15px);
        top: 0;
        left: 50%;
    }
`;

const Wrapper = styled.div`
    position: relative;
`;
