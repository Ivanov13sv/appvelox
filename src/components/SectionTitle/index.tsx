import React, { FC } from 'react';
import { Title } from './style';

interface SectionTitleProps {
	active: boolean;
	title: string;
	icon?: JSX.Element;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, active, icon }) => {
	return (
		<Title active={active}>
			{icon && icon}
			{title}
		</Title>
	);
};
