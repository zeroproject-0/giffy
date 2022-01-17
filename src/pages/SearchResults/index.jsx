import ListOfGifs from '@/components/ListOfGifs';
import useGifs from '@/hooks/useGifs';

const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, loadingPage, gifs, setPage } = useGifs({ keyword });

	const handleNextPage = () => {
		setPage((page) => page + 1);
	};

	return (
		<>
			<h1>Results: {decodeURI(keyword)}</h1>
			{loading ? <h4>Buscando...</h4> : <ListOfGifs gifs={gifs} />}
			<button onClick={handleNextPage}>Get Next Page</button>
		</>
	);
};

export default SearchResults;
