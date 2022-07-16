import styled, { css } from 'styled-components';
import { ISkeletonElement } from './index';

export const Skeleton = styled.div<ISkeletonElement>`
	background-color: #ddd;
	border-radius: 4px;
    margin-bottom: 5px;
	${props =>
		props.type === 'text' &&
		css`
            
			width: 100%;
			height: 12px;
		`}
	${props =>
		props.type === 'avatar' &&
		css`
			width: 60px;
			height: 60px;
			border-radius: 50%;
		`}
    ${props =>
		props.type === 'title' &&
		css`
        margin-bottom: 15px;
			width: 50%;
			height: 20px;
		`}
    ${props =>
		props.type === 'thumbnail' &&
		css`
			width: 100px;
			height: 100px;
		`}
`;
