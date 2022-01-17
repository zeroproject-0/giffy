import { useState, useEffect, useRef } from 'react';

const useNearScreen = ({ distance = '100px' } = {}) => {
	let observer;
	const [isNearScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef();

	useEffect(() => {
		const onIntersection = (entries, observer) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setIsNearScreen(true);
				observer.disconnect();
			}
		};

		Promise.resolve(
			typeof IntersectionObserver !== 'undefined'
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onIntersection, {
				rootMargin: distance,
			});
			observer.observe(fromRef.current);
		});

		return () => observer && observer.disconnect();
	});
	return { isNearScreen, fromRef };
};

export default useNearScreen;
