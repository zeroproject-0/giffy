import { useContext, useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = { keyword: null }) => {
	const [loading, setLoading] = useState(true);
	const [loadingPage, setLoadingPage] = useState(true);
	const [page, setPage] = useState(INITIAL_PAGE);
	const { gifs, setGifs } = useContext(GifsContext);

	const keywordToUse =
		keyword || localStorage.getItem('lastKeyword') || 'coding';

	useEffect(() => {
		setLoading(true);

		getGifs({
			keyword: keywordToUse,
		}).then((gifs) => {
			setGifs(gifs);
			localStorage.setItem('lastKeyword', keywordToUse);
			setLoading(false);
		});
	}, [keywordToUse, setGifs]);

	useEffect(() => {
		if (page === INITIAL_PAGE) return;
		setLoadingPage(true);
		getGifs({ keyword: keywordToUse, page }).then((gifs) => {
			setGifs((prevGifs) => prevGifs.concat(gifs));
			setLoadingPage(false);
		});
	}, [keywordToUse, page]);

	return { loading, loadingPage, gifs, setPage };
};

export default useGifs;
