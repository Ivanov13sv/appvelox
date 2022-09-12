import { FC, useEffect, useState } from 'react';
import { IconButton } from 'components/UI/IconButton';
import * as S from './style';

interface NavbarItemProps {
	icon: JSX.Element;
	children?: JSX.Element;
	newAction?: boolean;
}

export const NavbarItem: FC<NavbarItemProps> = ({ icon, children, newAction = false }) => {
	const [isHovering, setHovering] = useState(false);
	const [showContent, setShowContent] = useState(false);

	const handleStartHovering = () => setHovering(true);
	const handleEndHovering = () => setHovering(false);

	useEffect(() => {
		if (isHovering) {
			setShowContent(true);
			return;
		}

		const timeoutId = setTimeout(() => {
			setShowContent(false);
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [isHovering]);

	return (
		<S.NavbarItem
			newAction={newAction}
			onMouseEnter={handleStartHovering}
			onMouseLeave={handleEndHovering}
		>
			<IconButton icon={icon} />
			{showContent && <S.Content>{children}</S.Content>}
		</S.NavbarItem>
	);
};
