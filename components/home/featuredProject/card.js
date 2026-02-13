'use client';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import Workplace  from "@/public/Workplace-Design-For-A-Software-Company-1.jpg"
import Link from 'next/link';

export default function FeaturedProjectCard({ pricingItem = {} }) {
	const [isHovered, setIsHovered] = useState(false);


	return (
		<div 
			className={`group w-full min-h-96 relative overflow-hidden border-2 border-base-content rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl bg-base-100 ${pricingItem.recommend && 'md:scale-110 border-blue-500'}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Image Layer */}
			<div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
				<div className='relative w-full h-full'>
					<Image
						src={Workplace}
						alt={pricingItem.title}
						fill
						className='object-cover'
					/>
					{/* Overlay gradient */}
					<div className='absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent'></div>
					
					{/* Price on image */}
					<div className='absolute bottom-0 left-0 right-0 p-6 text-center'>
						<h2 className='text-2xl font-bold mb-2'>{pricingItem.title}</h2>
						{/* <div className='text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
							{pricingItem.category}
						</div> */}
					
					</div>
				</div>
			</div>

			{/* Content Layer - Shows on hover */}
			<div className={`relative px-6 py-8 h-full flex flex-col items-center gap-3 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
				<h2 className='text-2xl font-bold text-center'>{pricingItem.title}</h2>
				<p className='text-center text-base-content/70'>{pricingItem.description}</p>
				
				<div className='text-4xl font-bold text-center py-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
					{pricingItem.category}
			
				</div>

				<ul className='w-full flex flex-col gap-2 flex-grow'>
					{pricingItem.features &&
						pricingItem.features.map((feature, Featureindex) => {
							return (
								<li
									className='flex items-start gap-2 text-sm'
									key={Featureindex}
								>
									<FaCheck className='text-green-500 mt-1 flex-shrink-0' /> 
									<span>{feature}</span>
								</li>
							);
						})}
				</ul>
				<Link href={`/en/projects/${pricingItem.url_name}`}>

				<button
					aria-label='view project'
					title='view project'
					className='btn btn-wide bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-none rounded-full mt-4'

				>
					View Project
				</button>
				</Link>
			</div>

			
		</div>
	);
}


// 'use client';
// import { FaCheck, FaRocket, FaStar, FaCrown } from 'react-icons/fa';
// import { useState } from 'react';

// export default function PricingCard({ pricingItem = {} }) {
// 	const [isHovered, setIsHovered] = useState(false);

// 	// Get icon based on plan type
// 	const getPlanIcon = (title) => {
// 		const iconMap = {
// 			'Basic': <FaRocket className='w-24 h-24' />,
// 			'Pro': <FaStar className='w-24 h-24' />,
// 			'Enterprise': <FaCrown className='w-24 h-24' />,
// 			'Starter': <FaRocket className='w-24 h-24' />,
// 			'Premium': <FaCrown className='w-24 h-24' />,
// 		};
// 		return iconMap[title] || <FaRocket className='w-24 h-24' />;
// 	};

// 	// Get gradient colors based on plan
// 	const getPlanGradient = (title) => {
// 		const gradients = {
// 			'Basic': 'from-blue-400 to-cyan-400',
// 			'Pro': 'from-purple-400 to-pink-400',
// 			'Enterprise': 'from-orange-400 to-red-400',
// 			'Starter': 'from-green-400 to-teal-400',
// 			'Premium': 'from-yellow-400 to-orange-400',
// 		};
// 		return gradients[title] || 'from-blue-400 to-purple-400';
// 	};

// 	const gradient = getPlanGradient(pricingItem.title);

// 	return (
// 		<div 
// 			className={`group w-full min-h-[450px] relative overflow-hidden border-2 border-base-content/20 rounded-2xl transition-all duration-500 hover:border-base-content shadow-lg hover:shadow-2xl bg-base-100 ${pricingItem.recommend && 'md:scale-110 ring-2 ring-blue-500'}`}
// 			onMouseEnter={() => setIsHovered(true)}
// 			onMouseLeave={() => setIsHovered(false)}
// 		>
// 			{/* Background Pattern */}
// 			<div className='absolute inset-0 opacity-5'>
// 				<div className='absolute inset-0' style={{
// 					backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
// 					backgroundSize: '32px 32px'
// 				}}></div>
// 			</div>

// 			{/* Icon/Illustration Layer - Shows by default */}
// 			<div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
// 				<div className={`bg-gradient-to-br ${gradient} bg-clip-text text-transparent mb-4`}>
// 					{getPlanIcon(pricingItem.title)}
// 				</div>
// 				<h2 className='text-3xl font-bold text-center mb-2'>{pricingItem.title}</h2>
// 				<div className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
// 					{pricingItem.price}
// 				</div>
// 				<p className='text-sm text-base-content/60 mt-2'>per {pricingItem.duration}</p>
// 				<p className='text-center text-base-content/70 mt-4 px-6'>{pricingItem.description}</p>
// 			</div>

// 			{/* Content Layer - Shows on hover */}
// 			<div className={`relative px-6 py-8 h-full flex flex-col items-center gap-3 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
// 				<div className='flex items-center gap-3 mb-2'>
// 					<div className={`bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
// 						<div className='w-12 h-12 flex items-center justify-center'>
// 							{getPlanIcon(pricingItem.title)}
// 						</div>
// 					</div>
// 					<div>
// 						<h2 className='text-xl font-bold'>{pricingItem.title}</h2>
// 						<p className='text-sm text-base-content/60'>{pricingItem.description}</p>
// 					</div>
// 				</div>
				
// 				<div className={`text-3xl font-bold text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
// 					{pricingItem.price}
// 					<span className='text-sm text-base-content/60'>/{pricingItem.duration}</span>
// 				</div>

// 				<div className='w-full h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent my-2'></div>

// 				<ul className='w-full flex flex-col gap-2.5 flex-grow'>
// 					{pricingItem.features &&
// 						pricingItem.features.map((feature, Featureindex) => {
// 							return (
// 								<li
// 									className='flex items-start gap-2 text-sm group/item'
// 									key={Featureindex}
// 								>
// 									<FaCheck className={`text-green-500 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform`} /> 
// 									<span className='group-hover/item:text-base-content transition-colors'>{feature}</span>
// 								</li>
// 							);
// 						})}
// 				</ul>

// 				<button
// 					aria-label='choose plan'
// 					title='choose plan'
// 					className={`btn btn-wide bg-gradient-to-r ${gradient} text-white hover:shadow-lg hover:scale-105 border-none rounded-full mt-4 transition-all`}
// 				>
// 					Choose Plan
// 				</button>
// 			</div>

// 			{/* Recommended badge */}
// 			{pricingItem.recommend && (
// 				<div className={`absolute top-4 right-4 bg-gradient-to-r ${gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-20 animate-pulse`}>
// 					⭐ POPULAR
// 				</div>
// 			)}

// 			{/* Hover glow effect */}
// 			<div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
// 		</div>
// 	);
// }