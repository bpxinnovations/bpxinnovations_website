import { defaultLocale, getDictionary } from "@/lib/i18n";

import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import  { Testimonials } from "@/components/home/testimonial";
import Faq from "@/components/home/faq";
import Cta from "@/components/home/cta";
import Brands from "@/components/home/brands";
import BusinessCategories from "@/components/home/businessCategories";
import FeaturedProjects from "@/components/home/featuredProjects";
import OurServices from "@/components/home/feature";


export default async function Home({ params }) {
  const langName = params.lang || defaultLocale;
  const dict = await getDictionary(langName); // 获取内容

  return (
    <>
      <div className="container mx-auto md:px-5">
        <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
        <Brands locale={dict.Brands} langName={langName} />
        <BusinessCategories />

        <OurServices locale={dict.OurServices} langName={langName} />
        <FeaturedProjects locale={dict.Projects} langName={langName} />

        {/* <Testimonial locale={dict.Testimonial} langName={langName} /> */}

        <Faq locale={dict.Faq} langName={langName} />
      </div>
      <Cta />
      <Testimonials />
    </>
  );
}
