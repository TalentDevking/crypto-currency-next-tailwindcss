import Image from 'next/image';
import Layout from '../components/Layout';

export default function Currency({ res }) {
  console.log('res: ', res);
	return (
		<Layout page={'Page ' + res.name}>
			<div className="relative hover:shadow-md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
				<div className="text-center">
					<Image
						src={res.logo_url}
						alt={res.name}
						className="mx-auto mb-6"
            width="80"
						height="80"
					/>
				</div>
				<h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
				<p>{res.description}</p>
				<p className="pt-5 text-blue-500">
					<a target="_blank" rel="noreferrer" href={res.reddit_url}>
						{res.reddit_url}
					</a>
				</p>
			</div>
		</Layout>
	);
}

// SSR renders on-demand
export async function getServerSideProps({ query }) {
	const apiKey = process.env.API_KEY;
	try {
		const res = await fetch(
			`https://api.nomics.com/v1/currencies?key=${apiKey}&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
		).then((res) => res.json());
		return {
			props: { res: res[0] },
		};
	} catch (err) {
		console.error(err);
	}
}
