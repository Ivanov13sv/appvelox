import styled from 'styled-components';

interface ProfilePhotoProps {
    width?: string;
    height?: string;
    border?: string;
}

export const Photo = styled.img<ProfilePhotoProps>`
    border: 2px solid white;
    border-radius: 50%;
    width: ${(props) => props.width || '200px'};
    height: ${(props) => props.height || '200px'};
    border: ${(props) => props.border || '2px solid white'};
`;
