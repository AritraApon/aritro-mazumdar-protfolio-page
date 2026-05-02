"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Environment variables গুলো ঠিকঠাক আছে কি না নিশ্চিত করুন
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          e.target.reset(); // ইমেইল চলে গেলে ফর্মটি খালি হয়ে যাবে
        },
        (error) => {
          // console.error('EmailJS Error:', error);
          toast.error(`Failed to send`);
        },
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl md:rounded-[40px] p-8 md:p-20 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Let's build<br className="hidden md:block" />something great.
            </h2>
            <div className="space-y-6 md:space-y-8 max-w-md mx-auto lg:mx-0">
              <ContactInfoItem icon="mail" label="Email" value="aritromazumdar8@gmail.com" />
              <ContactInfoItem icon="call" label="Phone" value="+8801812788042" />
              <ContactInfoItem icon="location_on" label="Location" value="Rangpur/ Bangladesh" />
            </div>
          </div>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-h3 text-on-surface-variant text-xs uppercase tracking-wider">Full Name</label>
                <input
                  required
                  className="w-full bg-[#0D1117] border border-white/10 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                  placeholder="Your Name"
                  type="text"
                  name="name" // EmailJS Template এ {{name}} হিসেবে ব্যবহার করবেন
                />
              </div>
              <div className="space-y-2">
                <label className="font-h3 text-on-surface-variant text-xs uppercase tracking-wider">Email Address</label>
                <input
                  required
                  name="reply_to" // EmailJS Template এ {{reply_to}} হিসেবে ব্যবহার করবেন
                  className="w-full bg-[#0D1117] border border-white/10 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                  placeholder="email@gmail.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label  className="font-h3 text-on-surface-variant text-xs uppercase tracking-wider">Subject</label>
              <input
                required
                name="title" // এখানে name ছিল না, এটি যোগ করা হয়েছে
                className="w-full bg-[#0D1117] border border-white/10 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                placeholder="Project Inquiry"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-h3 text-on-surface-variant text-xs uppercase tracking-wider">Message</label>
              <textarea
                required
                name="message" // EmailJS Template এ {{message}} হিসেবে ব্যবহার করবেন
                className="w-full bg-[#0D1117] border border-white/10 rounded-xl px-6 py-4 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all"
                placeholder="Tell me about your project..."
                rows="4"
              ></textarea>
            </div>
            <MagneticButton
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary font-bold text-[18px] text-white btn-hover-scale transition-all shadow-lg shadow-primary-container/20"
              type="submit"
            >
              Send Message
            </MagneticButton>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-6 text-left">
      <div className="w-12 h-12 shrink-0 bg-white/5 rounded-full flex items-center justify-center text-primary-container">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="font-h3 text-on-surface-variant text-xs uppercase tracking-wider">{label}</p>
        <p className="font-bold text-sm md:text-base">{value}</p>
      </div>
    </div>
  );
}