import React, { FC } from 'react';
import styled from 'styled-components';

interface ISection {
	children: JSX.Element;
}

export const Section: FC<ISection> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.section`
	padding: 3px 20px;
`;
