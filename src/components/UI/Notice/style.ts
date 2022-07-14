import styled, { css, keyframes } from 'styled-components';
import {NoticeStatus} from 'store/slices/noticeSlice' 

interface NoticeProps {
	isActive: boolean;
    status: NoticeStatus;
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
	background: white;
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
        transform: translateY(12px);
        font-size: 1.1rem;
    }
    ${props => props.status === NoticeStatus.success && css`
    background: #18cc1b;
    
    p{
        color: white;
    }
    `}
    ${props => props.status === NoticeStatus.warning && css`
    background: #ead11c;
    p{
        color: black;
    }
    `}
    ${props => props.status === NoticeStatus.error && css`
    background: #ea721c;
    p{
        color: white;
    }
    `}
	${props =>
		props.isActive &&
		css`
        	transition: all 0.5s cubic-bezier(0.73, 0.13, 0.45, 1);
            animation: ${show} .5s;
			top: -3%;
		`}
    
`;

