const baseSiteConfig = {
	name: 'BPX Innovations',
	description: 'Innovative IT solutions and digital transformation services for modern businesses across Africa and beyond.',
	url: 'https://bpxinnovations.com',
	ogImage: 'https://bpxinnovations.com/og.png',
	metadataBase: 'https://bpxinnovations.com',
	keywords: [
		'BPX Innovations',
		'IT solutions Ghana',
		'software development Ghana',
		'digital transformation Africa',
		'web development Kumasi',
		'mobile app development Ghana',
		'cloud solutions Africa',
		'enterprise software',
		'UI/UX design Ghana',
		'tech company Ghana',
		'software company Kumasi',
		'next.js development',
		'React development Ghana',
	],
	authors: [
		{
			name: 'Kwesi Addo Daamang',
			url: 'https://bpxinnovations.com/team',
		},
		{
			name: 'Bandoh Kwaku Amankwah',
			url: 'https://bpxinnovations.com/team',
		},
	],
	creator: 'BPX Innovations',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	},
};

export const SiteConfig = {
	en: {
		name: baseSiteConfig.name,
		description: baseSiteConfig.description,
		url: baseSiteConfig.url,
		ogImage: baseSiteConfig.ogImage,
		metadataBase: new URL(baseSiteConfig.url),
		keywords: baseSiteConfig.keywords,
		authors: baseSiteConfig.authors,
		creator: baseSiteConfig.creator,
		icons: baseSiteConfig.icons,
		openGraph: {
			type: 'website',
			locale: 'en_US',
			url: baseSiteConfig.url,
			title: 'BPX Innovations — Innovative Solutions for Modern Businesses',
			description: 'BPX Innovations delivers cutting-edge software development, digital transformation, and IT solutions that help businesses grow, scale, and succeed.',
			siteName: 'BPX Innovations',
			images: [
				{
					url: baseSiteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: 'BPX Innovations — Innovative IT Solutions',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'BPX Innovations — Innovative Solutions for Modern Businesses',
			description: 'BPX Innovations delivers cutting-edge software development, digital transformation, and IT solutions that help businesses grow, scale, and succeed.',
			images: [baseSiteConfig.ogImage],
			creator: '@bpxinnovations',
		},
	},

	
};

// ─── Named exports for convenience ────────────────────────────────────────────
export const { name, description, url, ogImage, keywords, authors, creator, icons } = baseSiteConfig;