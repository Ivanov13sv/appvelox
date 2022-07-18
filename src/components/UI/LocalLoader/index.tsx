import React, { FC } from 'react';
import { Loader } from './style';

export interface LocalLoaderProps{
  width?: string;
  height?: string;
}

export const LocalLoader:FC<LocalLoaderProps> = ({width, height}) => {
  return (
    <Loader width={width} height={height}/>
  );
};
