"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <Image
            src='/logo.PNG'
            alt="logo"
            width={40}
            height={40}
          />


          <span className="text-xl font-bold text-blue-400 tracking-widest font-h3 cursor-pointer" onClick={(e) => handleLinkClick(e, "#home")}>
            ARITRO.DEV
          </span>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-h3 tracking-tight">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`relative py-1 transition-colors duration-300 ${activeSection === item.id ? "text-blue-400" : "text-slate-400 hover:text-blue-400"
                }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
  {/* Desktop Social Icons */}
  <div className="hidden sm:flex items-center gap-3 md:gap-4">
    {/* LinkedIn Button */}
    <a
      href="https://www.linkedin.com/in/aritro-mazumdar-011206apon"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full  text-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(88,166,255,0.6)] border border-orange-400"
      aria-label="LinkedIn"
    >
      <FaLinkedin className="text-lg md:text-2xl" />
    </a>

    {/* GitHub Button */}
    <a
      href="https://github.com/AritraApon"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-blue-400 text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(247,129,102,0.6)] border "
      aria-label="GitHub"
    >
      <FaGithub className="text-lg md:text-2xl" />
    </a>
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden p-2 text-on-surface focus:outline-none hover:bg-white/5 rounded-full transition-colors"
  >
    <span className="material-symbols-outlined text-3xl">
      {isOpen ? "close" : "menu"}
    </span>
  </button>
</div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/10 px-6 py-8 space-y-6 overflow-hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-lg font-h3 ${activeSection === item.id ? "text-blue-400" : "text-slate-400"
                  }`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-6 sm:hidden border-t border-white/10">
              <button className="w-full px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-h3">
                 Linkedin
              </button>
              <button className="w-full px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-h3">
               Github
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
