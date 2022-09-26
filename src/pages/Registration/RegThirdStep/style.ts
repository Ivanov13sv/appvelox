import styled from 'styled-components';

export const Description = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${({ theme }) => theme.color.text};
`;
