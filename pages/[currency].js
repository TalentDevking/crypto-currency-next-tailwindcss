import Image from 'next/image';
import Layout from '../components/Layout';

export default function Currency({ res }) {
  console.log('res: ', res);
	return (
		<Layout page={'Page ' + res.name}>
			<div className="relative flex-1 p-8 mx-5 bg-blue-100 border border-blue-300 hover:shadow-md sm:rounded-3xl md:w-auto">
				<div className="text-center">
					<Image
						src={res.logo_url}
						alt={res.name}
						className="mx-auto mb-6"
            width="80"
						height="80"
					/>
				</div>
				<h2 className="mb-6 text-2xl tracking-wider uppercase">{res.name}</h2>
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
		);
    const result = await res.json();
    console.table('result', result);
		return {
			props: { res: result[0] },
		};
	} catch (err) {
		console.error(err);
	}
}
