import Image from "next/image";


const BrandsCarousel = () => {

  const partnerImages = [
  "/147-1475937_jeff-kinney-penguin-random-house-logo%20Background%20Removed.png",
  "/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png",
  "/c6b68b29632909%20Background%20Removed.55fc107b87f06.png",
  "/pngtree-dice-logo-vector-choice-gambling-random-vector-png-image_52308860.jpg",
  "/random-logo-png-transparent.png",
  "/riofruits-logo.png",
];

  return (
    
      <section className="relative  py-5 overflow-hidden">
       
        <div className="relative flex w-full" aria-hidden>
          <div className="flex animate-marquee gap-10 pl-4 sm:gap-14 sm:pl-6">
            {[...partnerImages, ...partnerImages].map((src, index) => (
              <div
                key={`marquee-partner-${index}`}
                className="group flex shrink-0 items-center justify-center rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-gray-200/80 sm:p-4"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-xl sm:h-16 sm:w-16">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                    sizes="64px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    // <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    //   <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    //     {brands.map((logo, index) => (
    //       <li
    //         key={index}
    //         className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
    //       >
    //         <Image
    //           src={logo.src}
    //           alt={logo.alt}
    //           className="h-10 md:h-14 w-auto filter"
    //         />
    //       </li>
    //     ))}
    //   </ul>
    //   <ul
    //     className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
    //     aria-hidden="true"
    //   >
    //     {brands.map((logo, index) => (
    //       <li
    //         key={index}
    //         className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
    //       >
    //         <Image
    //           src={logo.src}
    //           alt={logo.alt}
    //           className="h-10 md:h-14 w-auto filter"
    //         />
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    
  );
};

export default BrandsCarousel;
