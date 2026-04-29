"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProjectCard({ project, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`glass-card overflow-hidden rounded-3xl flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } group`}
    >
      <div className="lg:w-1/2 overflow-hidden h-[300px] md:h-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 bg-surface-container-high rounded-full font-h3 text-xs ${
                project.tagColor || "text-primary-container"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          {project.title}
        </h3>
        <p className="text-lg text-on-surface-variant mb-6 md:mb-8 font-body-md">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            className={`flex items-center gap-2 font-h3 text-sm hover:underline underline-offset-8 ${
              project.tagColor || "text-primary-container"
            }`}
            href={project.liveUrl}
          >
            <span className="material-symbols-outlined">open_in_new</span> LIVE DEMO
          </a>
          <a
            className="flex items-center gap-2 font-h3 text-sm text-on-surface hover:underline underline-offset-8"
            href={project.sourceUrl}
          >
            <span className="material-symbols-outlined">data_object</span> VIEW SOURCE
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
  {
    title: "Dragon News",
    description: "A dynamic and high-performance news portal built with Next.js. It features robust authentication via Better Auth, secure data management with MongoDB Atlas, and a sleek UI powered by DaisyUI for an optimal reading experience.",
    image: "https://i.postimg.cc/x1T0jCjB/dragon.png",
    tags: ["Next.js", "MongoDB", "Better Auth", "DaisyUI"],
    liveUrl: "https://next-js-dragon-news.vercel.app/",
    sourceUrl: "https://github.com/AritraApon/next-js-dragon-news",
  },
  {
    title: "KeenKeeper",
    description: "A sophisticated task and inventory management tool designed for efficiency. This project showcases advanced layout techniques with Tailwind CSS and DaisyUI, ensuring a fully responsive and user-centric dashboard experience.",
    image: "https://i.postimg.cc/zvZWbQxq/Gemini-Generated-Image-w7rjcxw7rjcxw7rj.png",
    tags: ["Next.js", "Tailwind CSS", "DaisyUI", "React"],
    liveUrl: "https://assignment-7-keen-keeper-seven.vercel.app/",
    sourceUrl: "https://github.com/AritraApon/assignment-7-keenKeeper",
  },
  {
    title: "E-Products Hub",
    description: "A modern e-commerce storefront focusing on seamless product discovery. Built with Next.js, it utilizes a utility-first approach with Tailwind CSS to provide a lightning-fast and visually appealing shopping interface.",
    image: "https://i.postimg.cc/y8MVHzxZ/Gemini-Generated-Image-kz645ukz645ukz64.png",
    tags: ["Next.js", "Tailwind CSS", "DaisyUI", "E-commerce"],
    liveUrl: "https://next-js-e-products-01.vercel.app/",
    sourceUrl: "https://github.com/AritraApon/next.js-e-products-01",
  },
  {
    title: "Book Vibe",
    description: "A curated platform for book enthusiasts to explore and manage their reading lists. This Next.js application emphasizes clean typography and intuitive navigation, making it easy for users to find their next great read.",
    image: "https://i.postimg.cc/1zmv48f7/books.png", // Placeholder image
    tags: ["Next.js", "Tailwind CSS", "DaisyUI", "UI/UX"],
    liveUrl: "https://next-js-book-vibe.vercel.app/",
    sourceUrl: "https://github.com/AritraApon/next.js-book-vibe",
  },
];

  return (
    <section id="projects" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <p className="font-h3 text-primary-container uppercase tracking-widest mb-4 text-sm">Portfolio</p>
        <h2 className="text-3xl md:text-5xl font-bold">Recent Projects</h2>
      </motion.div>
      <div className="space-y-12 md:space-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
