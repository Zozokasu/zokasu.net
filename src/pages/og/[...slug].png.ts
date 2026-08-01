import type { APIContext, ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import ZokasuFullbody from '../../assets/ZokasuFullbody.webp';
import { getOgImage } from '../../components/OgImage';
import { DISPLAY_NAME } from '../../data/profile';

type OgTarget = {
	slug: string;
	title: string;
	heroImage?: ImageMetadata;
};

export const prerender = true;

export async function getStaticPaths() {
	const [blogPosts, vrsnsPosts] = await Promise.all([getCollection('blog'), getCollection('vrsns')]);

	const postTargets: OgTarget[] = [...blogPosts, ...vrsnsPosts].map((post) => ({
		slug: `${post.collection}/${post.id}`,
		title: post.data.title,
		heroImage: post.data.heroImage,
	}));

	const staticTargets: OgTarget[] = [
		{ slug: 'index', title: DISPLAY_NAME, heroImage: ZokasuFullbody },
		{ slug: 'about', title: 'プロフィール', heroImage: ZokasuFullbody },
	];

	return [...postTargets, ...staticTargets].map((target) => ({
		params: { slug: target.slug },
		props: { target },
	}));
}

export async function GET({ props }: APIContext) {
	const target = props.target as OgTarget;
	const body = await getOgImage({
		title: target.title,
		heroImage: target.heroImage,
	});

	return new Response(body, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
}
