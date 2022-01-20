import { useRef, useEffect, useCallback } from 'react';
import ListOfGifs from '@/components/ListOfGifs';
import useGifs from '@/hooks/useGifs';
import useNearScreen from '@/hooks/useNearScreen';
import debounce from 'just-debounce-it';
import Loader from '@/components/Loader';
import { Helmet } from 'react-helmet';

const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, loadingPage, gifs, setPage } = useGifs({ keyword });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: !loading && externalRef,
		once: false,
	});
	const title = `${gifs?.length} Results | ${keyword}` || '';

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
					<Helmet>
						<title>{title}</title>
						<meta name="description" content={'Results of ' + keyword} />
					</Helmet>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	);
};

export default SearchResults;
