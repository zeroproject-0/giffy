const apiKey = 'g0zRSMutz4UMy3x7nOPDOX3mzykPTFyB';

export default function getGifs({ keyword }) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

	return fetch(apiURL)
		.then((response) => response.json())
		.then((d) => {
			const { data } = d;
			const gifs = data.map((image) => {
				const { url } = image.images.downsized_medium;
				const { title, id } = image;
				return { title, id, url };
			});
			return gifs;
		});
}
