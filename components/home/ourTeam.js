'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const teamMembers = [
	{
		name: 'Alexandra Johnson',
		position: 'Creative Director, TEMPO Inc.',
		image: '/Workplace-Design-For-A-Software-Company-1.jpg',
		quote: 'Working with this team has been an incredible experience. Their professionalism and dedication to excellence is unmatched. I highly recommend their services!',
		delay: 0,
	},
	{
		name: 'Michael Chen',
		position: 'Founder, ProSpace Services',
		image: '/Workplace-Design-For-A-Software-Company-1.jpg',
		quote: 'The quality of candidates they present is outstanding. Quick responses and excellent matching of skills to requirements. Truly impressive results!',
		delay: 0.1,
	},
	{
		name: 'Sarah Williams',
		position: 'Founder, School for MM',
		image: '/Workplace-Design-For-A-Software-Company-1.jpg',
		quote: 'My main advantage is their personalized approach. They immediately understood our needs and presented relevant candidates. Working with international teams!',
		delay: 0.2,
	},

];


export default function TeamWithQuotesEnglish() {
	const [visibleCount, setVisibleCount] = useState(6);
	const [showAll, setShowAll] = useState(false);


	const handleLoadMore = () => {
		setShowAll(true);
		setVisibleCount(teamMembers.length);
	};

	const displayedMembers = teamMembers.slice(0, visibleCount);

	return (
		<section className='relative py-20 overflow-hidden'>
			<div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
				
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='mb-16'
				>
					<div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-6'>
						<div>
							<h2 className='text-3xl font-bricolage md:text-4xl lg:text-5xl font-bold text-base-content mb-2'>
								Our Team
							</h2>
							<p className='text-base-content/60 text-lg'>
								Meet the talented people behind our success
							</p>
						</div>
						
					
					</div>
				</motion.div>

				{/* Team Grid - Image Cards with Hover Text Overlay */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
					{displayedMembers.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ 
								duration: 0.6,
								delay: member.delay,
							}}
							viewport={{ once: true }}
							className='group'
						>
							<div className='relative bg-base-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-[400px]'>
								
								{/* Full Image Background */}
								<Image
									src={member.image}
									alt={member.name}
									fill
									className='object-cover object-center group-hover:scale-105 transition-transform duration-500'
								/>
								
								{/* Gradient Overlay - appears on hover */}
								<div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-base-content/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
								
								{/* Text Overlay - Top Right Corner - Fades in on hover */}
								<div className='absolute top-0 right-0 p-5 max-w-[60%] bg-base-100/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0'>
									{/* Name and Position */}
									<div className='mb-3'>
										<h3 className='text-sm font-bold text-base-content mb-1 leading-tight'>
											{member.name}
										</h3>
										<p className='text-xs text-base-content/60'>
											{member.position}
										</p>
									</div>

									{/* Quote */}
									<p className='text-xs text-base-content/70 leading-relaxed line-clamp-6'>
										&quot;{member.quote}&quot;
									</p>
								</div>
								
								{/* Info Icon - Always visible in top right */}
								<button 
									className='absolute top-3 right-3 w-7 h-7 rounded-full bg-base-content/80 text-base-100 flex items-center justify-center shadow-md hover:bg-base-content transition-all z-10'
									aria-label='More info'
								>
									<svg className='w-3.5 h-3.5' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
									</svg>
								</button>
							</div>
						</motion.div>
					))}
				</div>

				{/* Load More Button */}
				{!showAll && visibleCount < teamMembers.length && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='flex justify-center'
					>
						<button
							onClick={handleLoadMore}
							className='btn btn-wide bg-primary hover:bg-primary/90 text-primary-content border-none rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-14 px-10'
						>
							Load More Team Members
						</button>
					</motion.div>
				)}

			</div>

			{/* Background Decorations */}
			<div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10'></div>
			<div className='absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10'></div>
		</section>
	);
}