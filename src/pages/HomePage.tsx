// import React, { useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import {
//   ArrowRight, Calendar, MapPin, Users, Zap, Globe, Shield,
//   Briefcase, Rocket, ChevronRight, Twitter, Linkedin,
//   Monitor, Building2,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { cn } from '../utils';

// import hero   from '/DSC00118.JPG';
// import past2  from '/R5__2057.JPG';
// import past3  from '/JKV_0236.jpg';
// import past4  from '/JKV_0237.jpg';
// import pic1   from '/DSC00417.JPG';
// import pic2   from '/DSC00472.JPG';
// import pic3   from '/JKV_0326.jpg';
// import pic4   from '/JKV_0374.jpg';
// import shirt  from '/CMXSHIRT2.webp';

// const CAROUSEL_IMAGES = [hero, pic2, past3, past4];
// const INTERVAL_MS = 3500;

// // ─── Hero ──────────────────────────────────────────────────────────────────────
// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     CAROUSEL_IMAGES.forEach((src) => { const img = new Image(); img.src = src; });
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentIndex((p) => (p + 1) % CAROUSEL_IMAGES.length), INTERVAL_MS);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
//       <div className="container-custom relative z-10">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

//           {/* Left content */}
//           <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cmx-blue/10 text-cmx-blue rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6">
//               The Premier Community Event in Nigeria
//             </div>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-5 sm:mb-6">
//               BEYOND THE <br /><span className="text-cmx-blue">HORIZON</span>
//             </h1>
//             <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
//               Redefining the strategic importance of community for businesses, entrepreneurs, and tech talent in the <b>Nigerian</b> ecosystem.
//             </p>
//             <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
//               <div className="flex items-center gap-2 sm:gap-3 bg-cmx-gray px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
//                 <Calendar className="text-cmx-blue flex-shrink-0" size={18} />
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-0.5">Date</p>
//                   <p className="text-xs sm:text-sm font-bold">Mon July 22nd - Sat 27th 2026</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 sm:gap-3 bg-cmx-gray px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
//                 <MapPin className="text-cmx-blue flex-shrink-0" size={18} />
//                 <div>
//                   <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-0.5">Location</p>
//                   <p className="text-xs sm:text-sm font-bold">Ibadan, Nigeria</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <button className="btn-primary flex items-center justify-center gap-2">
//                 Get Your Ticket <ArrowRight size={16} />
//               </button>
//               <button className="btn-outline" onClick={() => document.getElementById('structure')?.scrollIntoView({ behavior: 'smooth' })}>
//                 View Schedule
//               </button>
//             </div>
//           </motion.div>

//           {/* Right carousel */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="relative mt-8 lg:mt-0"
//           >
//             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/3]">
//               {CAROUSEL_IMAGES.map((src, i) => (
//                 <motion.img key={i} src={src} alt={`CMX Summit ${i + 1}`} referrerPolicy="no-referrer"
//                   className="w-full h-full object-cover absolute inset-0"
//                   initial={false}
//                   animate={{ opacity: i === currentIndex ? 1 : 0, scale: i === currentIndex ? 1 : 1.05 }}
//                   transition={{ duration: 2, ease: 'easeOut' }}
//                   style={{ zIndex: i === currentIndex ? 2 : 1 }}
//                 />
//               ))}
//             </div>
//             <div className="absolute -top-8 -right-8 w-32 h-32 bg-cmx-orange/20 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cmx-blue/20 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce">
//               <Users size={28} className="text-cmx-blue" />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Theme Section ─────────────────────────────────────────────────────────────
// const ThemeSection = () => (
//   <section className="py-10 sm:py-12 bg-cmx-blue text-white overflow-hidden">
//     <div className="container-custom">
//       <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
//         <div className="flex-shrink-0">
//           <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-2">2024 Theme</p>
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-black">BEYOND THE <br /> HORIZON</h2>
//         </div>
//         <div className="w-full md:w-px md:h-20 h-px bg-white/20" />
//         <p className="text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
//           <span className="font-bold">Community</span> as a <span className="font-bold">Growth Engine</span> for Business and Ecosystems.
//         </p>
//       </div>
//     </div>
//   </section>
// );

// // ─── About Preview ─────────────────────────────────────────────────────────────
// const AboutPreview = () => {
//   const navigate = useNavigate();
//   return (
//     <section id="about" className="py-16 sm:py-24 bg-cmx-gray">
//       <div className="container-custom">
//         <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">About the Summit</h2>
//           <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
//             The CMX Nigeria Summit is a landmark event designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent in the Nigerian tech ecosystem.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
//           {[
//             { icon: <Users className="text-cmx-blue" />, title: 'Connect', desc: 'Network with over 300+ community professionals and industry leaders from across Nigeria.' },
//             { icon: <Zap className="text-cmx-blue" />, title: 'Learn', desc: 'Gain insights from global experts on building sustainable ecosystems through 5 virtual masterclasses.' },
//             { icon: <Rocket className="text-cmx-blue" />, title: 'Grow', desc: 'Elevate your career and business through strategic community integration and cross-sector collaboration.' },
//           ].map((item, i) => (
//             <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-cmx-blue/5 rounded-2xl flex items-center justify-center mb-5">{item.icon}</div>
//               <h3 className="text-xl sm:text-2xl mb-3">{item.title}</h3>
//               <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center">
//           <button onClick={() => navigate('/about')} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-7 py-3.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base">
//             View More <ChevronRight size={16} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Event Structure ───────────────────────────────────────────────────────────
// const EventStructure = () => {
//   const days = [
//     { day: 1, title: 'Community Strategy & ROI', desc: 'How to build community programs that deliver measurable business value.', tag: 'Virtual' },
//     { day: 2, title: 'HR & People Operations', desc: 'Integrating community thinking into talent acquisition and employee experience.', tag: 'Virtual' },
//     { day: 3, title: 'Product & Community Synergy', desc: 'How product managers and community managers co-create better products.', tag: 'Virtual' },
//     { day: 4, title: 'Founder-led Communities', desc: 'Building movements and ecosystems that outlast early-stage hype.', tag: 'Virtual' },
//     { day: 5, title: 'Future of Community Tech', desc: 'AI, tools, platforms and what community management looks like in 2030.', tag: 'Virtual' },
//     { day: 6, title: 'Physical Summit — Ibadan', desc: 'High-value networking, deal-making, keynotes and ecosystem convergence.', tag: 'In-Person' },
//   ];

//   return (
//     <section id="structure" className="py-16 sm:py-24 bg-white">
//       <div className="container-custom">
//         <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cmx-blue/10 text-cmx-blue rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5">
//             <Calendar size={12} /> 6-Day Experience
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Summit Structure</h2>
//           <p className="text-sm sm:text-lg text-gray-500">A carefully designed journey — 5 days of virtual masterclasses followed by 1 high-energy physical day in Ibadan.</p>
//         </div>
//         <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
//           <div className="bg-cmx-blue text-white rounded-[2rem] p-7 sm:p-10 flex gap-5 items-start">
//             <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Monitor size={24} /></div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1.5">Days 1–5</p>
//               <h3 className="text-xl sm:text-2xl font-black mb-2">Virtual Masterclasses</h3>
//               <p className="text-white/80 leading-relaxed text-sm">Focused, practical, outcome-driven sessions led by Nigeria's foremost community and tech professionals.</p>
//             </div>
//           </div>
//           <div className="bg-cmx-orange text-white rounded-[2rem] p-7 sm:p-10 flex gap-5 items-start">
//             <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Building2 size={24} /></div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1.5">Day 6</p>
//               <h3 className="text-xl sm:text-2xl font-black mb-2">Physical Summit — Ibadan</h3>
//               <p className="text-white/80 leading-relaxed text-sm">High-value networking, deal-making, showcases and ecosystem convergence.</p>
//             </div>
//           </div>
//         </div>
//         <div className="space-y-3 sm:space-y-4">
//           {days.map((d, i) => (
//             <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//               className={cn('flex items-start gap-4 sm:gap-6 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all hover:shadow-md', d.tag === 'In-Person' ? 'bg-cmx-orange/5 border-cmx-orange/20' : 'bg-cmx-gray border-gray-100')}
//             >
//               <div className={cn('w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 font-black', d.tag === 'In-Person' ? 'bg-cmx-orange' : 'bg-cmx-blue')}>
//                 <span className="text-[8px] sm:text-[10px] uppercase font-bold opacity-70">Day</span>
//                 <span className="text-base sm:text-xl">{d.day}</span>
//               </div>
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2 mb-1 flex-wrap">
//                   <h3 className="text-sm sm:text-lg font-bold">{d.title}</h3>
//                   <span className={cn('text-[9px] sm:text-[10px] uppercase font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap', d.tag === 'In-Person' ? 'bg-cmx-orange/10 text-cmx-orange' : 'bg-cmx-blue/10 text-cmx-blue')}>{d.tag}</span>
//                 </div>
//                 <p className="text-gray-500 text-xs sm:text-sm">{d.desc}</p>
//               </div>
//               {d.tag === 'In-Person' && <div className="hidden sm:flex items-center gap-1 text-cmx-orange font-bold text-xs flex-shrink-0"><MapPin size={14} /> Ibadan</div>}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── What to Expect ────────────────────────────────────────────────────────────
// const WhatToExpect = () => {
//   const expectations = [
//     { title: 'Industry Education', desc: 'Deep dives into the latest community management trends and strategies.', icon: <Briefcase size={22} /> },
//     { title: 'Professional Elevation', desc: 'Workshops designed to sharpen your leadership and management skills.', icon: <Zap size={22} /> },
//     { title: 'Future of Networking', desc: 'Experience new ways of connecting that go beyond simple business cards.', icon: <Users size={22} /> },
//     { title: 'Ecosystem Sustainability', desc: 'Learning how to build communities that thrive in the long term.', icon: <Globe size={22} /> },
//     { title: 'Cross-Functional Integration', desc: 'How community fits into product, marketing, and engineering.', icon: <Shield size={22} /> },
//   ];

//   return (
//     <section id="expect" className="py-16 sm:py-24">
//       <div className="container-custom">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
//           <div className="max-w-2xl">
//             <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 leading-tight">What to <span className="text-cmx-blue italic">Expect</span></h2>
//             <p className="text-sm sm:text-lg text-gray-500">A curated experience designed for the modern community professional.</p>
//           </div>
//           <div className="hidden md:block flex-shrink-0">
//             <div className="w-20 h-20 border-2 border-cmx-blue rounded-full flex items-center justify-center animate-spin-slow">
//               <ArrowRight className="text-cmx-blue -rotate-45" size={18} />
//             </div>
//           </div>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {expectations.map((item, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//               className={cn('p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-500', i === 0 ? 'bg-cmx-blue text-white border-cmx-blue' : 'bg-white border-gray-100 hover:border-cmx-blue/30')}
//             >
//               <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', i === 0 ? 'bg-white/20' : 'bg-cmx-blue/5 text-cmx-blue')}>{item.icon}</div>
//               <h3 className="text-xl sm:text-2xl mb-3">{item.title}</h3>
//               <p className={cn('leading-relaxed text-sm sm:text-base', i === 0 ? 'text-white/80' : 'text-gray-500')}>{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Target Audience ───────────────────────────────────────────────────────────
// const TargetAudience = () => {
//   const audiences = [
//     { title: 'Community Managers', icon: <Users size={18} /> },
//     { title: 'HR Professionals',   icon: <Briefcase size={18} /> },
//     { title: 'Project Managers',   icon: <Zap size={18} /> },
//     { title: 'Product Managers',   icon: <Rocket size={18} /> },
//     { title: 'Founders',           icon: <Globe size={18} /> },
//   ];

//   return (
//     <section className="py-16 sm:py-24 bg-white overflow-hidden">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <div>
//             <h2 className="text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-8">Who is this summit <span className="text-cmx-blue italic">designed for?</span></h2>
//             <p className="text-sm sm:text-lg text-gray-500 mb-8 sm:mb-10">Whether you're building a community from scratch or scaling a global ecosystem, this summit provides the tools and network you need.</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {audiences.map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-cmx-gray hover:bg-cmx-blue hover:text-white transition-all group">
//                   <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-cmx-blue group-hover:bg-white/20 group-hover:text-white flex-shrink-0">{item.icon}</div>
//                   <span className="font-bold text-sm sm:text-base">{item.title}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative pb-10 sm:pb-14 mt-8 lg:mt-0">
//             <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
//               <img src={past2} className="w-full h-auto" referrerPolicy="no-referrer" />
//             </div>
//             <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-cmx-orange text-white p-5 sm:p-8 rounded-3xl shadow-xl max-w-[180px] sm:max-w-xs">
//               <p className="text-[10px] sm:text-sm font-bold uppercase tracking-widest mb-1">Limited Seats</p>
//               <p className="text-lg sm:text-2xl font-black">Join 300+ Industry Peers</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Speakers Preview ──────────────────────────────────────────────────────────
// const SpeakersPreview = () => {
//   const navigate = useNavigate();
//   const speakers = [
//     { name: 'Samson Goddy',      role: 'Co-Founder, Open Source Nigeria',       seed: past3 },
//     { name: 'Timothy Oviem',     role: 'Lead, Community Leads in Nigeria',       seed: past3 },
//     { name: 'Haneefah A. Lekki', role: 'Programs & Community Manager',          seed: past3 },
//     { name: 'Mfonobong Umondia', role: 'Community Manager, She Code Nigeria',    seed: past3 },
//   ];

//   return (
//     <section id="speakers" className="py-16 sm:py-24 bg-cmx-dark text-white overflow-hidden">
//       <div className="container-custom">
//         <div className="mb-10 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">Our Speakers</h2>
//           <p className="text-gray-400 max-w-xl text-sm sm:text-base">Learn from the brightest minds in the community and tech landscape.</p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mb-10 sm:mb-12">
//           {speakers.map((speaker, i) => (
//             <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group cursor-pointer">
//               <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden mb-3">
//                 <img src={speaker.seed} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-cmx-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//                   <div className="flex gap-2">
//                     <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Twitter size={12} /></div>
//                     <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Linkedin size={12} /></div>
//                   </div>
//                 </div>
//               </div>
//               <h4 className="text-sm sm:text-lg font-bold mb-0.5 leading-tight">{speaker.name}</h4>
//               <p className="text-xs sm:text-sm text-gray-500 leading-tight">{speaker.role}</p>
//             </motion.div>
//           ))}
//         </div>
//         <div className="text-center">
//           <button onClick={() => navigate('/speakers')} className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-full font-bold hover:bg-white hover:text-cmx-dark transition-all text-sm sm:text-base">
//             View All Speakers <ChevronRight size={16} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Highlights Preview ────────────────────────────────────────────────────────
// const HighlightsPreview = () => {
//   const navigate = useNavigate();
//   return (
//     <section id="highlights" className="py-16 sm:py-24">
//       <div className="container-custom">
//         <div className="text-center mb-10 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Past Event Highlights</h2>
//           <p className="text-gray-500 text-sm sm:text-base">A glimpse into the energy and impact of CMX Nigeria.</p>
//         </div>
//         {/* Mobile: single column stack. Tablet+: 2-col grid. Desktop: 4-col grid */}
//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
//           <div className="col-span-2 row-span-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer min-h-[200px] sm:min-h-[280px]">
//             <img src={past4} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
//           </div>
//           <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer h-32 sm:h-auto">
//             <img src={pic4} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
//           </div>
//           <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer h-32 sm:h-auto">
//             <img src={pic3} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
//           </div>
//           <div className="col-span-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden h-40 sm:h-56 md:h-64 group cursor-pointer">
//             <img src={pic1} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
//           </div>
//         </div>
//         {/* Mobile-only: simple 2-col grid */}
//         <div className="grid grid-cols-2 gap-3 mb-8 sm:hidden">
//           {[past4, pic4, pic3, pic1].map((img, i) => (
//             <div key={i} className="rounded-2xl overflow-hidden h-36">
//               <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
//             </div>
//           ))}
//         </div>
//         <div className="text-center">
//           <button onClick={() => navigate('/highlights')} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-7 py-3.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base">
//             View All Highlights <ChevronRight size={16} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ─── Swags ─────────────────────────────────────────────────────────────────────
// const Swags = () => (
//   <section className="py-16 sm:py-24 bg-cmx-gray">
//     <div className="container-custom">
//       <div className="bg-cmx-blue rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 shadow-xl overflow-hidden relative">
//         <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
//           <div>
//             <div className="inline-block px-3 py-1.5 bg-cmx-orange text-cmx-gray rounded-full text-[10px] sm:text-xs font-bold uppercase mb-5">Exclusive Perks</div>
//             <h2 className="text-3xl sm:text-4xl text-cmx-gray md:text-5xl mb-4 sm:mb-6">Premium Swags & Goodies</h2>
//             <p className="text-sm sm:text-lg text-cmx-gray mb-6 sm:mb-8">Every attendee gets a curated CMX Nigeria gift box featuring exclusive merchandise, partner discounts, and more.</p>
//             <div className="flex gap-3 sm:gap-4">
//               {[{ icon: <Zap className="text-cmx-blue" />, label: 'T-Shirts' }, { icon: <Globe className="text-cmx-blue" />, label: 'Notebooks' }, { icon: <Rocket className="text-cmx-blue" />, label: 'Stickers' }].map((item, i) => (
//                 <div key={i} className="text-center">
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">{item.icon}</div>
//                   <p className="text-cmx-gray text-[10px] sm:text-xs font-bold">{item.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative mt-4 md:mt-0">
//             <img src={shirt} className="rounded-2xl sm:rounded-3xl shadow-lg w-full" referrerPolicy="no-referrer" />
//             <div className="absolute top-3 right-3 bg-cmx-blue text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold">Limited Edition</div>
//           </div>
//         </div>
//         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cmx-blue/5 rounded-full pointer-events-none" />
//       </div>
//     </div>
//   </section>
// );

// // ─── Sponsorship ───────────────────────────────────────────────────────────────
// const Sponsorship = () => (
//   <section className="py-16 sm:py-24 bg-cmx-blue text-white">
//     <div className="container-custom">
//       <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start">
//         <div>
//           <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">Partner with Us</h2>
//           <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">Join us in shaping the future of community in Nigeria. Showcase your brand to 300+ professionals.</p>
//           <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
//             {[
//               'Logo on all event materials (banners, tags, fliers, souvenirs)',
//               'Exclusive website slot & social media shout-outs',
//               'Screen visibility throughout the event',
//               'Exhibition booth with dedicated representative',
//               'Keynote brand presentation on main stage',
//               'Customised newsletter to all attendees pre- and post-event',
//               'Featured full-page slot in digital e-magazine',
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-3">
//                 <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><ChevronRight size={12} /></div>
//                 <span className="font-semibold text-sm sm:text-base">{item}</span>
//               </li>
//             ))}
//           </ul>
//           <button className="bg-white text-cmx-blue px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:shadow-2xl transition-all text-sm sm:text-base w-full sm:w-auto">Become a Sponsor</button>
//         </div>
//         <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/20 hidden lg:block">
//           <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8">Sponsorship Tiers</h3>
//           <div className="space-y-4 sm:space-y-6">
//             {[
//               { name: 'Platinum', benefits: 'Main stage branding, keynote slot + 10 tickets' },
//               { name: 'Gold',     benefits: 'Workshop branding, exhibition booth + 5 tickets' },
//               { name: 'Silver',   benefits: 'Logo on materials, social shout-outs + 2 tickets' },
//             ].map((tier, i) => (
//               <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
//                 <h4 className="text-lg sm:text-xl font-bold mb-1">{tier.name}</h4>
//                 <p className="text-xs sm:text-sm text-white/60">{tier.benefits}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default function HomePage() {
//   return (
//     <main>
//       <Hero />
//       <ThemeSection />
//       <AboutPreview />
//       <EventStructure />
//       <WhatToExpect />
//       <TargetAudience />
//       {/* <SpeakersPreview /> */}
//       <HighlightsPreview />
//       <Swags />
//       <Sponsorship />
//     </main>
//   );
// }





import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Calendar, MapPin, Users, Zap, Globe, Shield,
  Briefcase, Rocket, ChevronRight, Twitter, Linkedin,
  Monitor, Building2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';

import hero   from '/DSC00118.JPG';
import past2  from '/R5__2057.JPG';
import past3  from '/JKV_0236.jpg';
import past4  from '/JKV_0237.jpg';
import pic1   from '/cmx1.jpg';
import pic2   from '/DSC00472.JPG';
import pic3   from '/cmx2.jpg';
import pic4   from '/JKV_0374.jpg';
import shirt  from '/CMXSHIRT2.webp';
import cmxSummitImg from '/cmx3.jpg';

const CAROUSEL_IMAGES = [hero, pic2, past3, past4];
const INTERVAL_MS = 3500;

// ─── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    CAROUSEL_IMAGES.forEach((src) => { const img = new Image(); img.src = src; });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((p) => (p + 1) % CAROUSEL_IMAGES.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cmx-blue/10 text-cmx-blue rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6">
              The Premier Community Event in Nigeria
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-5 sm:mb-6">
              BEYOND THE <br /><span className="text-cmx-blue">HORIZON</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Redefining the strategic importance of community for businesses, entrepreneurs, and tech talent in the <b>Nigerian</b> ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 bg-cmx-gray px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
                <Calendar className="text-cmx-blue flex-shrink-0" size={18} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-0.5">Date</p>
                  <p className="text-xs sm:text-sm font-bold">Mon 13th - 18th July, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-cmx-gray px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
                <MapPin className="text-cmx-blue flex-shrink-0" size={18} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-0.5">Location</p>
                  <p className="text-xs sm:text-sm font-bold">Ibadan, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Get Your Ticket <ArrowRight size={16} />
              </button>
              <button className="btn-outline" onClick={() => document.getElementById('structure')?.scrollIntoView({ behavior: 'smooth' })}>
                View Schedule
              </button>
            </div>
          </motion.div>

          {/* Right carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/3]">
              {CAROUSEL_IMAGES.map((src, i) => (
                <motion.img key={i} src={src} alt={`CMX Summit ${i + 1}`} referrerPolicy="no-referrer"
                  className="w-full h-full object-cover absolute inset-0"
                  initial={false}
                  animate={{ opacity: i === currentIndex ? 1 : 0, scale: i === currentIndex ? 1 : 1.05 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  style={{ zIndex: i === currentIndex ? 2 : 1 }}
                />
              ))}
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cmx-orange/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cmx-blue/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20 animate-bounce">
              <Users size={28} className="text-cmx-blue" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// ─── Theme Section ─────────────────────────────────────────────────────────────
const ThemeSection = () => (
  <section className="py-10 sm:py-12 bg-cmx-blue text-white overflow-hidden">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
        <div className="flex-shrink-0">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-60 mb-2">2024 Theme</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black">BEYOND THE <br /> HORIZON</h2>
        </div>
        <div className="w-full md:w-px md:h-20 h-px bg-white/20" />
        <p className="text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
          <span className="font-bold">Community</span> as a <span className="font-bold">Growth Engine</span> for Business and Ecosystems.
        </p>
      </div>
    </div>
  </section>
);

// ─── About Preview ─────────────────────────────────────────────────────────────
const AboutPreview = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-16 sm:py-24 bg-cmx-gray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">About the Summit</h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            The CMX Nigeria Summit is a landmark event designed to redefine the strategic importance of community for businesses, entrepreneurs, and tech talent in the Nigerian tech ecosystem.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: <Users className="text-cmx-blue" />, title: 'Connect', desc: 'Network with over 300+ community professionals and industry leaders from across Nigeria.' },
            { icon: <Zap className="text-cmx-blue" />, title: 'Learn', desc: 'Gain insights from global experts on building sustainable ecosystems through 5 virtual masterclasses.' },
            { icon: <Rocket className="text-cmx-blue" />, title: 'Grow', desc: 'Elevate your career and business through strategic community integration and cross-sector collaboration.' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-cmx-blue/5 rounded-2xl flex items-center justify-center mb-5">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/about')} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-7 py-3.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base">
            View More <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Event Structure ───────────────────────────────────────────────────────────
const EventStructure = () => {
  const days = [
    { day: 1, title: 'Community Strategy & ROI', desc: 'How to build community programs that deliver measurable business value.', tag: 'Virtual' },
    { day: 2, title: 'HR & People Operations', desc: 'Integrating community thinking into talent acquisition and employee experience.', tag: 'Virtual' },
    { day: 3, title: 'Product & Community Synergy', desc: 'How product managers and community managers co-create better products.', tag: 'Virtual' },
    { day: 4, title: 'Founder-led Communities', desc: 'Building movements and ecosystems that outlast early-stage hype.', tag: 'Virtual' },
    { day: 5, title: 'Future of Community Tech', desc: 'AI, tools, platforms and what community management looks like in 2030.', tag: 'Virtual' },
    { day: 6, title: 'Physical Summit — Ibadan', desc: 'High-value networking, deal-making, keynotes and ecosystem convergence.', tag: 'In-Person' },
  ];

  return (
    <section id="structure" className="py-16 sm:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cmx-blue/10 text-cmx-blue rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5">
            <Calendar size={12} /> 6-Day Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Summit Structure</h2>
          <p className="text-sm sm:text-lg text-gray-500">A carefully designed journey — 5 days of virtual masterclasses followed by 1 high-energy physical day in Ibadan.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div className="bg-cmx-blue text-white rounded-[2rem] p-7 sm:p-10 flex gap-5 items-start">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Monitor size={24} /></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1.5">Days 1–5</p>
              <h3 className="text-xl sm:text-2xl font-black mb-2">Virtual Masterclasses</h3>
              <p className="text-white/80 leading-relaxed text-sm">Focused, practical, outcome-driven sessions led by Nigeria's foremost community and tech professionals.</p>
            </div>
          </div>
          <div className="bg-cmx-orange text-white rounded-[2rem] p-7 sm:p-10 flex gap-5 items-start">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0"><Building2 size={24} /></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1.5">Day 6</p>
              <h3 className="text-xl sm:text-2xl font-black mb-2">Physical Summit — Ibadan</h3>
              <p className="text-white/80 leading-relaxed text-sm">High-value networking, deal-making, showcases and ecosystem convergence.</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {days.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={cn('flex items-start gap-4 sm:gap-6 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all hover:shadow-md', d.tag === 'In-Person' ? 'bg-cmx-orange/5 border-cmx-orange/20' : 'bg-cmx-gray border-gray-100')}
            >
              <div className={cn('w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0 font-black', d.tag === 'In-Person' ? 'bg-cmx-orange' : 'bg-cmx-blue')}>
                <span className="text-[8px] sm:text-[10px] uppercase font-bold opacity-70">Day</span>
                <span className="text-base sm:text-xl">{d.day}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-sm sm:text-lg font-bold">{d.title}</h3>
                  <span className={cn('text-[9px] sm:text-[10px] uppercase font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap', d.tag === 'In-Person' ? 'bg-cmx-orange/10 text-cmx-orange' : 'bg-cmx-blue/10 text-cmx-blue')}>{d.tag}</span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm">{d.desc}</p>
              </div>
              {d.tag === 'In-Person' && <div className="hidden sm:flex items-center gap-1 text-cmx-orange font-bold text-xs flex-shrink-0"><MapPin size={14} /> Ibadan</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── What to Expect ────────────────────────────────────────────────────────────
const WhatToExpect = () => {
  const expectations = [
    { title: 'Industry Education', desc: 'Deep dives into the latest community management trends and strategies.', icon: <Briefcase size={22} /> },
    { title: 'Professional Elevation', desc: 'Workshops designed to sharpen your leadership and management skills.', icon: <Zap size={22} /> },
    { title: 'Future of Networking', desc: 'Experience new ways of connecting that go beyond simple business cards.', icon: <Users size={22} /> },
    { title: 'Ecosystem Sustainability', desc: 'Learning how to build communities that thrive in the long term.', icon: <Globe size={22} /> },
    { title: 'Cross-Functional Integration', desc: 'How community fits into product, marketing, and engineering.', icon: <Shield size={22} /> },
  ];

  return (
    <section id="expect" className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 leading-tight">What to <span className="text-cmx-blue italic">Expect</span></h2>
            <p className="text-sm sm:text-lg text-gray-500">A curated experience designed for the modern community professional.</p>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <div className="w-20 h-20 border-2 border-cmx-blue rounded-full flex items-center justify-center animate-spin-slow">
              <ArrowRight className="text-cmx-blue -rotate-45" size={18} />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {expectations.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={cn('p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-500', i === 0 ? 'bg-cmx-blue text-white border-cmx-blue' : 'bg-white border-gray-100 hover:border-cmx-blue/30')}
            >
              <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', i === 0 ? 'bg-white/20' : 'bg-cmx-blue/5 text-cmx-blue')}>{item.icon}</div>
              <h3 className="text-xl sm:text-2xl mb-3">{item.title}</h3>
              <p className={cn('leading-relaxed text-sm sm:text-base', i === 0 ? 'text-white/80' : 'text-gray-500')}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Target Audience ───────────────────────────────────────────────────────────
const TargetAudience = () => {
  const audiences = [
    { title: 'Community Managers', icon: <Users size={18} /> },
    { title: 'HR Professionals',   icon: <Briefcase size={18} /> },
    { title: 'Project Managers',   icon: <Zap size={18} /> },
    { title: 'Product Managers',   icon: <Rocket size={18} /> },
    { title: 'Founders',           icon: <Globe size={18} /> },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-8">Who is this summit <span className="text-cmx-blue italic">designed for?</span></h2>
            <p className="text-sm sm:text-lg text-gray-500 mb-8 sm:mb-10">Whether you're building a community from scratch or scaling a global ecosystem, this summit provides the tools and network you need.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audiences.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-cmx-gray hover:bg-cmx-blue hover:text-white transition-all group">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-cmx-blue group-hover:bg-white/20 group-hover:text-white flex-shrink-0">{item.icon}</div>
                  <span className="font-bold text-sm sm:text-base">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative pb-10 sm:pb-14 mt-8 lg:mt-0">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src={past2} className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-cmx-orange text-white p-5 sm:p-8 rounded-3xl shadow-xl max-w-[180px] sm:max-w-xs">
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-widest mb-1">Limited Seats</p>
              <p className="text-lg sm:text-2xl font-black">Join 300+ Industry Peers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Speakers Preview ──────────────────────────────────────────────────────────
const SpeakersPreview = () => {
  const navigate = useNavigate();
  const speakers = [
    { name: 'Samson Goddy',      role: 'Co-Founder, Open Source Nigeria',       seed: past3 },
    { name: 'Timothy Oviem',     role: 'Lead, Community Leads in Nigeria',       seed: past3 },
    { name: 'Haneefah A. Lekki', role: 'Programs & Community Manager',          seed: past3 },
    { name: 'Mfonobong Umondia', role: 'Community Manager, She Code Nigeria',    seed: past3 },
  ];

  return (
    <section id="speakers" className="py-16 sm:py-24 bg-cmx-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4">Our Speakers</h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base">Learn from the brightest minds in the community and tech landscape.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mb-10 sm:mb-12">
          {speakers.map((speaker, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden mb-3">
                <img src={speaker.seed} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cmx-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Twitter size={12} /></div>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"><Linkedin size={12} /></div>
                  </div>
                </div>
              </div>
              <h4 className="text-sm sm:text-lg font-bold mb-0.5 leading-tight">{speaker.name}</h4>
              <p className="text-xs sm:text-sm text-gray-500 leading-tight">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/speakers')} className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-full font-bold hover:bg-white hover:text-cmx-dark transition-all text-sm sm:text-base">
            View All Speakers <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Highlights Preview ────────────────────────────────────────────────────────
const HighlightsPreview = () => {
  const navigate = useNavigate();
  return (
    <section id="highlights" className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Past Event Highlights</h2>
          <p className="text-gray-500 text-sm sm:text-base">A glimpse into the energy and impact of CMX Nigeria.</p>
        </div>
        {/* Mobile: single column stack. Tablet+: 2-col grid. Desktop: 4-col grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="col-span-2 row-span-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer min-h-[200px] sm:min-h-[280px]">
            <img src={past4} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer h-32 sm:h-auto">
            <img src={pic4} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden group cursor-pointer h-32 sm:h-auto">
            <img src={pic3} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden h-40 sm:h-56 md:h-64 group cursor-pointer">
            <img src={pic1} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out" referrerPolicy="no-referrer" />
          </div>
        </div>
        {/* Mobile-only: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-3 mb-8 sm:hidden">
          {[past4, pic4, pic3, pic1].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-36">
              <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/highlights')} className="inline-flex items-center gap-2 bg-cmx-blue text-white px-7 py-3.5 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base">
            View All Highlights <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Swags ─────────────────────────────────────────────────────────────────────
const Swags = () => (
  <section className="py-16 sm:py-24 bg-cmx-gray">
    <div className="container-custom">
      <div className="bg-cmx-blue rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 shadow-xl overflow-hidden relative">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1.5 bg-cmx-orange text-cmx-gray rounded-full text-[10px] sm:text-xs font-bold uppercase mb-5">Exclusive Perks</div>
            <h2 className="text-3xl sm:text-4xl text-cmx-gray md:text-5xl mb-4 sm:mb-6">Premium Swags & Goodies</h2>
            <p className="text-sm sm:text-lg text-cmx-gray mb-6 sm:mb-8">Every attendee gets a curated CMX Nigeria gift box featuring exclusive merchandise, partner discounts, and more.</p>
            <div className="flex gap-3 sm:gap-4">
              {[{ icon: <Zap className="text-cmx-blue" />, label: 'T-Shirts' }, { icon: <Globe className="text-cmx-blue" />, label: 'Notebooks' }, { icon: <Rocket className="text-cmx-blue" />, label: 'Stickers' }].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cmx-gray rounded-2xl flex items-center justify-center mb-2 mx-auto">{item.icon}</div>
                  <p className="text-cmx-gray text-[10px] sm:text-xs font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-4 md:mt-0">
            <img src={shirt} className="rounded-2xl sm:rounded-3xl shadow-lg w-full" referrerPolicy="no-referrer" />
            <div className="absolute top-3 right-3 bg-cmx-blue text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold">Limited Edition</div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cmx-blue/5 rounded-full pointer-events-none" />
      </div>
    </div>
  </section>
);

// ─── Sponsorship ───────────────────────────────────────────────────────────────
const Sponsorship = () => (
  <section className="py-16 sm:py-24 bg-cmx-blue text-white">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">Partner with Us</h2>
          <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8">Join us in shaping the future of community in Nigeria. Showcase your brand to 300+ professionals.</p>
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {[
              'Logo on all event materials (banners, tags, fliers, souvenirs)',
              'Exclusive website slot & social media shout-outs',
              'Screen visibility throughout the event',
              'Exhibition booth with dedicated representative',
              'Keynote brand presentation on main stage',
              'Customised newsletter to all attendees pre- and post-event',
              'Featured full-page slot in digital e-magazine',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><ChevronRight size={12} /></div>
                <span className="font-semibold text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-cmx-blue px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:shadow-2xl transition-all text-sm sm:text-base w-full sm:w-auto">Become a Sponsor</button>
        </div>
        <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/20 hidden lg:block">
          <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8">Sponsorship Tiers</h3>
          <div className="space-y-4 sm:space-y-6">
            {[
              { name: 'Platinum', benefits: 'Main stage branding, keynote slot + 10 tickets' },
              { name: 'Gold',     benefits: 'Workshop branding, exhibition booth + 5 tickets' },
              { name: 'Silver',   benefits: 'Logo on materials, social shout-outs + 2 tickets' },
            ].map((tier, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-lg sm:text-xl font-bold mb-1">{tier.name}</h4>
                <p className="text-xs sm:text-sm text-white/60">{tier.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── CMX Global Summit ─────────────────────────────────────────────────────────
// const CMXGlobalSummit = () => (
//   <section className="py-16 sm:py-24 bg-white overflow-hidden">
//     <div className="container-custom">
//       <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//         {/* Left: Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
//             <img src={cmxSummitImg} alt="CMX Global Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
//           </div>
//           <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cmx-blue/20 rounded-full blur-2xl pointer-events-none" />
//           <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl pointer-events-none" />
//         </motion.div>

//         {/* Right: CMX 26 styled text */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
//           className="flex flex-col items-start"
//         >
//           {/* CMX 26 Summit badge-style header */}
//           <div className="mb-6 sm:mb-8">
//             <div className="inline-flex items-center gap-2 mb-4">
//               <span className="text-4xl sm:text-5xl font-black tracking-tight">cmx</span>
//               <span className="bg-cmx-blue text-white text-lg sm:text-2xl font-black px-3 py-1 rounded-xl">26</span>
//             </div>
//             <div>
//               <p className="text-4xl sm:text-5xl font-black tracking-tight leading-none -mt-2">summit</p>
//             </div>
//           </div>

//           {/* Location & Date pill */}
//           <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-5">
//             <MapPin size={14} className="text-cmx-blue flex-shrink-0" />
//             Redwood City, CA &bull; April 30 &amp; May 1, 2026
//           </div>

//           {/* Tagline */}
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-6 sm:mb-8">
//             The Premier Event for<br />
//             <span className="text-cmx-blue">Community-Led Growth</span>
//           </h2>

//           {/* CTA */}
//           <a
//             href="https://www.cmxhub.com/summit"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-cmx-blue text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-xl hover:scale-105 transition-all"
//           >
//             Register Here <ArrowRight size={16} />
//           </a>
//         </motion.div>

//       </div>
//     </div>
//   </section>
// );

const CMXGlobalSummit = () => (
  <section className="py-16 sm:py-24 bg-white overflow-hidden">
    <div className="container-custom">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cmx-blue/10 text-cmx-blue rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
          <Globe size={12} /> Global Event
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">CMX Global Summit</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src={cmxSummitImg} alt="CMX Global Summit" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cmx-blue/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl pointer-events-none" />
        </motion.div>

        {/* Right: CMX 26 styled text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-start"
        >
          {/* CMX 26 Summit badge-style header */}
          <div className="mb-6 sm:mb-8 leading-none">
            <div className="flex items-center gap-3 mb-1">
              <span style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
                cmx
              </span>
              <span
                className="bg-cmx-blue text-white rounded-2xl"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, padding: '0.2rem 0.7rem', lineHeight: 1.2 }}
              >
                26
              </span>
            </div>
            <p style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginTop: '-0.05em' }}>
              summit
            </p>
          </div>

          {/* Location & Date pill */}
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-5">
            <MapPin size={14} className="text-cmx-blue flex-shrink-0" />
            Redwood City, CA &bull; April 30 &amp; May 1, 2026
          </div>

          {/* Tagline */}
          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 900, lineHeight: 1.2 }} className="mb-6 sm:mb-8">
            The Premier Event for<br />
            <span className="text-cmx-blue">Community-Led Growth</span>
          </p>

          {/* CTA */}
          
          <a href="https://www.cmxhub.com/summit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cmx-blue text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-xl hover:scale-105 transition-all"
          >
            Register Here <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </div>
  </section>
);


export default function HomePage() {
  return (
    <main>
      <Hero />
      <ThemeSection />
      <AboutPreview />
      <EventStructure />
      <WhatToExpect />
      <TargetAudience />
      {/* <SpeakersPreview /> */}
      <HighlightsPreview />
      <Swags />
      <Sponsorship />
      <CMXGlobalSummit />
    </main>
  );
}
