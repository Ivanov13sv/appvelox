import { FC } from 'react';
import { ListItem, ListItemProps } from 'components/ListItem';
import * as S from './style';

interface DropdownItemProps extends ListItemProps {
    switchMenu?: string;
    setMenuOpen?: (menu: string) => void;
    goTo?: () => void;
}

export const DropdownItem: FC<DropdownItemProps> = ({
    leftIcon,
    text,
    rightIcon,
    switchMenu,
    goTo,
    setMenuOpen,
}) => {
    const changeMenu = () => {
        if (switchMenu && setMenuOpen) {
            setMenuOpen(switchMenu);
        }
    };

    const changeLocation = () => {
        if (goTo) {
            goTo();
        }
    };

    return (
        <S.DropdownItem onClick={switchMenu ? changeMenu : changeLocation}>
            <ListItem leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
        </S.DropdownItem>
    );
};
