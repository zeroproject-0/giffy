import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const useGifs = ({ keyword } = { keyword: null }) => {
	const [loading, setLoading] = useState(true);
	const { gifs, setGifs } = useContext(GifsContext);

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
	}, [keyword, setGifs]);

	return { loading, gifs };
};

export default useGifs;
