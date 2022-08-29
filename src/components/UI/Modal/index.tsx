import { useDisableScroll } from 'hooks/useDisableScroll';
import { FC } from 'react';

import * as S from './style';

interface ModalProps {
    children?: JSX.Element;
    isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ children, isOpen = false }) => {
    useDisableScroll(isOpen);

    return (
        <S.Overlay>
            <S.Modal>{children}</S.Modal>
        </S.Overlay>
    );
};
