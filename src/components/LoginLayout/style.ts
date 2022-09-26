import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
`;

export const LoginBody = styled.div`
    width: 782px;
    padding: 0 40px 30px 40px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 60%;
`;

interface ThemeProps {
    active: boolean;
}

export const ThemesRow = styled.div`
    display: none;
    @media ${({ theme }) => theme.media.desktopPlus} {
        background-color: ${({ theme }) => theme.color.main};
        display: flex;
        width: 584px;
        position: relative;
        overflow: hidden;
    }
`;

export const Theme = styled.div<ThemeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: 0.3s ease;
    transform: translate(100%, -50%);

    h3 {
        font-weight: 400;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        color: #ffffff;
    }

    > img {
        padding: 55px 5px;
    }

    > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
    }
    ${(props) =>
        props.active &&
        css`
            transform: translate(-50%, -50%);
        `}
`;

export const LoginHeader = styled.header`
    height: 79px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        pointer-events: none;
    }
    border-bottom: 1px solid #ebe7ff;

    > a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.text};
    }
    @media ${({ theme }) => theme.media.tablet} {
        justify-content: space-between;
    }
`;

export const VisuallyImpaired = styled.a`
    display: none;
    @media ${({ theme }) => theme.media.tablet} {
        position: relative;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 10px 0;

        svg {
            margin-right: 14px;
        }
        color: ${({ theme }) => theme.color.accent};
        &::before {
            content: '';
            position: absolute;
            background-color: ${({ theme }) => theme.color.accent};
            top: 0;
            right: -100%;
            width: 100%;
            height: 1px;
            transition: right 0.3s ease;
        }

        &::after {
            content: '';
            position: absolute;
            background-color: ${({ theme }) => theme.color.accent};
            bottom: 0;
            left: -100%;
            width: 100%;
            height: 1px;
            transition: left 0.3s ease;
        }

        &:hover {
            &::before {
                right: 0;
            }
            &::after {
                left: 0;
            }
        }
    }
`;

export const LoginMain = styled.main`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginForm = styled.section`
    margin: 0 auto;
    display: flex;

    flex-direction: column;
    h1 {
        font-weight: 300;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        margin-bottom: 15px;
    }

    p {
        text-align: center;
        margin-bottom: 34px;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        a {
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
            text-decoration-line: underline;
            color: #50caff;
            &:hover {
                color: #0088ff;
            }

            &:focus {
                color: #001eff;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    input {
        margin-bottom: 20px;
    }
    @media ${({ theme }) => theme.media.tablet} {
        width: 347px;
    }
`;

export const LoginFooter = styled.footer`
    display: none;
    @media ${({ theme }) => theme.media.desktop} {
        display: block;
        padding: 10px 0;
    }
`;
