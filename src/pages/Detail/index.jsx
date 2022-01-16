import React from 'react';

const Detail = ({ params }) => {
	const { id } = params;
	return <div>{id}</div>;
};

export default Detail;
