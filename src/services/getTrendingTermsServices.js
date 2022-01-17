import { API_KEY, API_URL } from './settings';

const fromApiResponseToList = (apiResponse) => {
	const { data = [] } = apiResponse;
	return data;
};

export default function getTrendingTerms() {
	const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

	return fetch(apiURL)
		.then((response) => response.json())
		.then(fromApiResponseToList);
}
