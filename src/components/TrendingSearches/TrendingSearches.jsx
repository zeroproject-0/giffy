import { useState, useEffect } from 'react';
import getTrendingTerms from '@/services/getTrendingTermsServices';
import Category from '@/components/Category';

const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);
	useEffect(() => {
		getTrendingTerms().then((r) => setTrends(r));
	}, []);

	return <Category title={`Tendencias`} listCategories={trends} />;
};

export default TrendingSearches;
