import { FC, useState } from 'react';
import { Text, Wrapper } from './style';

interface ITooltip {
    children: JSX.Element;
    label?: string;
    labelSide?: 'top' | 'bottom' | 'right' | 'left';
}

export const Tooltip: FC<ITooltip> = ({
    children,
    labelSide = 'top',
    label = '',
}) => {
    const [isVisibleTooltip, setVisibleTooltip] = useState(false);

    const handleToggleTooltip = () => setVisibleTooltip(!isVisibleTooltip);

    return (
        <Wrapper
            onMouseEnter={handleToggleTooltip}
            onMouseLeave={handleToggleTooltip}
        >
            {isVisibleTooltip && <Text labelSide={labelSide}>{label}</Text>}
            {children}
        </Wrapper>
    );
};
