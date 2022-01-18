import { useState, useEffect, useRef } from 'react';

const useNearScreen = ({
	distance = '100px',
	externalRef,
	once = true,
} = {}) => {
	let observer;
	const [isNearScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef();

	useEffect(() => {
		const element = externalRef ?? fromRef;

		const onIntersection = (entries, observer) => {
			const el = entries[0];

			if (el.isIntersecting) {
				setIsNearScreen(true);
				once && observer.disconnect();
			} else {
				!once && setIsNearScreen(false);
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

			if (element.current) {
				observer.observe(element.current);
			}
		});

		return () => observer && observer.disconnect();
	});
	return { isNearScreen, fromRef };
};

export default useNearScreen;
