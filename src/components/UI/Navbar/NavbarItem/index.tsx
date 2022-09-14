import { FC, useEffect, useState } from 'react';
import { IconButton } from 'components/UI/IconButton';
import * as S from './style';
import { useClickOutside } from 'hooks/useClickOutside';
import useWindowDimensions from 'hooks/useWindowDimensions';

interface NavbarItemProps {
    icon: JSX.Element;
    children?: JSX.Element;
    newAction?: boolean;
}

export const NavbarItem: FC<NavbarItemProps> = ({
    icon,
    children,
    newAction = false,
}) => {
    const [isHovering, setHovering] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const handleStartHovering = () => setHovering(true);
    const handleEndHovering = () => setHovering(false);

    const { height, width } = useWindowDimensions();
    const isDesktopScreen = width > 800;

    const openContent = () => {
        if (!isDesktopScreen) {
            setShowContent(true);
        }
    };

    console.log(isDesktopScreen);

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

    const ref = useClickOutside(() => setShowContent(false));

    return (
        <S.NavbarItem
            onClick={openContent}
            newAction={newAction}
            onMouseEnter={handleStartHovering}
            onMouseLeave={handleEndHovering}
        >
            <IconButton icon={icon} />
            {showContent && <S.Content ref={ref}>{children}</S.Content>}
        </S.NavbarItem>
    );
};
