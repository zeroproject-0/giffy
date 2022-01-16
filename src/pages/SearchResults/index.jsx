import ListOfGifs from '../../components/ListOfGifs';
import React from 'react';
import useGifs from '../../hooks/useGifs';

const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, gifs } = useGifs({ keyword });

	return (
		<>
			<h1>Results</h1>
			{loading ? <h4>Buscando...</h4> : <ListOfGifs gifs={gifs} />}
		</>
	);
};

export default SearchResults;
