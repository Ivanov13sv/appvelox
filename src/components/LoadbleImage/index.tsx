import { useOnScreen } from 'hooks/useOnScreen';
import { useState, useRef, useEffect, FC } from 'react';
// import { useOnScreen } from '../../hooks/useOnScreen';
import { Wrapper, Image } from './style';

interface ILoadableImage {
	src: string;
	alt?: string;
	onLoad?: () => void;
}

export const LoadableImage = (props: ILoadableImage) => {
	const { src, alt = '', onLoad = () => {} } = props;
	const [isLoaded, setIsLoaded] = useState(false);
	const imageRef = useRef<HTMLImageElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isVisible = useOnScreen(containerRef);


	useEffect(() => {
		if (!isVisible) return;

		if (imageRef.current) {
			imageRef.current.onload = () => {
				setIsLoaded(true);
				onLoad();
			};
		}

	}, [isVisible, onLoad]);

	return (
		<Wrapper ref={containerRef} isLoaded={false}>
			{((isVisible || isLoaded ) && src) && <Image isLoaded={false} ref={imageRef} src={src} alt={alt} />}
		
		</Wrapper>
	);
};
