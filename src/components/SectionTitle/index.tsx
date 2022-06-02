import React, { FC } from 'react';
import { Title, Icon } from './style';

interface SectionTitleProps {
	active: boolean;
	title: string;
	icon?: JSX.Element;
	to: string | null;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, active, icon, to }) => {
	return (
		<Title active={active}>
			<Icon to={to ? to : ''}>{icon && icon}</Icon>
			{title}
		</Title>
	);
};
