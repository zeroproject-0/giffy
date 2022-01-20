import { API_KEY, API_URL } from './settings';

const fromApiResponseToGif = (response) => {
	const { data } = response;
	const { images, title, id } = data;
	const { url } = images.downsized_medium;
	return { title, id, url };
};

const getSingleGif = ({ id }) => {
	return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
		.then((response) => response.json())
		.then(fromApiResponseToGif);
};

export default getSingleGif;
