import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';

const SEARCHS = ['rick', 'morty', 'javascript', 'rust'];

const Home = () => {
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = (e) => {
		e.preventDefault();
		pushLocation('/search/' + keyword);
	};

	const handleChange = (e) => {
		setKeyword(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={keyword} onChange={handleChange} />
			</form>

			<h2>Última búsqueda</h2>
			<ListOfGifs gifs={gifs} />
			{/* <ul>
				{SEARCHS.map((search) => (
					<li key={search}>
						<Link to={`/search/${search}`}>{search}</Link>
					</li>
				))} 
        </ul>*/}
		</>
	);
};

export default Home;
