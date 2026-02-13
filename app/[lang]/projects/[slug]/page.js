import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaCog,
  FaRocket,
} from "react-icons/fa";
import ProjectsList from "@/locales/projects/list.json";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { SiteConfig } from "@/lib/config/site";
import ProjectCard from "@/components/home/projects/projectCard";

export async function generateMetadata({ params }) {
  const langName = params.lang || defaultLocale;
  const list = ProjectsList[langName] || ProjectsList["en"];
  const project = list.find((p) => p.url_name === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} - Projects - ${SiteConfig[langName].name}`,
    description: project.description,
    keywords: [
      ...(SiteConfig[langName].keywords || []),
      ...project.technologies,
    ],
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.image],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const langName = params.lang || defaultLocale;
  const dict = await getDictionary(langName);
  const list = ProjectsList[langName] || ProjectsList["en"];
  const project = list.find((p) => p.url_name === params.slug);
  if (!project) notFound();

  const currentIndex = list.findIndex((p) => p.url_name === params.slug);
  const prevProject = currentIndex > 0 ? list[currentIndex - 1] : null;
  const nextProject =
    currentIndex < list.length - 1 ? list[currentIndex + 1] : null;

  const processSteps = project.process || [
    {
      step: "Step 01",
      title: "Research",
      icon: "search",
      description:
        project.challenge ||
        "We start with deep discovery — understanding the business goals, user needs, and technical constraints before writing a single line of code.",
    },
    {
      step: "Step 02",
      title: "Development",
      icon: "cog",
      description:
        project.solution ||
        "Iterative, test-driven development using modern technologies. We build in sprints with continuous feedback loops to ensure quality at every stage.",
    },
    {
      step: "Step 03",
      title: "Deploy",
      icon: "rocket",
      description:
        "Rigorous QA, performance optimization, and staged rollout. We monitor closely post-launch to ensure a smooth, stable production environment.",
    },
  ];

  const stepIcon = (icon) => {
    if (icon === "search")
      return <FaSearch className="w-8 h-8 text-base-content/20" />;
    if (icon === "cog")
      return <FaCog className="w-8 h-8 text-base-content/20" />;
    return <FaRocket className="w-8 h-8 text-base-content/20" />;
  };

  return (
    <main className="min-h-screen bg-base-100">
      <div className=" mx-auto px-4  py-8">
        {/* ─── BREADCRUMB + BACK ─── */}
        <div className="flex items-center justify-between mb-2">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link
                  href={`/${langName}`}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <IoMdHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${langName}/projects`}
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li className="text-base-content/40">{project.name}</li>
            </ul>
          </div>
          <Link
            href={`/${langName}/projects`}
            className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
        {/* ─── HERO: Banner with 1 large + 2 stacked images ─── */}
        <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
          <div className="absolute inset-0 flex gap-3 ">
            {/* Large left image */}
            <div className="relative flex-[2] rounded-2xl overflow-hidden">
              <Image
                src={project.image || "/projects/default.jpg"}
                fill
                className="object-cover"
                alt={project.name}
                priority
              />
            </div>
            {/* 2 stacked right images */}
            <div className="flex flex-col flex-1 gap-3 hidden md:flex">
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src={
                    (project.gallery && project.gallery[0]) ||
                    project.image ||
                    "/projects/default.jpg"
                  }
                  fill
                  className="object-cover"
                  alt={`${project.name} 2`}
                />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                  src={
                    (project.gallery && project.gallery[1]) ||
                    project.image ||
                    "/projects/default.jpg"
                  }
                  fill
                  className="object-cover"
                  alt={`${project.name} 3`}
                />
              </div>
            </div>
          </div>
          {/* Dark vignette bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
        </section>

        {/* ─── MAIN CONTENT: 2-col (content + sticky sidebar) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 mb-20">
          {/* LEFT: Main content */}
          <div>
            {/* Category pill */}
            <div className="flex items-center gap-3 my-4">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold">
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Project Title */}
            <h1 className="text-3xl md:text-4xl font-bricolage font-bold mb-6 leading-tight">
              {project.name}
            </h1>

            {/* Project Overview heading */}
            <h2 className="text-2xl font-jakarta font-bold mb-4 mt-10">Projects Overview</h2>

            {/* Full description paragraphs */}
            <div className="space-y-5 text-base-content/70 leading-relaxed mb-10">
              <p>{project.description}</p>
              <p>
                {project.overview ||
                  project.challenge ||
                  "Our team approached this project with a focus on scalability, user experience, and technical excellence. We employed modern development practices and iterative feedback to ensure the final product aligned perfectly with client expectations and business goals."}
              </p>
            </div>

            {/* ─── Our Process (3 step cards) ─── */}
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative p-6 bg-base-200 rounded-2xl border border-base-content/8 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
                >
                  {/* Step number + icon row */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-semibold text-primary">
                      {step.step}
                    </span>
                    <div className="opacity-30 group-hover:opacity-50 transition-opacity">
                      {stepIcon(step.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-base-content/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {/* subtle accent line */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* ─── Gallery: 2 images side by side ─── */}
            {project.gallery && project.gallery.length >= 2 && (
              <div className="grid grid-cols-2 gap-4 mb-12">
                {project.gallery.slice(0, 2).map((img, i) => (
                  <div
                    key={i}
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={img}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={`${project.name} gallery ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* ─── Technologies ─── */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-5">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 bg-base-200 border border-base-content/10 rounded-xl font-medium text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ─── Result ─── */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Result</h2>
              <p className="text-base-content/70 leading-relaxed">
                {project.result ||
                  (Array.isArray(project.results)
                    ? project.results.join(". ")
                    : null) ||
                  "The project was delivered on time and exceeded the client's expectations in both performance and usability. Post-launch metrics confirmed measurable improvements across all key indicators, validating our approach and the technologies we chose."}
              </p>
            </div>

            {/* ─── Previous / Next Navigation ─── */}
            <div className="border-t border-base-content/10 pt-8">
              <div className="flex items-center justify-between gap-4">
                {/* Previous */}
                {prevProject ? (
                  <Link
                    href={`/${langName}/projects/${prevProject.url_name}`}
                    className="flex items-center gap-4 group flex-1"
                  >
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-base-content/10 group-hover:ring-primary/50 transition-all">
                      <Image
                        src={prevProject.image || "/projects/default.jpg"}
                        fill
                        className="object-cover"
                        alt={prevProject.name}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                        Previous
                      </div>
                      <div className="font-bold text-base-content group-hover:text-primary transition-colors line-clamp-1">
                        {prevProject.name}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}

                {/* Divider */}
                <div className="w-px h-12 bg-base-content/10 hidden md:block" />

                {/* Next */}
                {nextProject ? (
                  <Link
                    href={`/${langName}/projects/${nextProject.url_name}`}
                    className="flex items-center gap-4 group flex-1 justify-end text-right"
                  >
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                        Next
                      </div>
                      <div className="font-bold text-base-content group-hover:text-primary transition-colors line-clamp-1">
                        {nextProject.name}
                      </div>
                    </div>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-base-content/10 group-hover:ring-primary/50 transition-all">
                      <Image
                        src={nextProject.image || "/projects/default.jpg"}
                        fill
                        className="object-cover"
                        alt={nextProject.name}
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            {/* Project Details Card */}
            <div className="bg-base-200 rounded-3xl overflow-hidden border border-base-content/8 mb-6">
              {[
                { label: "Client:", value: project.client },
                { label: "Company:", value: project.company || project.client },
                { label: "Location:", value: project.location || "Remote" },
                { label: "Project Type:", value: project.category },
                { label: "Duration:", value: project.duration || "3 Months" },
              ].map((row, i, arr) => (
                <div
                  key={i}
                  className={`px-8 py-5 ${i < arr.length - 1 ? "border-b border-base-content/8" : ""}`}
                >
                  <div className="text-sm text-base-content/50 mb-1">
                    {row.label}
                  </div>
                  <div className="font-bold text-lg">{row.value || "—"}</div>
                </div>
              ))}
            </div>

            {/* Ready to work with us? CTA */}
            <div className="relative rounded-3xl overflow-hidden min-h-[220px]">
              {/* Background image */}
              <Image
                src={project.image || "/projects/default.jpg"}
                fill
                className="object-cover"
                alt="CTA background"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-white mb-1">Ready to</h3>
                <h3 className="text-2xl font-bold text-white/70 mb-6">
                  work with us?
                </h3>
                <Link
                  href={`/${langName}/contact`}
                  className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Get a quote
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-base-content/10 hover:bg-base-content/20 font-semibold rounded-full transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
