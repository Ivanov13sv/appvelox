import styled from 'styled-components';

export const CardItemIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 100%;
    position: relative;
    z-index: 5;

    svg {
        > * {
            fill: ${({ theme }) => theme.color.secondary};
            stroke: ${({ theme }) => theme.color.secondary};
        }
    }

    @media ${({ theme }) => theme.media.tablet} {
        svg {
            > * {
                fill: #ebe7ff;
                stroke: #ebe7ff;
            }
        }

        &::after {
            transition: all 0.3s ease;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: -100%;
            position: absolute;
            z-index: -1;
            background-color: ${({ theme }) => theme.color.secondary};
        }
    }
`;

export const CardItemBody = styled.div`
    h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        line-height: 33px;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -10px;
            left: 0;
            background: ${({theme}) => theme.color.secondary};
        }
    }

    p {
		padding: 0 10px;
        margin-top: 25px;
        max-width: 300px;
		text-align: center;
    }

    ul {
		width: 300px;
        margin-top: 25px;
		padding: 0 20px;
        li {
            position: relative;
            padding-left: 11px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;

            &::before {
                content: '';
                transition: background-color 0.3s ease;
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: ${({ theme }) => theme.color.secondary};
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    @media ${({ theme }) => theme.media.tablet} {
        padding: 20px 36px;
        font-size: 28px;
        h4 {
			text-align: start;
            &::after {
                background: #ebe7ff;
            }
            &::before {
                content: '';
                background: red;
                position: absolute;
                width: 0;
                height: 2px;
                background-color: ${({ theme }) => theme.color.secondary};
                bottom: -10px;
                right: 0;
                z-index: 5;
                transition: width 0.3s ease;
            }
        }
        p {
            font-size: 18px;
			max-width: 324px;
			text-align: start;
            padding: 0;

        }
        ul {
            padding: 0;
            li {
                position: relative;
                padding-left: 11px;
                font-weight: 400;
                font-size: 18px;
                line-height: 24px;
                &:not(last-child) {
                    margin-bottom: 8px;
                }
                &::before {
                    background: #ebe7ff;
                }
            }
        }
    }
`;

export const ECardItem = styled.article`
    cursor: pointer;
    width: 540px;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease;

    @media ${({ theme }) => theme.media.tablet} {
        height: 183px;
        padding: 0;
        flex-direction: row;
        align-items: flex-start;
        &:hover {
            ${CardItemIcon} {
                svg {
                    > * {
                        fill: white;
                        stroke: white;
                    }
                }
                &::after {
                    left: 0;
                }
            }

            ${CardItemBody} {
                h4 {
                    &::before {
                        width: 100%;
                    }
                }

                li {
                    &::before {
                        background-color: ${({ theme }) =>
                            theme.color.secondary};
                    }
                }
            }
        }
    }
`;
