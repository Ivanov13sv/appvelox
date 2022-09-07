import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { ImCheckmark, ImCross } from 'react-icons/im';
import { useClickOutside } from 'hooks/useClickOutside';
import { LocalLoader } from '../LocalLoader';

interface IConfirmButtons {
    loading: boolean;
    callback: (e: MouseEvent<SVGAElement>) => void;
    closeModal: () => void;
}

export const ConfirmButtons: FC<IConfirmButtons> = ({
    callback,
    loading,
    closeModal,
}) => {
    const ref = useClickOutside(() => {
        closeModal();
    });

    return (
        <ConfirmWrapper ref={ref}>
            {loading ? (
                <LocalLoader width="30px" height="30px" />
            ) : (
                <ConfirmBlock>
                    <ImCheckmark onClick={callback} size={25} color="green" />
                    <ImCross size={20} color="red" onClick={closeModal} />
                </ConfirmBlock>
            )}
        </ConfirmWrapper>
    );
};

const ConfirmWrapper = styled.div`
    display: flex;
    svg {
        transition: transform 0.2s ease;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
`;

const ConfirmBlock = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;
