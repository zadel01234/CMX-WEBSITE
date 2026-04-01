import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils';

import logo2 from '/CMXConnectIbadanLogo2.webp';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks: { name: string; to?: string; href?: string }[] = [
    { name: 'Home',       to: '/' },
    { name: 'About',      to: '/about' },
    { name: 'Speakers',   to: '/speakers' },
    { name: 'Highlights', to: '/highlights' },
  ];

  const handleNavClick = (link: { to?: string; href?: string }) => {
    setIsMobileMenuOpen(false);
    if (link.href) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(link.href!)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (to?: string) => to && location.pathname === to;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4',
        location.pathname !== '/' || isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="h-8 sm:h-10 w-auto">
            <img src={logo2} alt="CMX Summit" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.name}
                to={link.to}
                className={cn(
                  'text-sm font-semibold hover:text-cmx-blue transition-colors',
                  isActive(link.to) ? 'text-cmx-blue' : ''
                )}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-sm font-semibold hover:text-cmx-blue transition-colors"
              >
                {link.name}
              </button>
            )
          )}
          <button className="bg-cmx-blue text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">
            Register Now
          </button>
        </div>

        <button className="md:hidden p-2 flex-shrink-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-5 flex flex-col gap-3 md:hidden shadow-xl"
          >
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className={cn(
                    'text-base font-semibold py-2',
                    isActive(link.to) ? 'text-cmx-blue' : ''
                  )}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-base font-semibold text-left py-2"
                >
                  {link.name}
                </button>
              )
            )}
            <button className="bg-cmx-blue text-white px-6 py-3 rounded-xl font-bold mt-1">
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
