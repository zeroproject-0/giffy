import { useRef, useEffect, useCallback } from 'react';
import ListOfGifs from '@/components/ListOfGifs';
import useGifs from '@/hooks/useGifs';
import useNearScreen from '@/hooks/useNearScreen';
import debounce from 'just-debounce-it';
import Loader from '@/components/Loader';

const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, loadingPage, gifs, setPage } = useGifs({ keyword });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: !loading && externalRef,
		once: false,
	});

	const debounceHandleNextPage = useCallback(
		debounce(() => {
			setPage((prevPage) => prevPage + 1);
		}, 500),
		[]
	);

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage();
	}, [isNearScreen, debounceHandleNextPage]);

	return (
		<>
			<h1>Results: {decodeURI(keyword)}</h1>
			{loading ? (
				<Loader />
			) : (
				<>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	);
};

export default SearchResults;
