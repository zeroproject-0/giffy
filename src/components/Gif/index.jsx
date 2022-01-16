import styles from './styles.module.css';

import { Link } from 'wouter';

export default function Gif({ title, id, url }) {
	return (
		<Link to={id}>
			<figure className={styles.link}>
				<img src={url} alt={title} />
				<figcaption className={styles.caption}>{title}</figcaption>
			</figure>
		</Link>
	);
}
