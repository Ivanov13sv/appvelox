import { FC } from 'react';
import { ListItem, ListItemProps } from 'components/ListItem';
import * as S from './style';

interface DropdownItemProps extends ListItemProps {
    switchMenu?: string;
    setMenuOpen?: (menu: string) => void;
    children?: JSX.Element;
    onClick?: () => void;
}

export const DropdownItem: FC<DropdownItemProps> = ({
    leftIcon,
    text,
    rightIcon,
    switchMenu,
    onClick,
    setMenuOpen,
    children,
}) => {
    const changeMenu = () => {
        if (switchMenu && setMenuOpen) {
            setMenuOpen(switchMenu);
        }
    };

    const onClickHandler = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <S.DropdownItem onClick={switchMenu ? changeMenu : onClickHandler}>
            <ListItem leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
            {children}
        </S.DropdownItem>
    );
};
