import { LoadableImage } from 'components/LoadbleImage';
import { FC } from 'react';
import styled from 'styled-components';
import defaultAvatar from 'assets/img/defaultImage.jpg';

interface IAvatar extends IWrapper {
    src: string;
    alt: string;
}

interface IWrapper {
    width?: string;
    height?: string;
    border?: string;
}

export const Avatar: FC<IAvatar> = ({ alt, src, ...props }) => {
    return (
        <Wrapper {...props}>
            <LoadableImage src={src ? src : defaultAvatar} alt={alt} />
        </Wrapper>
    );
};

const Wrapper = styled.div<IWrapper>`
    width: ${(props) => props.width || '45px'};
    height: ${(props) => props.height || '45px'};
    border: ${(props) => props.border || 'none'};
    border-radius: 50%;
    overflow: hidden;
`;
