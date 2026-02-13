'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
	useEffect(() => {
		AOS.init({
			// Animation duration in milliseconds
			duration: 600,
			
			// Easing function for animations
			easing: 'ease-out-cubic',
			
			// Whether animation should happen only once
			once: true,
			
			// Offset from the original trigger point
			offset: 100,
			
			// Delay between each animation
			delay: 0,
			
			// Whether elements should animate out while scrolling past them
			mirror: false,
			
			// Whether to detect and animate elements added dynamically
			anchorPlacement: 'top-bottom',
			
			// Disable on mobile devices (optional)
			disable: false,
		});

		// Refresh AOS on route changes (important for Next.js)
		const handleRouteChange = () => {
			AOS.refresh();
		};

		// Listen for route changes
		window.addEventListener('popstate', handleRouteChange);

		return () => {
			window.removeEventListener('popstate', handleRouteChange);
		};
	}, []);

	return <>{children}</>;
}