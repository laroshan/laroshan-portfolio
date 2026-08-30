import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0e14]/90 backdrop-blur-md border-b border-[#232d42] py-4 shadow-lg shadow-black/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Developer X Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center font-bold text-white text-base shadow-md shadow-accent-blue/25 group-hover:scale-105 transition-transform duration-200">
              LS
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-accent-cyan transition-colors">
                Laroshan<span className="text-accent-cyan font-black">.</span>
              </span>
              <span className="hidden sm:block text-[11px] text-neutral-400 font-medium tracking-wide uppercase">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3 bg-[#131926]/70 px-4 py-1.5 rounded-full border border-[#232d42]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-[#131926] hover:bg-[#1a2233] text-neutral-200 hover:text-white border border-[#232d42] hover:border-neutral-600 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-full bg-accent-blue hover:bg-blue-600 text-white shadow-md shadow-accent-blue/30 hover:shadow-accent-blue/50 hover:gap-2.5 transition-all duration-200"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="px-3 py-1.5 text-xs font-bold rounded-full bg-[#131926] text-white border border-[#232d42]"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f141f] border-b border-[#232d42] px-5 pt-4 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#232d42] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 text-xs font-bold rounded-full bg-accent-blue hover:bg-blue-600 text-white shadow-md"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
