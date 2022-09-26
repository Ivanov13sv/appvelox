import styled from 'styled-components';

export const Layout = styled.section`
    padding-top: 10px;
    min-height: 100%;
    position: relative;
    h2 {
        font-weight: 300;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        padding-bottom: 15px;
    }
    > p {
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: ${({ theme }) => theme.color.text};
        span {
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
            text-decoration-line: underline;
            color: #50caff;
        }
        margin-bottom: 10px;
    }

    > form {
        max-width: 347px;
        margin: 0 auto;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        > *:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    @media ${({ theme }) => theme.media.tablet} {
        padding-top: 50px;
        > p {
            margin-bottom: 29px;
        }
        > form {
            padding-top: 30px;
        }
    }
`;
