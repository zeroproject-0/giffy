import { API_KEY, API_URL } from './settings';

export default function getGifs({ keyword, limit = 5, page = 0 } = {}) {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit + 1
	}&rating=g&lang=en`;

	return fetch(apiURL)
		.then((response) => response.json())
		.then((d) => {
			const { data } = d;
			const gifs = data.map((image, index) => {
				const { url } = image.images.downsized_medium;
				const { title, id } = image;
				return { title, id: id + index, url };
			});
			return gifs;
		});
}
