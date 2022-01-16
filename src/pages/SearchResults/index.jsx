import React from 'react';
import ListOfGifs from '../../components/ListOfGifs';

const SearchResults = ({ params }) => {
	const { keyword } = params;

	return (
		<div>
			<h1>Search Results</h1>
			<ListOfGifs keyword={keyword} />
		</div>
	);
};

export default SearchResults;
