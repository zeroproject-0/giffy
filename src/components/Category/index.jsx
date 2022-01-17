import { Link } from 'wouter';

const Category = ({ title, listCategories }) => {
	return (
		<div>
			<h1>{title}</h1>
			<ul>
				{listCategories.map((title) => (
					<Link to={`/search/${title}`} key={title}>
						<li key={title}>{title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Category;
