"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    name: "HTML5",
    description: "Structuring modern, accessible, and SEO-friendly web applications.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    description: "Creating responsive, visually stunning designs with advanced animations.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    description: "Building dynamic functionality and complex logic for interactive UIs.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React.js",
    description: "Crafting scalable component-based architectures with state management.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    description: "Optimizing web performance with SSR, SSG, and seamless routing.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Tailwind CSS",
    description: "Rapidly designing custom, utility-first UI without leaving the HTML.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
  },
  {
    name: "MongoDB Atlas",
    description: "Managing high-availability NoSQL cloud databases with secure clusters.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "UI Libraries",
    description: "Expertly combining HeroUI and DaisyUI for high-end aesthetic components.",
    logo: "https://img.icons8.com/fluency/48/layers.png"
  }
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-surface-container/40 backdrop-blur-sm border border-white/10 p-7 rounded-[2rem] flex flex-col items-start gap-5 transition-all duration-300 h-full hover:border-primary-container/30 hover:bg-surface-container/60 group"
    >
      <div className="w-16 h-16 bg-surface-container-highest/50 rounded-2xl flex items-center justify-center p-4 border border-white/5 shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-500">
        <Image 
          src={skill.logo} 
          alt={skill.name} 
          width={48} 
          height={48} 
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-on-surface group-hover:text-primary-container transition-colors">{skill.name}</h3>
        <p className="text-[15px] leading-relaxed text-on-surface-variant/70 font-body-md group-hover:text-on-surface-variant transition-colors">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <p className="font-h3 text-primary-container uppercase tracking-widest mb-4 text-sm font-bold">Expertise</p>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">The Tech Stack</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
