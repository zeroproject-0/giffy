import Gif from '@/components/Gif';
import Loader from '@/components/Loader';
import useSingleGif from '@/hooks/useSingleGif';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

const Detail = ({ params }) => {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id });
	const title = gif?.title || '';

	if (isError) return <Redirect to="/404" />;

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Helmet>
						<title>{title}</title>
					</Helmet>
					<Gif {...gif} />
				</>
			)}
		</>
	);
};

export default Detail;
