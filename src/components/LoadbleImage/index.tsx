import { useState, useRef, useEffect } from 'react';
import { Wrapper, Image } from './style';

interface ILoadableImage {
    src: any;
    alt?: string;
    onLoad?: () => void;
}

export const LoadableImage = (props: ILoadableImage) => {
    const { src, alt = '' } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.onload = () => setIsLoaded(true);
        }
        return () => {
            setIsLoaded(false);
        };
    }, []);

    return (
        <Wrapper ref={containerRef} isLoaded={isLoaded}>
            <Image isLoaded={isLoaded} ref={imageRef} src={src} alt={alt} />
        </Wrapper>
    );
};
