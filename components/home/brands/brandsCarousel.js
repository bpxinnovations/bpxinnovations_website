import Image from "next/image";
import acmeLogo from "@/public/acme.png";
import quantumLogo from "@/public/quantum.png";
import echoLogo from "@/public/echo.png";
import celestialLogo from "@/public/celestial.png";
import pulseLogo from "@/public/pulse.png";
import apexLogo from "@/public/apex.png";

const BrandsCarousel = () => {
  const brands = [
    { src: acmeLogo, alt: "Acme Logo" },
    { src: quantumLogo, alt: "Quantum Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: pulseLogo, alt: "Pulse Logo" },
    { src: apexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {brands.map((logo, index) => (
          <li
            key={index}
            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto filter"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {brands.map((logo, index) => (
          <li
            key={index}
            className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto filter"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandsCarousel;
