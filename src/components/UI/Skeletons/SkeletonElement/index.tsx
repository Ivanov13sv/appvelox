import React, { FC } from 'react';
import { Skeleton } from './style';

export interface ISkeletonElement {
    type: 'text' | 'title' | 'avatar' | 'thumbnail';
}

export const SkeletonElement: FC<ISkeletonElement> = ({ type }) => {
    return <Skeleton type={type} />;
};
