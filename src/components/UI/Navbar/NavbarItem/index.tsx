import { FC } from 'react';
import { IconButton } from 'components/UI/IconButton';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import * as S from './style';

interface NavbarItemProps {
    icon: JSX.Element;
    children?: JSX.Element;
    newAction?: boolean;

}

export const NavbarItem: FC<NavbarItemProps> = ({ icon, children, newAction = false }) => {
    const { isOpen } = useAppSelector((state) => state.dropdown);
    const { openDropdown } = useActions();

    const openHandler = () => {
        if (children) {
            openDropdown();
        }
    };

    return (
        <S.NavbarItem newAction={newAction}>
            <IconButton icon={icon} onClick={openHandler} />
            {isOpen && children}
        </S.NavbarItem>
    );
};
