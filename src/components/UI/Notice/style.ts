import styled, { css, keyframes } from 'styled-components';

interface NoticeProps {
	isActive: boolean;
}

const hide = keyframes`
    0%{
        top: -3%;
    }
    50%{
        top: 0%;
    }
    100%{
        top: -100%;
    }
`;

const show = keyframes`
    0%{
        top: -100%;
    }
    50%{
        top: 0%;
    }
    100%{
        top: -3%;
    }
`;



export const Notice = styled.div<NoticeProps>`
	width: 35vw;
	height: 100px;
	background: #ffe600;
	position: absolute;
	top: -100%;
	left: 50%;
	z-index: 55;
	transform: translateX(-50%);
    transition: all 0.5s cubic-bezier(0.73, 0.13, 0.45, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 15px 15px ;

    p{
        padding-top: 5%;
        font-size: 1.1rem;
    }
	${props =>
		props.isActive &&
		css`
        	transition: all 0.5s cubic-bezier(0.73, 0.13, 0.45, 1);
            animation: ${show} .5s;
			top: -3%;
		`}
`;

