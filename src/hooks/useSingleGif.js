import getSingleGif from '@/services/getSingleGif';
import { useState, useEffect } from 'react';
import useGifs from './useGifs';

const useSingleGif = ({ id }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const { gifs } = useGifs();
	const gifFromCache = gifs.find((gif) => gif.id === id);

	const [gif, setGif] = useState(gifFromCache);

	useEffect(() => {
		if (!gif) {
			setIsLoading(true);
			getSingleGif({ id })
				.then((gif) => {
					setGif(gif);
					setIsLoading(false);
					setIsError(false);
				})
				.catch(() => {
					setIsError(true);
					setIsLoading(false);
				});
		}
	}, [id, gif]);

	return { gif, isLoading, isError };
};

export default useSingleGif;
