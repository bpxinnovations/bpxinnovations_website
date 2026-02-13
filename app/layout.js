import './globals.css';
import { Plus_Jakarta_Sans, Inconsolata, Bricolage_Grotesque } from 'next/font/google';
import ThemeScript from '@/components/common/themeScript';

// Load fonts with CSS variables
const inconsolata = Inconsolata({
	variable: "--font-inconsolata",
	subsets: ["latin"],
	display: "swap",
});

const bricolage = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	subsets: ["latin"],
	display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
	weight: ['500', '800'],
	subsets: ['latin'],
	variable: "--font-jakarta",
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${inconsolata.variable} ${bricolage.variable} ${jakarta.variable}`}>
			<body>
				<ThemeScript />
				<div className='w-full min-h-svh text-base-content bg-base-100'>
					{children}
				</div>
			</body>
		</html>
	);
}