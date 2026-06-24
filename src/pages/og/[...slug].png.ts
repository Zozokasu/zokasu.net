import type { APIContext } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { getOgImage } from '../../components/OgImage';

type OgEntry = CollectionEntry<'blog'> | CollectionEntry<'vrsns'>;

export const prerender = true;

export async function getStaticPaths() {
	const [blogPosts, vrsnsPosts] = await Promise.all([getCollection('blog'), getCollection('vrsns')]);
	const posts: OgEntry[] = [...blogPosts, ...vrsnsPosts];

	return posts.map((post) => ({
		params: { slug: `${post.collection}/${post.id}` },
		props: { post },
	}));
}

export async function GET({ props }: APIContext) {
	const post = props.post as OgEntry;
	const body = await getOgImage({
		title: post.data.title,
		heroImage: post.data.heroImage,
	});

	return new Response(body, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
