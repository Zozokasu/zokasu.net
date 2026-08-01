export type LinkTarget = {
	label: string;
	href: string;
	/** その行き先に何があるかの一行説明 */
	note?: string;
};

export type Work = {
	title: string;
	summary: string;
	highlights: string[];
	tags: string[];
	/** 配布・公開ページ。サイト外の行き先のみを入れる */
	links: LinkTarget[];
	featured: boolean;
};

/** 深掘りの入口。サイト内の行き先と、外の行き先を必ず両方持つ */
export type Drawer = {
	label: string;
	description: string;
	internal: LinkTarget;
	external: LinkTarget[];
};

export const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export const DISPLAY_NAME = 'ぞぞかす / Zozokasu';

export const INDEX_DESCRIPTION =
	'Resoniteを中心に、VRSNSの中と外をつなぐツール・ゲーム・ガイドを作っている、ぞぞかす / Zozokasuの個人サイトです。';

export const ABOUT_DESCRIPTION =
	'ぞぞかす / Zozokasuのプロフィール。Resonite・VRChatでの活動、代表作、使っている道具、外部の公開場所をまとめています。';

export const ONE_LINER =
	'Resoniteを中心に、VRSNSの中と外をつなぐツール、ゲーム、ガイドを作っています。';

export const ONE_LINER_SUB =
	'VRChat向けの便利なもの・少し変な小物、Webツール、趣味で音楽も作っています。';

export const SUBTITLES = ['Resonite','VRChat','応用情報技術者'];

export const CURRENT_ACTIVITIES: string[] = [
	'毎週水曜21時「Resonite初心者案内デー」',
	'VRChat向けツールの開発',
	'Resoniteのワールド・ツールの制作',
];

export const WORKS: Work[] = [
	{
		title: "Let's Go to the Moon",
		summary: '実時間でアポロ11号の月面着陸を追体験できるResoniteワールド。',
		highlights: [
			'チームリーダーとして企画・制作',
			'MMC26 ESD部門優勝',
			'実時間でアポロ11号の月面着陸を再現',
		],
		tags: ['Resonite', 'ワールド'],
		links: [{
			label: 'go.resonite.com',
			href: 'https://go.resonite.com/world/G-1XjCx6ltRtA/R-b95291f1-4c3a-47c4-9068-cde3f604b8b3',
		}],
		featured: true,
	},
	{
		title: 'Quantum Arena',
		summary: 'Resonite製のローグライク風VRシューティング。',
		highlights: [
			'チームリーダーとして企画・制作',
			'MMC25 ゲーム部門 佳作',
			'ワールドに入ってそのまま遊べる',
		],
		tags: ['Resonite', 'ゲーム'],
		links: [{
			label: 'go.resonite.com',
			href: 'https://go.resonite.com/world/G-1XjCx6ltRtA/R-0e64e6b0-341f-4cab-9c6c-9f8c72113ff4',
		}],
		featured: true,
	},
	{
		title: 'ResoniteSpout',
		summary: 'Resonite内のカメラ映像をSpout経由でOBSやvMixへ送るMod。',
		highlights: [
			'GPU上で直接テクスチャを共有',
			'複数カメラ・動的なカメラ名に対応',
			'配信・収録・バーチャルプロダクション向け',
		],
		tags: ['Resonite', 'Mod', 'OSS'],
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/Zozokasu/ResoniteSpout',
				note: 'ソースコードと導入手順',
			},
			{
				label: 'Thunderstore',
				href: 'https://old.thunderstore.io/c/resonite/p/Zozokasu/ResoniteSpout/',
				note: 'Mod本体の配布ページ',
			},
		],
		featured: true,
	},
	{
		title: 'ココダケ！',
		summary: 'Unity上でアバターの変えたい場所を直接選んで、色を編集するツール。',
		highlights: [
			'近縁色選択・メッシュアイランド選択に対応',
			'Modular Avatar for ResoniteによるResonitePackage出力にも対応',
		],
		tags: ['VRChat', 'Unity'],
		links: [
			{
				label: 'BOOTH 商品ページ',
				href: 'https://zozokasu.booth.pm/items/8610444',
				note: '使いかたの説明とサンプル画像',
			},
		],
		featured: false,
	},
	{
		title: 'うちの子！ヘイローメーカー',
		summary: '100種類以上のパーツを組み合わせてアバター用ヘイローを作るUnityツール。',
		highlights: ['Unity上で結果を見ながら選べる', 'Modular Avatar対応', 'サンプル版あり'],
		tags: ['VRChat', 'Unity'],
		links: [
			{
				label: 'BOOTH 商品ページ',
				href: 'https://zozokasu.booth.pm/items/8187843',
				note: 'パーツ一覧とサンプル版',
			},
		],
		featured: false,
	},
];

export const DRAWERS: Drawer[] = [
	{
		label: 'Resoniteで遊ぶ・作る',
		description: 'はじめかたから、ギミックやワールドの作りかたまで。',
		internal: { href: '/vrsns/', label: 'VRSNSの記事を読む', note: '手を動かす手順つきの記事' },
		external: [
			{
				label: '初心者向けガイド',
				href: 'https://github.com/Zozokasu/resonite-tutorial',
				note: '入ってから遊べるようになるまで',
			},
			{
				label: 'クリエイターガイド',
				href: 'https://github.com/Zozokasu/resonite-creators-guide',
				note: '作って公開する側の手引き',
			},
		],
	},
	{
		label: 'VRChat向けのもの',
		description: 'アバター改変ツールと、ちょっと変な小物。',
		internal: { href: '/about/#vrchat', label: '活動内容を見る', note: 'どんなものを作っているか' },
		external: [
			{
				label: 'BOOTH「かっすり研究所」',
				href: 'https://zozokasu.booth.pm/',
				note: 'ツールとアバター小物の置き場',
			},
		],
	},
	{
		label: 'Web・ソフトウェア',
		description: 'Webツール、OSS、外部連携の実験。',
		internal: {
			href: '/about/#web',
			label: '開発したものを見る',
			note: '代表的なリポジトリのまとまり',
		},
		external: [
			{ label: 'GitHub', href: 'https://github.com/Zozokasu', note: 'コードと実験の置き場' },
		],
	},
	{
		label: 'ブログ・技術記事',
		description: '作りながら考えたことの記録。',
		internal: { href: '/blog/', label: 'ブログを読む', note: 'サイトや日々のことなど' },
		external: [
			{ label: 'GitHub', href: 'https://github.com/Zozokasu', note: '記事のもとになったコード' },
		],
	},
	{
		label: '音楽',
		description: 'つくった曲を置いています。',
		internal: { href: '/about/#other', label: 'そのほかの活動を見る', note: '音楽を含む活動の全体像' },
		external: [
			{ label: 'SoundCloud', href: 'https://soundcloud.com/zozokasu', note: '公開している楽曲' },
		],
	},
];

/** サイト内の主要な行き先。回遊導線の既定値として使う */
export const SITE_SECTIONS: LinkTarget[] = [
	{ label: 'プロフィール', href: '/about/', note: '活動分野・代表作・略歴' },
	{ label: 'VRSNSの記事', href: '/vrsns/', note: 'Resonite・VRChatの技術記事' },
	{ label: 'ブログ', href: '/blog/', note: 'サイトや日々のこと' },
];

export const EXTERNAL_LINKS: LinkTarget[] = [
	{ label: 'GitHub', href: 'https://github.com/Zozokasu', note: 'OSSと実験コード' },
	{
		label: 'BOOTH「かっすり研究所」',
		href: 'https://zozokasu.booth.pm/',
		note: 'ツールとアバター小物',
	},
	{ label: 'X', href: 'https://twitter.com/zozokasu2', note: '制作中のものの様子' },
	{ label: 'Misskey', href: 'https://misskey.resonite.love/@zozokasu', note: 'Resonite寄りの日常' },
	{ label: 'SoundCloud', href: 'https://soundcloud.com/zozokasu', note: '音楽' },
];

export const INTRO_PARAGRAPHS: string[] = [
	'2021年からNeosVR、2023年からResoniteで活動しています。Resoniteのゲーム・ワールド・ツールを作ったり、初心者向けイベントを開催しています。',
	'VRChat向けには「かっすり研究所」で、便利なツールと少し変なアバター小物を作っています。。',
];

export const ACTIVITY_FIELDS: { id: string; heading: string; items: string[] }[] = [
	{
		id: 'resonite',
		heading: 'Resonite',
		items: [
			'ゲーム・ワールド・アイテム・ゲーム内ツールなどギミック制作',
			'初心者向け案内イベントの開催',
			'日本語ガイド・技術記事の執筆',
		],
	},
	{
		id: 'vrchat',
		heading: 'VRChat',
		items: [
			'Unity Editor拡張・アバター改変ツール',
			'Modular Avatarを使った導入しやすいギミック',
			'3D小物、アクセサリー、ネタアイテム',
		],
	},
	{
		id: 'other',
		heading: 'その他',
		items: [
			'Webアプリ・Webサイト',
			'Rust / C# / TypeScript いじり',
			'音楽制作（ワールドに使うBGMなど）',
		],
	},
];

export const RESONITE_ACTIVITIES: { title: string; body: string; links: LinkTarget[] }[] = [
	{
		title: "Let's Go to the Moon",
		body: '企画・チームリーダーとして制作した、宇宙について体験しながら学べるワールド。MMC26 ESD部門向け作品。',
		links: [{
			label: 'go.resonite.com',
			href: 'https://go.resonite.com/world/G-1XjCx6ltRtA/R-b95291f1-4c3a-47c4-9068-cde3f604b8b3',
		},],
	},
	{
		title: 'Quantum Arena',
		body: '企画・チームリーダーとして制作した、Resonite製のローグライク風VRシューティング。MMC25 ゲーム部門 佳作。',
		links: [{
			label: 'go.resonite.com',
			href: 'https://go.resonite.com/world/G-1XjCx6ltRtA/R-0e64e6b0-341f-4cab-9c6c-9f8c72113ff4',
		}],
	},
	{
		title: 'Resonite初心者案内デー',
		body: '毎週水曜21時開催。初期設定、基本操作、プロフィール、コンタクト、ワールド、インベントリまでを案内し、その日のうちに自分でResoniteを使える状態になることを目指しています。',
		links: [],
	},
	{
		title: 'ResoniteSpout',
		body: 'Resonite内カメラの映像をSpoutで外部へ出すMod。OBS・vMixでの配信や収録、バーチャルプロダクションを想定しています。',
		links: [
			{
				label: 'Thunderstore',
				href: 'https://old.thunderstore.io/c/resonite/p/Zozokasu/ResoniteSpout/',
			},
			{ label: 'GitHub', href: 'https://github.com/Zozokasu/ResoniteSpout' },
		],
	},
	{
		title: 'そのほかの制作・実験',
		body: 'デスクトップ向け吹き出しチャットツールとか、VRChat風ネームプレートなど。',
		links: [],
	},
];

export const LAB_WORKS: { title: string; body: string; links: LinkTarget[] }[] = [
	{
		title: 'ココダケ！',
		body: 'Unity上で直接選んで操作するアバター色変更ツール。近縁色選択やメッシュアイランド選択に対応し、Resonite向けの出力もできます。',
		links: [{ label: '商品ページ', href: 'https://zozokasu.booth.pm/items/8610444' }],
	},
	{
		title: 'うちの子！ヘイローメーカー',
		body: '100種類以上のパーツを組み合わせてヘイローを作るツール。Unity上で結果を確認しながら選べます。Modular Avatar対応。',
		links: [{ label: '商品ページ', href: 'https://zozokasu.booth.pm/items/8187843' }],
	},
	{
		title: 'デスクトップ作業しています看板',
		body: '道路工事風のアバターギミック。33アバター分のイラストを収録し、デスクトップで作業中であることを周囲に伝えます。',
		links: [{ label: '商品ページ', href: 'https://zozokasu.booth.pm/items/8499909' }],
	},
	{
		title: 'そのほかの小物',
		body: 'リムレス眼鏡、かわいい！B（はち）でっぽう、西暦メガネ、銅鑼、順路パネルなど。無料のネタ小物もあります。',
		links: [{ label: 'BOOTH「かっすり研究所」', href: 'https://zozokasu.booth.pm/' }],
	},
];

export const OSS_GROUPS: { heading: string; links: LinkTarget[]; note: string }[] = [
	{
		heading: 'Resonite関連',
		links: [
			{ label: 'ResoniteSpout', href: 'https://github.com/Zozokasu/ResoniteSpout' },
			{
				label: 'Modular Avatar for Resonite',
				href: 'https://github.com/Zozokasu/modular-avatar-resonite',
			},
			{ label: 'ResoniteLink MCP', href: 'https://github.com/Zozokasu/resolink-mcp' },
			{
				label: 'Resoniteクリエイターガイド',
				href: 'https://github.com/Zozokasu/resonite-creators-guide',
			},
		],
		note: 'ResoniteLink、Markdown連携、外部ツール連携の実験や、NeosVR時代のModもこのあたりに置いています。',
	},
	{
		heading: 'Web・音声・その他',
		links: [
			{ label: '画像色あせツール', href: 'https://github.com/Zozokasu/image-iroase' },
			{ label: 'Discord TTS', href: 'https://github.com/Zozokasu/discord-tts' },
			{ label: 'aitalked', href: 'https://github.com/Zozokasu/aitalked' },
		],
		note: '分散SNS関連、縦書きエディタ、スキルグラフ、Minecraft Mod / プラグインなどは「過去の実験・OSS活動」としてGitHubにまとめています。',
	},
];

export const CHRONOLOGY: { year: string; body: string }[] = [
	{ year: '2016', body: 'この時期は某minecraftサーバーで活動していました。' },
	{ year: '2021', body: 'kokoa0429氏に誘われてNeosVRをはじめる。' },
	{ year: '2023', body: 'Resoniteサービス開始と同時に移住。' },
	{ year: '2024', body: 'Resoniteの日本語ガイド、ゲーム内ツール、外部連携の制作。酒が飲めるようになる。' },
	{
		year: '2025',
		body: 'Quantum Arena - MMC25 ゲーム部門 佳作を受賞。ResoniteSpoutなどを公開。',
	},
	{
		year: '2026',
		body: "Let's Go to the Moon公開。VRChat 向けツールの開発を始める。",
	},
];

export const TOOLS: { name: string; usage: string }[] = [
	{ name: 'Resonite', usage: 'ProtoFlux、コンポーネント、ワールド・ゲーム・アイテム制作' },
	{ name: 'Unity', usage: 'Editor拡張、UI Toolkit、アバター向けツール' },
	{ name: 'C#', usage: 'Unity、Resonite Mod' },
	{ name: 'Rust', usage: '音声、OSC、実験的な開発に使う' },
	{ name: 'TypeScript / JavaScript', usage: 'Webアプリ、外部連携' },
	{ name: 'Astro', usage: '個人サイト、ドキュメント' },
	{ name: 'Blender / 3DCG', usage: 'VRSNS向け小物、ワールド素材' },
	{ name: 'Cubase', usage: '音楽制作' },
	{ name: 'illustrator / Photoshop', usage: 'アイコン、UI、イラスト、BOOTH商品サムネイルなど' },
];
