import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';


const shake = keyframes`
0%{
    transform: rotate(15deg);
}

50%{
    transform: rotate(-15deg);
}

100%{
    transform: rotate(0);
}
`

export const Card = styled.article`
	width: 200px;
	height: 300px;
	background: white;
	position: relative;
	box-shadow: 0px 0px 5px #abaaaf;
	border-radius: 5px;
	overflow: hidden;
`;

export const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
    min-height: 100%;

`;

export const Name = styled.h3`
	font-weight: 400;
	font-size: 20px;
`;

export const Speciality = styled.span`
	color: #abaaaf;
	font-size: 14px;
`;

export const Description = styled.p`
    padding-top: 10px;
	font-size: 14px;
    text-align: content;
    flex: 1 1 auto;
`;


export const Details = styled(NavLink)`
color: ${({theme}) => theme.color.accent};
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
gap: 10px;
transition: transform 1s ease;
cursor: pointer;
svg{
    color: ${({theme}) => theme.color.accent};

}

&:hover{
	color: ${({theme}) => theme.color.darkenAccent};
    svg{
        animation: ${shake} .5s ease-in-out;
		color: ${({theme}) => theme.color.darkenAccent};
    }
}
`