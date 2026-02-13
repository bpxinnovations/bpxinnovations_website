// 'use client';
// import TestimonialCard from './testimonial/card';
// import { TestimonialsList } from '@/lib/testimonialsList';
// import { motion } from 'framer-motion';
// import { MdFeedback } from 'react-icons/md';

// export default function Feature({ locale, langName = 'en' }) {
// 	let list = TestimonialsList[`TESTIMONIAL_${langName.toUpperCase()}`] || [];
// 	return (
// <section
// 	id='testimonial'
// 	className='relative py-10 md:py-20'
// >
// 	<motion.div
// 		initial={{ opacity: 0, y: 50 }}
// 		whileInView={{ opacity: 1, y: 0 }}
// 		transition={{
// 			duration: 0.5,
// 		}}
// 	>
// 				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
// 					<div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group'>
// 						<div className='inline-flex items-center justify-center gap-2 z-10'>
// 							<MdFeedback /> <h2>{locale.h2}</h2>
// 						</div>
// 						<div className='absolute w-0 h-full bg-base-content z-[0]'></div>
// 					</div>

// 					<h3 className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
// 						{locale.h3}
// 					</h3>

// 					<h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>
// 						{locale.description1}
// 						<a
// 							title='feedback'
// 							className='text-primary'
// 							href='#'
// 						>
// 							{locale.description2}
// 						</a>
// 						{locale.description3}
// 					</h4>
// 				</div>
// 			</motion.div>

// 			<motion.div
// 				initial={{ opacity: 0, y: 50 }}
// 				whileInView={{ opacity: 1, y: 0 }}
// 				transition={{
// 					duration: 0.5,
// 				}}
// 			>
// 				<div className='relative z-10 w-full md:w-10/12 mx-auto columns-1 md:columns-3 gap-5'>
// 					{list.map((item, index) => {
// 						return (
// 							<TestimonialCard
// 								key={index}
// 								testimonialItem={item}
// 								langName={langName}
// 							/>
// 						);
// 					})}
// 				</div>
// 			</motion.div>

// 			<div className='hidden md:block absolute left-[20%] top-[70%] z-0'>
// 				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
// 			</div>
// 		</section>
// 	);
// }

"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer at Canva",
    avatar: "https://mockmind-api.uifaces.co/content/human/97.jpg",
    testimonial:
      "This product completely changed the way I work. The interface is intuitive and the performance is top-notch.",
  },
  {
    name: "Daniel Kim",
    role: "CTO at NextLaunch",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
    testimonial:
      "We integrated this solution into our stack within days, and the benefits were immediate. Our team collaboration improved, deployment times dropped, and the analytics insights have helped us fine-tune performance at every level.",
  },
  {
    name: "Emily Chen",
    role: "Marketing Manager at HubSpot",
    avatar: "https://mockmind-api.uifaces.co/content/human/113.jpg",
    testimonial:
      "I've worked with multiple marketing platforms over the years, but none have offered the kind of personalized experience and seamless integration that this one does. It has truly elevated our campaigns and improved our ROI.",
  },
  {
    name: "Raj Mehta",
    role: "Frontend Developer at Zomato",
    avatar: "https://mockmind-api.uifaces.co/content/human/90.jpg",
    testimonial: "Clean, fast, and reliable. Everything a dev could ask for.",
  },
  {
    name: "Aisha Patel",
    role: "Software Engineer at Swiggy",
    avatar: "https://mockmind-api.uifaces.co/content/human/116.jpg",
    testimonial: "Smooth and delightful experience!",
  },
  {
    name: "Liam Garcia",
    role: "Startup Founder",
    avatar: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    testimonial:
      "I've used dozens of tools in the past year alone, and this is one of the few I'd actually recommend to other founders. It doesn't just work — it works smart. Everything feels thoughtfully designed and built with care.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonial" className="relative py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-12 sm:py-24">
          <h2 className="text-center font-bricolage text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Wall of Love
          </h2>
          <p className="text-muted-foreground mt-2 text-center text-lg tracking-normal text-balance sm:mt-4 sm:text-2xl">
            Their experiences speak louder than words
          </p>

          <div className="mx-auto mt-16 max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3">
            {testimonials.map(({ name, avatar, role, testimonial }, index) => (
              <div
                key={index}
                className="bg-muted mb-6 break-inside-avoid rounded-lg border p-1.5"
              >
                <div className="from-muted/50 to-background via-background dark:bg-background dark:border-muted-foreground/30 relative flex flex-col rounded-md border bg-gradient-to-bl px-5 pt-10 pb-3">
                  {/* Quote */}
                  <span className="text-muted-foreground absolute top-5 left-3 font-mono text-7xl">
                    &#8220;
                  </span>

                  <p className="grow py-6 text-lg font-medium">{testimonial}</p>
                  <div className="mt-2 flex items-center gap-3 py-3.5 sm:mt-4">
                    <img
                      src={avatar}
                      alt=""
                      className="ring-border ring-offset-background h-12 w-12 rounded-full ring-2 ring-offset-[2px]"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
