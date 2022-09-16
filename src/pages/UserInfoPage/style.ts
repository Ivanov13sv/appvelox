import styled, { css } from 'styled-components';
import { Section } from 'components/Section';

export const UserInfoSection = styled(Section)`
    padding-bottom: 3rem;
`

export const ProfileImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px #abaaaf;
    position: relative;
    > * {
        width: 100%;
        height: 100%;
    }

    label {
        position: absolute;
        bottom: 20%;
        right: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 0px 0px 5px #abaaaf;
        transition: transform 0.1s ease-in-out;
        background: green;
        input {
            display: none;
        }
        cursor: pointer;
        background: ${({ theme }) => theme.color.bg};
        svg {
            transform: scale(0.8);
            transition: color 0.1s ease-in-out;
            color: #abaaaf;
        }

        &:hover {
            transform: scale(1.03);
            svg {
                color: grey;
            }
        }
    }
    &::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        bottom: 20%;
        left: 0;
        border-radius: 50%;
    }
`;

interface IConfirmButton {
    isSelected: boolean;
}

export const ConfirmButton = styled.button<IConfirmButton>`
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    position: absolute;
    z-index: 10;
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 5px #abaaaf;
    background: white;
    bottom: 20%;
    left: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    svg {
        color: #9b9a9a;
        transform: scale(1.5);
    }
    &:hover {
        transform: scale(1.03);
        svg {
            color: grey;
        }
    }

    ${(props) =>
        props.isSelected &&
        css`
            svg {
                color: #00800082;
                transform: scale(1.5);
            }
            &:hover {
                svg {
                    color: green;
                }
            }
        `}
`;

export const Form = styled.form`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
        font-weight: 300;
        padding-bottom: 5px;
    }
    > :last-child {
        margin-top: 10px;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    flex: 1 1 50%;
    gap: 2rem;
    flex-wrap: wrap;
    @media ${({ theme }) => theme.media.tablet} {
        padding: 2rem;
        max-width: 1000px;
        margin: 0 auto;
        gap: 3rem;
    }
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    h2 {
        font-size: 22px;
        font-weight: 400;
    }
    @media ${({ theme }) => theme.media.tablet} {
        h2 {
            font-size: 26px;
        }
        gap: 2rem;
    }
`;

export const PrivateInfo = styled(InfoBlock)`
    justify-content: flex-start;
`;

export const ModalBody = styled.section`
    width: 100%;
    height: 100%;
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    h2 {
        font-size: 1.4rem;
        text-align: center;
        padding-bottom: 2rem;
    }
`;

export const EmailForm = styled(Form)`
    width: 400px;
    margin: 0 auto;
`;
