import styles from './styles.module.css';
import Gif from '../Gif';

const ListOfGifs = ({ gifs }) => {
	return (
		<div className={styles.list}>
			{gifs.map(({ title, url, id }) => (
				<Gif key={id} title={title} url={url} id={id} />
			))}
		</div>
	);
};

export default ListOfGifs;
