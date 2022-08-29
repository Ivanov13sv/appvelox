import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { BackButton } from './style';

interface ISectionBackButton{
    text: string;
}

export const SectionBackButton:FC<ISectionBackButton> = ({text}) => {
    const navigate = useNavigate();

    return (
        <BackButton onClick={() => navigate(-1)}>
            <BiArrowBack size={20} /> {text}
        </BackButton>
    );
};
