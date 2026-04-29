export default function Footer() {
  const links = [
    { name: "GITHUB", icon: "code", href: "https://github.com/AritraApon" },
    { name: "LINKEDIN", icon: "account_circle", href: "https://www.linkedin.com/in/aritro-mazumdar-011206apon" },
    { name: "DOCUMENTATION", icon: "description", href: "https://www.linkedin.com/in/aritro-mazumdar-011206apon" },
    { name: "SOURCE", icon: "terminal", href: "https://github.com/AritraApon" },
  ];

  return (
    <footer className="w-full py-12 md:py-16 mt-20 md:mt-32 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-6 font-h3 text-[10px] md:text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xl font-bold text-blue-400 tracking-widest font-h3 opacity-50">
            ARITRO.DEV
          </span>
          <p className="font-h3 text-[9px] sm:text-xs uppercase tracking-[0.3em] text-slate-500 max-w-[280px] sm:max-w-none">
          © 2026 ARITRO.DEV | DESIGNED FOR IMPACT, BUILT FOR SCALE.
          </p>
        </div>
      </div>
    </footer>
  );
}
