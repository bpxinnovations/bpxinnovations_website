'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<footer className='relative w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] overflow-hidden'>
			{/* Animated Gradient Watermark - NOW VISIBLE */}
			<div className='absolute inset-0 pointer-events-none overflow-hidden'>
				<div className='absolute -bottom-28 left-0 right-0 flex items-center justify-center'>
					<span className='text-[280px] font-black bg-gradient-to-r from-white/[0.02] via-blue-400/[0.1] to-white/[0.02] bg-clip-text text-transparent tracking-tight leading-none select-none animate-pulse'>
						BPX
					</span>
				</div>
			</div>

			{/* Footer Content */}
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm relative z-10'>
				<div className='flex flex-col items-center md:items-start'>
					<a
						aria-label='landing page template'
						className='flex items-center mb-3'
						title='landing page template'
						href={`/${langName}`}
					>
						<Image
							width={200}
							height={200}
							src={'/logo.gif'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='logo'
						></Image>
						<h2 className='ml-3 font-bold leading-5 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
							BPX Innovations
						</h2>
					</a>
					<div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						{linkList.map((link, index) => {
							return (
								<a
									key={index}
									title={link.name}
									href={`/${langName}${link.url}`}
									className='hover:text-blue-400 transition-colors'
								>
									{link.name}
								</a>
							);
						})}
					</div>
				</div>

				<p className='text-gray-400'>
					© 2024{' '}
					<span className='text-blue-400 font-semibold'>BPX Innovations</span>
					. All rights reserved.
				</p>
			</div>
		</footer>
	);
}