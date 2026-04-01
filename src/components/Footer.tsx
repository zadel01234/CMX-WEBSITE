import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

// import logo2 from '/CMXConnectIbadanLogo2.webp';
import logo2 from '/CMXLOGO.png';

export const Footer = () => (
  <footer className="py-16 bg-cmx-gray">
    <div className="container-custom">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="sm:col-span-2">
          <div className="mb-5">
            <img src={logo2} alt="CMX Summit" className="h-14 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <p className="text-gray-500 max-w-sm mb-6 text-sm leading-relaxed">The premier community for community professionals in Nigeria. Building the future of connection.</p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><Link to="/about"      className="hover:text-cmx-blue transition-colors">About Us</Link></li>
            <li><Link to="/speakers"   className="hover:text-cmx-blue transition-colors">Speakers</Link></li>
            <li><Link to="/highlights" className="hover:text-cmx-blue transition-colors">Highlights</Link></li>
            <li><a href="#"            className="hover:text-cmx-blue transition-colors">Tickets</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Contact</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>Ibadan, Nigeria</li>
            <li>hello@cmxnigeria.com</li>
            <li>+234 812 305 1357</li>
          </ul>
        </div>
      </div>
      <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
        <p>© 2024 CMX Nigeria. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cmx-blue">Privacy Policy</a>
          <a href="#" className="hover:text-cmx-blue">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
