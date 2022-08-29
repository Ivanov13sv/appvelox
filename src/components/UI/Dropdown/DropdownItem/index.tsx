import { FC } from 'react';
import { ListItem, ListItemProps } from 'components/ListItem';
import { useActions } from 'hooks/useActions';
import * as S from './style';

interface DropdownItemProps extends ListItemProps {
    goTo?: string;
    setMenuOpen?: (menu: string) => void;
    callback?: () => void;
}

export const DropdownItem: FC<DropdownItemProps> = ({
    leftIcon,
    text,
    rightIcon,
    goTo,
    callback,
    setMenuOpen,
}) => {
    const { closeDropdown } = useActions();
    const changeMenu = () => {
        if (goTo && setMenuOpen) {
            setMenuOpen(goTo);
        }
    };

    const additionalFn = () => {
        if (callback) {
            callback();
            closeDropdown();
        }
    };

    return (
        <S.DropdownItem onClick={goTo ? changeMenu : additionalFn}>
            <ListItem leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
        </S.DropdownItem>
    );
};
