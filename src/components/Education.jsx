"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    title: "Complete Web Development",
    institution: "Programming Hero",
    duration: "Batch-13, Level-1 (Ongoing)",
    description: "Mastering modern web technologies including JavaScript, React, Next.js, and Backend fundamentals.",
    icon: "code",
    color: "text-primary-container",
    bgColor: "bg-primary-container/10"
  },
  {
    id: 2,
    title: "Diploma in Civil Technology",
    institution: "Rangpur Polytechnic Institute",
    duration: "Session 2023-24 (Ongoing)",
    description: "Developing technical expertise in civil engineering and structural design principles.",
    icon: "engineering",
    color: "text-secondary",
    bgColor: "bg-secondary-container/10"
  },
  {
    id: 3,
    title: "Secondary School Certificate (SSC)",
    institution: "Sathibari ML High School",
    duration: "Batch 2023",
    description: "Completed secondary education with a focus on Science, building a strong analytical foundation.",
    icon: "school",
    color: "text-tertiary",
    bgColor: "bg-tertiary-container/10"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <p className="font-h3 text-primary-container uppercase tracking-widest mb-4 text-sm">Academic Journey</p>
        <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl relative group"
          >
            <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined text-3xl">
                {item.icon}
              </span>
            </div>
            
            <p className={`${item.color} font-h3 text-xs uppercase tracking-widest mb-2`}>
              {item.duration}
            </p>
            
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            
            <p className={`${item.color} font-medium mb-4`}>
              {item.institution}
            </p>
            
            <p className="text-on-surface-variant font-body-md">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
