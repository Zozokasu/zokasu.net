import type { ImageMetadata } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const BORDER = 20;
const INNER_W = WIDTH - BORDER * 2;   // 1160
const INNER_H = HEIGHT - BORDER * 2;  // 590
const BANNER_H = Math.round(INNER_H * 0.64); // ~378px (vh 0.18～0.82)

type OgImageOptions = {
	title: string;
	heroImage?: ImageMetadata;
};

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
	'/src/**/*.{avif,gif,jpeg,jpg,png,webp}',
	{ eager: true },
);

let fontCache: Buffer | undefined;
let faceCache: string | undefined;

export async function getOgImage({ title, heroImage }: OgImageOptions) {
	const [font, heroImageDataUri, faceDataUri] = await Promise.all([
		getFontData(),
		getImageDataUri(heroImage),
		getFaceDataUri(),
	]);
	const titleSize = getTitleFontSize(title);

	const svg = await satori(
		<div
			style={{
				display: 'flex',
				width: WIDTH,
				height: HEIGHT,
				padding: BORDER,
				backgroundColor: 'white',
			}}
		>
			{/* Inner content area */}
			<div
				style={{
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					width: INNER_W,
					height: INNER_H,
					overflow: 'hidden',
					backgroundColor: '#1a1a2e',
				}}
			>
				{/* Hero image background */}
				{heroImageDataUri ? (
					<img
						src={heroImageDataUri}
						width={INNER_W}
						height={INNER_H}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: INNER_W,
							height: INNER_H,
						}}
					/>
				) : null}

				{/* Vertically centered title banner */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: INNER_W,
						height: BANNER_H,
						padding: '36px 44px',
						backgroundColor: 'rgba(0, 0, 0, 0.72)',
					}}
				>
					{/* Title */}
					<div
						style={{
							display: 'flex',
							color: 'white',
							fontSize: titleSize,
							fontWeight: 700,
							lineHeight: 1.3,
						}}
					>
						{title}
					</div>

					{/* Face icon + ぞぞかす — just below title, right-aligned */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							gap: 10,
							marginTop: 14,
						}}
					>
						{faceDataUri ? (
							<img
								src={faceDataUri}
								width={32}
								height={32}
								style={{ width: 32, height: 32 }}
							/>
						) : null}
						<div
							style={{
								display: 'flex',
								color: 'rgba(255, 255, 255, 0.8)',
								fontSize: 24,
								fontWeight: 700,
							}}
						>
							ぞぞかす
						</div>
					</div>
				</div>
			</div>
		</div>,
		{
			width: WIDTH,
			height: HEIGHT,
			fonts: [
				{
					name: 'Noto Sans JP',
					data: font,
					weight: 700,
					style: 'normal',
				},
			],
		},
	);

	return await sharp(Buffer.from(svg)).png().toBuffer();
}

async function getImageDataUri(image?: ImageMetadata): Promise<string | undefined> {
	if (!image) return undefined;

	const targetSrc = stripSearchParams(image.src);
	const match = Object.entries(imageModules).find(
		([, module]) => stripSearchParams(module.default.src) === targetSrc,
	);
	if (!match) return undefined;

	const [modulePath] = match;
	const filePath = path.join(process.cwd(), modulePath.replace(/^\//, ''));
	const rawBuffer = await readFile(filePath);
	const jpeg = await sharp(rawBuffer)
		.resize(INNER_W, INNER_H, { fit: 'cover', position: 'centre' })
		.jpeg({ quality: 85 })
		.toBuffer();
	return `data:image/jpeg;base64,${jpeg.toString('base64')}`;
}

async function getFaceDataUri(): Promise<string | undefined> {
	if (faceCache) return faceCache;
	try {
		const raw = await readFile(
			path.join(process.cwd(), 'public/kasuFace_alpha whie.png'),
		);
		const resized = await sharp(raw)
			.resize(40, 40, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
			.png()
			.toBuffer();
		faceCache = `data:image/png;base64,${resized.toString('base64')}`;
		return faceCache;
	} catch {
		return undefined;
	}
}

function getTitleFontSize(title: string) {
	const len = [...title].length;
	if (len > 60) return 44;
	if (len > 40) return 52;
	return 62;
}

function stripSearchParams(src: string) {
	return src.split('?')[0];
}

async function getFontData() {
	if (fontCache) return fontCache;
	fontCache = await readFile(
		path.join(process.cwd(), 'src/assets/fonts/NotoSansJP-Bold.ttf'),
	);
	return fontCache;
}
