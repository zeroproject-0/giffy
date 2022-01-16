import React from 'react';
import { Link } from 'wouter';

const SEARCHS = ['rick', 'morty', 'javascript', 'rust'];

const Home = () => {
	return (
		<>
			{SEARCHS.map((search) => (
				<Link key={search} to={`/search/${search}`}>
					{search}
				</Link>
			))}
		</>
	);
};

export default Home;
