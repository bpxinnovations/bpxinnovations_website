import { IoMdHome } from 'react-icons/io';
import ProjectCard from '@/components/home/projects/projectCard';
import ProjectsList from '@/locales/projects/list.json';
import { defaultLocale, getDictionary } from '@/lib/i18n';
import { SiteConfig } from '@/lib/config/site';

export async function generateMetadata({ params }) {
  const langName = params.lang || defaultLocale;
  const dict = await getDictionary(langName);

  return {
    title: 'Projects - ' + SiteConfig[langName].name,
    description: 'Explore our diverse portfolio of innovative solutions and successful projects',
    keywords: SiteConfig[langName].keywords,
    authors: SiteConfig[langName].authors,
    creator: SiteConfig[langName].creator,
    icons: SiteConfig[langName].icons,
    metadataBase: SiteConfig[langName].metadataBase,
    openGraph: SiteConfig[langName].openGraph,
    twitter: SiteConfig[langName].twitter,
  };
}

export default async function ProjectsPage({ params }) {
  const langName = params.lang || defaultLocale;
  const dict = await getDictionary(langName);
  const list = ProjectsList[langName] || ProjectsList['en'];

  console.log("Projects list", list);

  return (
    <main className='container mx-auto px-4 md:px-5 py-10'>
      {/* Hero Section */}
      <section>
        <div className="relative z-10 flex flex-col items-start md:items-center mb-12 overflow-hidden">
          <h1 className="font-bold font-bricolage text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em]">
            Projects
          </h1>
          <h2 className="w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5">
            Our Compiled Projects Showcase: Explore our diverse portfolio of innovative solutions, from cutting-edge web applications to impactful open-source contributions.
          </h2>
        </div>

        {/* Background Pattern */}
        <div className="absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="patternId"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                patternTransform="scale(3) rotate(0)"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="hsla(0, 0%, 100%, 0)"
                ></rect>
                <path
                  d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                  strokeWidth="0.5"
                  className="stroke-base-content/50"
                  fill="none"
                ></path>
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            ></rect>
          </svg>
          <div className="bg-gradient-to-b from-base-100 from-20% to-transparent absolute inset-0"></div>
          <div className="bg-gradient-to-l from-base-100 from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-base-100 from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-base-100 from-1% to-transparent to-30% absolute inset-0"></div>
        </div>
      </section>

      {/* Decorative Background Blurs */}
      <div className='hidden md:block absolute left-[5%] top-[10%] z-0 pointer-events-none'>
        <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.primary/15%),rgba(255,255,255,0))]'></div>
      </div>
      
      <div className='hidden md:block absolute right-[5%] top-[40%] z-0 pointer-events-none'>
        <div className='absolute h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.secondary/10%),rgba(255,255,255,0))]'></div>
      </div>

      {/* Breadcrumbs */}
      <div className='breadcrumbs text-sm relative z-10 pb-6'>
        <ul>
          <li>
            <a href={`/${langName}`} className="flex items-center gap-1 hover:text-primary transition-colors">
              <IoMdHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href={`/${langName}/projects`} className="hover:text-primary transition-colors">
              Projects
            </a>
          </li>
        </ul>
      </div>

      {/* Projects Masonry Grid */}
      <div className='relative z-10'>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto'>
          {list.map((item, index) => (
            <ProjectCard
              key={item.id}
              lang={params.lang || 'en'}
              item={item}
              index={index}
            />
          ))}
        </section>
      </div>
    </main>
  );
}