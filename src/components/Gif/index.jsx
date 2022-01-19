import styles from './styles.module.css';

import { Link } from 'wouter';
import { memo } from 'react';

const Gif = ({ title, id, url }) => {
	return (
		<Link to={`/gif/${id}`}>
			<figure className={styles.link}>
				<img src={url} alt={title} />
				<figcaption className={styles.caption}>{title}</figcaption>
			</figure>
		</Link>
	);
};

export default memo(
	Gif,
	(prevProps, nextProps) => prevProps.id === nextProps.id
);
