import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import getGifs from '../../services/getGifs';
import Gif from '../Gif';
import { Link } from 'wouter';

export default function ListOfGifs({ keyword }) {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(true);

	// El useEffect solo se ejecuta cuando se renderiza el componente
	// para que solo se ejecute una vez se le debe pasar un array vacío como segundo parámetro
	// el segundo parámetro es para introducir dependencias que serviran para que el efecto se ejecute cuando estas cambien
	useEffect(() => {
		getGifs({
			keyword,
		}).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
		});
	}, [keyword]);

	if (loading) return <h1>Cargando</h1>;

	return (
		<div className={styles.list}>
			{gifs.map(({ title, url, id }) => (
				<Link to={`/gif/${id}`} key={id}>
					<Gif title={title} url={url} id={id} />
				</Link>
			))}
		</div>
	);
}
