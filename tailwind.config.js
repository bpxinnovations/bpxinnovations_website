/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			// Font family configuration
			fontFamily: {
				sans: ['var(--font-inconsolata)', 'var(--font-bricolage-grotesque)', 'var(--font-jakarta)', 'system-ui', 'sans-serif'],
				inconsolata: ['var(--font-inconsolata)'],
				bricolage: ['var(--font-bricolage-grotesque)'],
				jakarta: ['var(--font-jakarta)'],
			},
			// Custom animations for BusinessCategories
			animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
				'breath': 'breath 8s ease-in-out infinite both',
				'line': 'line 10s ease-in-out infinite both',
				'spin': 'spin 3s linear infinite',
				'spin-slow': 'spin 20s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'breath': {
					'0%, 100%': { transform: 'scale(0.95)' },
					'50%': { transform: 'scale(1.1)' },
				},
				'line': {
					'0%, 100%': { left: '0', opacity: '0' },
					'50%': { left: '100%', transform: 'translateX(-100%)' },
					'10%, 40%, 60%, 90%': { opacity: '0' },
					'25%, 75%': { opacity: '1' },
				},
				'spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['corporate', 'business'],
	},
};