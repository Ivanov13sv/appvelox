import React from 'react';
import styled, { css } from 'styled-components';
import * as S from 'components/UI/DoctorCard/style';
import { Skeleton } from '../SkeletonElement/style';
import { SkeletonElement } from '../SkeletonElement';
import { Shimmer } from '../Shimmer';

export const SkeletonDoctorCard = () => {
	return (
		<S.Card>
			<S.Wrapper>
				<Avatar type="avatar" />
				<SkeletonElement type="title" />
				<SkeletonElement type="title" />
				<SkeletonElement type="text" />
				<SkeletonElement type="text" />
				<SkeletonElement type="text" />
				<SkeletonElement type="title" />
			</S.Wrapper>
			<Shimmer />
		</S.Card>
	);
};

const Avatar = styled(Skeleton)`
	${props =>
		props.type === 'avatar' &&
		css`
			width: 100px;
			height: 100px;
		`}
`;
