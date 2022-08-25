import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { BackButton } from './style';
export const SectionBackButton = () => {
    const navigate = useNavigate();

    return (
        <BackButton onClick={() => navigate(-1)}>
            <BiArrowBack size={20} /> Назад
        </BackButton>
    );
};
