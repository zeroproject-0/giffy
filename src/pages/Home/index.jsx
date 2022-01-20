import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import ListOfGifs from '@/components/ListOfGifs';
import TrendingSearches from '@/components/TrendingSearches';
import useGifs from '@/hooks/useGifs';
import Loader from '@/components/Loader';
import SearchForm from '@/components/SearchForm';
import { Helmet } from 'react-helmet';

const Home = () => {
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = useCallback(
		({ keyword }) => {
			pushLocation('/search/' + keyword);
		},
		[pushLocation]
	);

	return (
		<>
			<Helmet>
				<title>Giffy</title>
			</Helmet>
			<SearchForm onSubmit={handleSubmit} />

			<h2>Última búsqueda</h2>
			{loading ? <Loader /> : <ListOfGifs gifs={gifs} />}
			<TrendingSearches />
		</>
	);
};

export default Home;
