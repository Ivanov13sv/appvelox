import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { FC } from 'react';
import * as S from './style';
import { useLocalStorage } from 'hooks/useLocalStorage';

interface NavbarProps {
    children?: React.ReactNode;
}

export const Navbar: FC<NavbarProps> = ({ children }) => {
    return (
        <S.Navbar>
            <S.NavBody>
                <S.NavList>{children}</S.NavList>
            </S.NavBody>
        </S.Navbar>
    );
};
