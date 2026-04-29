"use client";

import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building interactive, high-performance web applications using React.js and Next.js with clean and maintainable code.",
    icon: "code_blocks",
    color: "text-[#58A6FF]"
  },
  {
    id: 2,
    title: "Responsive UI/UX Design",
    description: "Creating pixel-perfect, mobile-first user interfaces using Tailwind CSS that look great on any screen size.",
    icon: "devices",
    color: "text-[#F78166]"
  },
  {
    id: 3,
    title: "API Integration & Auth",
    description: "Implementing secure user authentication with Firebase/Next-Auth and connecting frontend with RESTful APIs.",
    icon: "api",
    color: "text-[#58A6FF]"
  },
  {
    id: 4,
    title: "Dynamic Web Features",
    description: "Adding interactivity and life to web pages with modern animations, smooth transitions, and real-time data fetching.",
    icon: "bolt",
    color: "text-[#F78166]"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-8"
      >
        <div className="max-w-2xl text-center md:text-left">
          <p className="font-h3 text-primary-container uppercase tracking-widest mb-4 text-sm">Core Services</p>
          <h2 className="text-3xl md:text-5xl font-bold">Building Interfaces With Precision</h2>
        </div>
        <div className="h-[1px] flex-1 bg-white/10 hidden md:block mb-4 mx-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card bg-surface-container/30 border border-white/10 p-6 md:p-10 rounded-3xl flex flex-col sm:flex-row gap-6 md:gap-8 items-start hover:border-primary-container/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 shrink-0 bg-surface-container-highest/50 rounded-2xl flex items-center justify-center p-3 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <span className={`material-symbols-outlined text-3xl ${service.color} drop-shadow-[0_0_8px_currentColor]`}>
                {service.icon}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-container transition-colors">
                {service.title}
              </h3>
              <p className="text-[#8B949E] font-body-md leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
