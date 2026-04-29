"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at TechFlow",
    text: "Sajid transformed our legacy system into a modern MERN stack application. His attention to architecture is unparalleled.",
  },
  {
    name: "Sarah Chen",
    role: "Product Lead",
    text: "The performance optimization Sajid performed on our dashboard reduced load times by 60%. Highly recommended.",
  },
  {
    name: "James Wilson",
    role: "Founder",
    text: "Professional, communicative, and technically brilliant. He solved our complex database issues with ease.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <p className="font-h3 text-primary-container uppercase tracking-widest mb-4 text-sm">Social Proof</p>
        <h2 className="text-3xl md:text-5xl font-bold">Client Feedback</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl italic relative"
          >
            <span className="material-symbols-outlined text-4xl text-white/10 absolute top-4 right-4">
              format_quote
            </span>
            <div className="flex gap-1 text-tertiary mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            <p className="text-on-surface mb-6 font-body-md">"{testimonial.text}"</p>
            <p className="font-h3 text-sm text-primary-container not-italic">
              — {testimonial.name}, {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
