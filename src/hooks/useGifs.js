import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';

const useGifs = ({ keyword } = { keyword: null }) => {
	const [loading, setLoading] = useState(true);
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		setLoading(true);

		const keywordToUse =
			keyword || localStorage.getItem('lastKeyword') || 'coding';

		getGifs({
			keyword: keywordToUse,
		}).then((gifs) => {
			setGifs(gifs);
			localStorage.setItem('lastKeyword', keywordToUse);
			setLoading(false);
		});
	}, [keyword]);

	return { loading, gifs };
};

export default useGifs;
