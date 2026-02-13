import Image from "next/image";
import Logo01 from "@/public/svg/logo-01.svg";
import Logo02 from "@/public/svg/logo-02.svg";
import Logo03 from "@/public/svg/logo-03.svg";
import Logo04 from "@/public/svg/logo-04.svg";
import Logo05 from "@/public/svg/logo-05.svg";
import Logo06 from "@/public/svg/logo-06.svg";
import Logo07 from "@/public/svg/logo-07.svg";
import Logo08 from "@/public/svg/logo-08.svg";
import Logo09 from "@/public/svg/logo-09.svg";

export default function BusinessCategories() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[200px] sm:h-[250px] md:h-[324px] items-center justify-center">
            {/* Small blue dots - Responsive sizing */}
            <div className="absolute -z-10 scale-75 sm:scale-90 md:scale-100">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                />
              </svg>
            </div>

            {/* MUCH LARGER Blue glow - Responsive */}
            <div className="absolute -z-10 scale-50 sm:scale-75 md:scale-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={800}
                height={400}
                viewBox="0 0 800 400"
                fill="none"
              >
                <g opacity="0.4" filter="url(#filter0_f_glow)">
                  <ellipse
                    cx="400"
                    cy="200"
                    rx="180"
                    ry="100"
                    className="fill-blue-500"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_glow"
                    x={0}
                    y={0}
                    width={800}
                    height={400}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={60}
                      result="effect1_foregroundBlur_glow"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Horizontal lines - Responsive positioning */}
            <div className="absolute inset-x-4 md:inset-x-0 top-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="absolute inset-x-4 md:inset-x-0 bottom-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="absolute left-[50px] sm:left-[100px] md:left-[200px] right-[50px] sm:right-[100px] md:right-[200px] top-1/2 h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            {/* Animated horizontal lines - Responsive positioning */}
            <div className="absolute inset-x-4 md:inset-x-0 top-1/2 h-[1px] sm:h-[2px] -translate-y-[40px] sm:-translate-y-[60px] md:-translate-y-[82px] bg-gradient-to-r from-transparent via-gray-300 to-transparent">
              <div className="absolute inset-y-0 w-16 sm:w-20 md:w-24 animate-[line_10s_ease-in-out_infinite_both] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
            <div className="absolute inset-x-4 md:inset-x-0 top-1/2 h-[1px] sm:h-[2px] translate-y-[40px] sm:translate-y-[60px] md:translate-y-[82px] bg-gradient-to-r from-transparent via-gray-300 to-transparent">
              <div className="absolute inset-y-0 w-16 sm:w-20 md:w-24 animate-[line_10s_ease-in-out_infinite_5s_both] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>

            {/* Diagonal lines - Responsive positioning */}
            <div className="absolute left-[50px] sm:left-[150px] md:left-[300px] right-[50px] sm:right-[150px] md:right-[300px] top-1/2 h-[1px] sm:h-[2px] rotate-[20deg] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="absolute left-[50px] sm:left-[150px] md:left-[300px] right-[50px] sm:right-[150px] md:right-[300px] top-1/2 h-[1px] sm:h-[2px] -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {/* Vertical lines - Responsive positioning */}
            <div className="absolute inset-y-0 left-1/2 w-[1px] sm:w-[2px] -translate-x-[80px] sm:-translate-x-[150px] md:-translate-x-[216px] bg-gradient-to-b from-gray-300 to-transparent"></div>
            <div className="absolute inset-y-0 left-1/2 w-[1px] sm:w-[2px] translate-x-[80px] sm:translate-x-[150px] md:translate-x-[216px] bg-gradient-to-t from-gray-300 to-transparent"></div>

            {/* Center logo with spinning border - Responsive sizing */}
            <div className="absolute before:absolute before:-inset-2 sm:before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box] before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8"
                    src={Logo01}
                    width={32}
                    height={32}
                    alt="Logo 01"
                  />
                </div>
              </div>
            </div>

            {/* Surrounding logos */}
            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center">
                {/* Left logo - Responsive positioning */}
                <div className="absolute -translate-x-[80px] sm:-translate-x-[110px] md:-translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5"
                        src={Logo02}
                        width={23}
                        height={22}
                        alt="Logo 02"
                      />
                    </div>
                  </div>
                </div>

                {/* Right logo - Responsive positioning */}
                <div className="absolute translate-x-[80px] sm:translate-x-[110px] md:translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5"
                        src={Logo03}
                        width={22}
                        height={22}
                        alt="Logo 03"
                      />
                    </div>
                  </div>
                </div>

                {/* Top-left logo - Responsive positioning */}
                <div className="absolute -translate-x-[120px] sm:-translate-x-[170px] md:-translate-x-[216px] -translate-y-[40px] sm:-translate-y-[60px] md:-translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-5"
                        src={Logo04}
                        width={24}
                        height={22}
                        alt="Logo 04"
                      />
                    </div>
                  </div>
                </div>

                {/* Top-right logo - Responsive positioning */}
                <div className="absolute -translate-y-[40px] sm:-translate-y-[60px] md:-translate-y-[82px] translate-x-[120px] sm:translate-x-[170px] md:translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6"
                        src={Logo05}
                        width={25}
                        height={25}
                        alt="Logo 05"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom-right logo - Responsive positioning */}
                <div className="absolute translate-x-[120px] sm:translate-x-[170px] md:translate-x-[216px] translate-y-[40px] sm:translate-y-[60px] md:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-4 h-3 sm:w-4 sm:h-4 md:w-5 md:h-4"
                        src={Logo06}
                        width={20}
                        height={18}
                        alt="Logo 06"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom-left logo - Responsive positioning */}
                <div className="absolute -translate-x-[120px] sm:-translate-x-[170px] md:-translate-x-[216px] translate-y-[40px] sm:translate-y-[60px] md:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6"
                        src={Logo07}
                        width={25}
                        height={25}
                        alt="Logo 07"
                      />
                    </div>
                  </div>
                </div>

                {/* Far left logo (faded) - Responsive positioning */}
                <div className="absolute -translate-x-[160px] sm:-translate-x-[220px] md:-translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                        src={Logo08}
                        width={20}
                        height={20}
                        alt="Logo 08"
                      />
                    </div>
                  </div>
                </div>

                {/* Far right logo (faded) - Responsive positioning */}
                <div className="absolute translate-x-[160px] sm:translate-x-[220px] md:translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative w-3 h-2 sm:w-4 sm:h-3 md:w-5 md:h-3"
                        src={Logo09}
                        width={21}
                        height={13}
                        alt="Logo 09"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
