import React, { useState, useEffect } from 'react';

export const useOnScreen = (
	ref: React.MutableRefObject<HTMLElement | null>,
	rootMargin?: string
) => {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		// errors in console without this lane
		const currentRef = ref.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
			{ rootMargin }
		);

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [ref, rootMargin]);

	return isIntersecting;
};
