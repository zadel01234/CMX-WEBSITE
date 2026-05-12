// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Menu, X } from 'lucide-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { cn } from '../utils';

// // import logo2 from '/CMXConnectIbadanLogo2.webp';
// import logo2 from '/CMXLOGO.png';

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [location.pathname]);

//   const navLinks: { name: string; to?: string; href?: string }[] = [
//     { name: 'Home',       to: '/' },
//     { name: 'About',      to: '/about' },
//     { name: 'Speakers',   to: '/speakers' },
//     { name: 'Highlights', to: '/highlights' },
//   ];

//   const handleNavClick = (link: { to?: string; href?: string }) => {
//     setIsMobileMenuOpen(false);
//     if (link.href) {
//       if (location.pathname !== '/') {
//         navigate('/');
//         setTimeout(() => {
//           document.querySelector(link.href!)?.scrollIntoView({ behavior: 'smooth' });
//         }, 150);
//       } else {
//         document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   const isActive = (to?: string) => to && location.pathname === to;

//   return (
//     <nav
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4',
//         location.pathname !== '/' || isScrolled
//           ? 'bg-white/90 backdrop-blur-md shadow-sm'
//           : 'bg-transparent'
//       )}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2 flex-shrink-0">
//           <div className="h-8 sm:h-10 w-auto">
//             <img src={logo2} alt="CMX Summit" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
//           </div>
//         </Link>

//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           {navLinks.map((link) =>
//             link.to ? (
//               <Link
//                 key={link.name}
//                 to={link.to}
//                 className={cn(
//                   'text-sm font-semibold hover:text-cmx-blue transition-colors',
//                   isActive(link.to) ? 'text-cmx-blue' : ''
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ) : (
//               <button
//                 key={link.name}
//                 onClick={() => handleNavClick(link)}
//                 className="text-sm font-semibold hover:text-cmx-blue transition-colors"
//               >
//                 {link.name}
//               </button>
//             )
//           )}
//           <button className="bg-cmx-blue text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">
//             Register Now
//           </button>
//         </div>

//         <button className="md:hidden p-2 flex-shrink-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute top-full left-0 right-0 bg-white border-t p-5 flex flex-col gap-3 md:hidden shadow-xl"
//           >
//             {navLinks.map((link) =>
//               link.to ? (
//                 <Link
//                   key={link.name}
//                   to={link.to}
//                   className={cn(
//                     'text-base font-semibold py-2',
//                     isActive(link.to) ? 'text-cmx-blue' : ''
//                   )}
//                 >
//                   {link.name}
//                 </Link>
//               ) : (
//                 <button
//                   key={link.name}
//                   onClick={() => handleNavClick(link)}
//                   className="text-base font-semibold text-left py-2"
//                 >
//                   {link.name}
//                 </button>
//               )
//             )}
//             <button className="bg-cmx-blue text-white px-6 py-3 rounded-xl font-bold mt-1">
//               Register Now
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Users, DollarSign, Handshake } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils';

// import logo2 from '/CMXConnectIbadanLogo2.webp';
import logo2 from '/CMXLOGO.png';

const WA_NUMBER = '2348123051357';

const GetInvolvedModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.25 }}
      className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"><X size={22} /></button>
      <h2 className="text-2xl font-black mb-2">Get Involved</h2>
      <p className="text-gray-500 text-sm mb-6">Choose how you'd like to be part of CMX Nigeria Summit 2026</p>
      <div className="flex flex-col gap-3">
        <a
          href="https://forms.gle/ADj7rYjff9Ue3sgRA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-cmx-blue hover:bg-cmx-blue/5 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl bg-cmx-blue/10 flex items-center justify-center text-cmx-blue group-hover:bg-cmx-blue group-hover:text-white transition-all flex-shrink-0">
            <Users size={20} />
          </div>
          <div>
            <p className="font-bold text-sm">Become a Community Partner</p>
            <p className="text-xs text-gray-500">Join our network of community leaders</p>
          </div>
        </a>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('I want to become a sponsor')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-cmx-orange hover:bg-cmx-orange/5 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl bg-cmx-orange/10 flex items-center justify-center text-cmx-orange group-hover:bg-cmx-orange group-hover:text-white transition-all flex-shrink-0">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="font-bold text-sm">Become a Sponsor</p>
            <p className="text-xs text-gray-500">Showcase your brand to 300+ professionals</p>
          </div>
        </a>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('I want to become a partner')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all flex-shrink-0">
            <Handshake size={20} />
          </div>
          <div>
            <p className="font-bold text-sm">Become a Partner</p>
            <p className="text-xs text-gray-500">Partner with us for mutual growth</p>
          </div>
        </a>
      </div>
    </motion.div>
  </div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
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
    <>
    <AnimatePresence>
      {showGetInvolved && <GetInvolvedModal onClose={() => setShowGetInvolved(false)} />}
    </AnimatePresence>
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
          <button onClick={() => setShowGetInvolved(true)} className="bg-cmx-blue text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-bold hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">
            Get Involved
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
            <button onClick={() => { setIsMobileMenuOpen(false); setShowGetInvolved(true); }} className="bg-cmx-blue text-white px-6 py-3 rounded-xl font-bold mt-1">
              Get Involved
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
};
