import styles from './styles.module.css';
import Gif from '../Gif';
import { Link } from 'wouter';

export default function ListOfGifs({ gifs }) {
	return (
		<div className={styles.list}>
			{gifs.map(({ title, url, id }) => (
				<div key={id}>
					<Link to={`/gif/${id}`}>
						<Gif title={title} url={url} id={id} />
					</Link>
				</div>
			))}
		</div>
	);
}
