// import React from 'react';
// import { motion } from 'motion/react';
// import { Twitter, Linkedin } from 'lucide-react';

// import past2 from '/R5__2057.jpg';
// import pic1 from '/DSC00417.jpg';

// export default function SpeakersPage() {
//   const speakers = [
//     { name: 'Samson Goddy',         role: 'Co-Founder, Open Source Nigeria',        bio: 'Software engineer and community builder who co-founded Open Source Nigeria, championing open source culture across the continent.',                                         seed: past2, track: 'Community Strategy' },
//     { name: 'Timothy Oviem',        role: 'Lead, Community Leads in Nigeria',        bio: "Leads one of Nigeria's most active community-of-practice networks, helping community professionals upskill and find their place in the ecosystem.",                          seed: past2, track: 'Community Leadership' },
//     { name: 'Haneefah A. Lekki',    role: 'Programs & Community Manager',           bio: 'Has managed programs and communities across multiple tech organisations, bridging the gap between operations and people-first culture.',                                     seed: past2, track: 'People & Programs' },
//     { name: 'Mfonobong Umondia',    role: 'Community Manager, She Code Nigeria',     bio: 'Drives community engagement and inclusion at She Code Nigeria, empowering women in tech across the continent.',                                                               seed: pic1,  track: 'Inclusion & Diversity' },
//     { name: 'Ayomide Ogunrinola',   role: 'Community Manager, WITECH',              bio: 'Builds and nurtures the WITECH community, creating spaces for women in tech to thrive, collaborate, and lead.',                                                              seed: past2, track: 'Community Building' },
//     { name: 'Olawale Omotoso',      role: 'Director of Product Management',         bio: 'Brings a cross-functional perspective on how community integrates into product roadmaps and business strategy.',                                                              seed: past2, track: 'Product & Community' },
//     { name: 'Olabanji Ewenla',      role: 'Lead Product Manager, Enoverlab',        bio: 'Shapes the product vision at Enoverlab while championing community-led growth as a core business strategy.',                                                                 seed: past2, track: 'Product Strategy' },
//     { name: 'Florence Ogunbore',    role: 'Product Manager',                        bio: 'Practitioner at the intersection of product management and community, exploring how both disciplines amplify each other.',                                                    seed: past2, track: 'Product & People' },
//     { name: 'Emmanuel Faith',       role: 'Lead Consultant, VisitHRClinic',         bio: 'Helps organisations build people-first cultures, advising on HR strategy and community building for fast-growing teams.',                                                    seed: past2, track: 'HR & Culture' },
//     { name: 'Joel Moses Babatunde', role: 'The Ọgá HR',                             bio: "Leading voice in Nigeria's HR community, speaking on workforce development and the future of people management.",                                                             seed: past2, track: 'HR & Workforce' },
//   ];

//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <div className="bg-cmx-dark text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 mt-14 sm:mt-16">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60 mb-2 sm:mb-3">CMX Nigeria Summit</p>
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">All Speakers</h1>
//           <p className="text-base sm:text-xl text-gray-400 max-w-2xl">Here is our Incredible lineup of community builders, tech leaders, and innovators from across Nigeria</p>
//         </div>
//       </div>

//       {/* <section className="py-14 sm:py-20 bg-white">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
//             {speakers.map((speaker, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
//                 className="group bg-cmx-gray rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow"
//               >
//                 <div className="relative aspect-[3/2] overflow-hidden">
//                   <img src={speaker.seed} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
//                   <div className="absolute top-3 right-3">
//                     <span className="bg-cmx-blue text-white text-[9px] sm:text-[10px] font-bold uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{speaker.track}</span>
//                   </div>
//                 </div>
//                 <div className="p-5 sm:p-8">
//                   <h3 className="text-lg sm:text-xl font-black mb-1">{speaker.name}</h3>
//                   <p className="text-cmx-blue font-semibold text-xs sm:text-sm mb-3 sm:mb-4">{speaker.role}</p>
//                   <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{speaker.bio}</p>
//                   <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
//                     <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Twitter size={14} /></a>
//                     <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Linkedin size={14} /></a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}


//       <section className="py-14 sm:py-20 bg-white">
//         <div className="container-custom">

//           {/* Coming Soon Block */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-cmx-dark text-white px-8 sm:px-16 py-20 sm:py-28 flex flex-col items-center text-center"
//           >
//             {/* Decorative blobs */}
//             <div className="absolute -top-16 -left-16 w-64 h-64 bg-cmx-blue/20 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-cmx-orange/10 rounded-full blur-3xl pointer-events-none" />

//             {/* Animated dots grid */}
//             <div className="absolute inset-0 opacity-[0.04]"
//               style={{
//                 backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//                 backgroundSize: '28px 28px',
//               }}
//             />

//             <div className="relative z-10 flex flex-col items-center">
//               {/* Pulsing icon ring */}
//               <div className="relative mb-8">
//                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cmx-blue/20 flex items-center justify-center animate-pulse">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cmx-blue/40 flex items-center justify-center">
//                     <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cmx-blue" />
//                   </div>
//                 </div>
//                 {/* Orbiting ring */}
//                 <div className="absolute inset-0 rounded-full border-2 border-cmx-blue/30 border-dashed animate-spin" style={{ animationDuration: '8s' }} />
//               </div>

//               <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cmx-blue mb-4">
//                 Speaker Lineup
//               </span>

//               <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] mb-5">
//                 COMING <br />
//                 <span className="text-cmx-blue">SOON</span>
//               </h2>

//               <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-10">
//                 We're finalising an incredible lineup of community builders, tech leaders, and innovators from across Nigeria. Check back soon.
//               </p>

//               {/* Placeholder ghost cards */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
//                 {Array.from({ length: 4 }).map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 + i * 0.1 }}
//                     className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col items-center gap-3"
//                   >
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 animate-pulse" />
//                     <div className="w-3/4 h-2 rounded-full bg-white/10 animate-pulse" />
//                     <div className="w-1/2 h-2 rounded-full bg-white/5 animate-pulse" />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </section>
//     </motion.div>
//   );
// }





// import React from 'react';
// import { motion } from 'motion/react';

// const confirmedSpeakers = [
//   {
//     name: 'Samson Goddy',
//     role: 'Co-Founder, Open Source Africa',
//     image: 'https://drive.google.com/uc?export=view&id=16BWF7arcM4UNW1cLfcTIqsKozxyB_apF',
//     linkedin: 'https://www.linkedin.com/in/samsongoddy/',
//     track: 'Community Strategy',
//   },
//   {
//     name: 'Naomi Ladeji',
//     role: 'Product Manager, Interswitch',
//     image: 'https://drive.google.com/uc?export=view&id=1doj_ANyRlwCB7QydkjTCjt8cKK8rc7jZ',
//     linkedin: 'https://www.linkedin.com/in/naomi-ladeji-477ab511b/',
//     track: 'Product & Community',
//   },
//   {
//     name: 'Tabby Tabitha',
//     role: 'Head of Learner Success, ALTSchool',
//     image: 'https://drive.google.com/uc?export=view&id=1MwitG4idiMfvSpiJpaMA2vKASXM2B6X3',
//     linkedin: 'https://www.linkedin.com/in/tabithakavyu/',
//     track: 'Education & Growth',
//   },
//   {
//     name: 'Timothy Ovie',
//     role: 'Programs Manager',
//     image: 'https://drive.google.com/uc?export=view&id=1Ah_aA_x6RyBq4PIMowTwMuIlt-2sIQEo',
//     linkedin: 'https://www.linkedin.com/in/timothyovie/',
//     track: 'Programs & Operations',
//   },
// ];

// function SpeakerCard({ speaker, index }: { speaker: typeof confirmedSpeakers[0]; index: number }) {
//   return (
//     <motion.div
//       key={speaker.name}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.08 }}
//       className="group bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
//     >
//       <div className="relative aspect-square overflow-hidden bg-gray-100">
//         <img
//           src={speaker.image}
//           alt={speaker.name}
//           className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
//           onError={(e) => {
//             const target = e.currentTarget;
//             target.style.display = 'none';
//             const fallback = target.parentElement?.querySelector('.speaker-fallback') as HTMLElement;
//             if (fallback) fallback.style.display = 'flex';
//           }}
//         />
//         {/* Fallback avatar */}
//         <div
//           className="speaker-fallback absolute inset-0 items-center justify-center bg-blue-50"
//           style={{ display: 'none' }}
//         >
//           <span className="text-4xl font-black text-blue-200">
//             {speaker.name.split(' ').map(n => n[0]).join('')}
//           </span>
//         </div>
//         {/* LinkedIn badge */}
        
//         <a href={speaker.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-blue-600 hover:text-white"
//           aria-label={`${speaker.name} on LinkedIn`}
//         >
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
//             <circle cx="4" cy="4" r="2"/>
//           </svg>
//         </a>
//       </div>
//       <div className="p-5">
//         <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
//           {speaker.track}
//         </span>
//         <h3 className="font-black text-lg text-gray-900 mb-1 leading-tight">{speaker.name}</h3>
//         <p className="text-gray-500 text-sm font-medium">{speaker.role}</p>
//       </div>
//     </motion.div >
//   );
// }

// export default function SpeakersPage() {
//   return (
//     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

//       {/* Header */}
//       <div className="bg-cmx-dark text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 mt-14 sm:mt-16">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60 mb-2 sm:mb-3">CMX Nigeria Summit</p>
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">All Speakers</h1>
//           <p className="text-base sm:text-xl text-gray-400 max-w-2xl">
//             Meet the community builders, tech leaders, and innovators shaping Nigeria's ecosystem.
//           </p>
//         </div>
//       </div>

//       {/* Confirmed Speakers */}
//       <section className="py-14 sm:py-20 bg-white">
//         <div className="container-custom">

//           <div className="mb-10">
//             <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cmx-blue mb-2">Confirmed</p>
//             <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Online Speakers</h2>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
//             {confirmedSpeakers.map((speaker, i) => (
//               <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
//             ))}
//           </div>

//           {/* Physical Speakers Coming Soon */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-cmx-dark text-white px-8 sm:px-16 py-20 sm:py-28 flex flex-col items-center text-center"
//           >
//             {/* Decorative blobs */}
//             <div className="absolute -top-16 -left-16 w-64 h-64 bg-cmx-blue/20 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-cmx-orange/10 rounded-full blur-3xl pointer-events-none" />

//             {/* Dot grid */}
//             <div
//               className="absolute inset-0 opacity-[0.04]"
//               style={{
//                 backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//                 backgroundSize: '28px 28px',
//               }}
//             />

//             <div className="relative z-10 flex flex-col items-center">
//               {/* Pulsing icon ring */}
//               <div className="relative mb-8">
//                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cmx-blue/20 flex items-center justify-center animate-pulse">
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cmx-blue/40 flex items-center justify-center">
//                     <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cmx-blue" />
//                   </div>
//                 </div>
//                 <div
//                   className="absolute inset-0 rounded-full border-2 border-cmx-blue/30 border-dashed animate-spin"
//                   style={{ animationDuration: '8s' }}
//                 />
//               </div>

//               <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cmx-blue mb-4">
//                 Physical Speakers
//               </span>

//               <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] mb-5">
//                 COMING <br />
//                 <span className="text-cmx-blue">SOON</span>
//               </h2>

//               <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-10">
//                 We're finalising an incredible lineup of in-person speakers. Official announcements dropping soon — stay tuned.
//               </p>

//               {/* Ghost placeholder cards */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
//                 {Array.from({ length: 4 }).map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 + i * 0.1 }}
//                     className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col items-center gap-3"
//                   >
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 animate-pulse" />
//                     <div className="w-3/4 h-2 rounded-full bg-white/10 animate-pulse" />
//                     <div className="w-1/2 h-2 rounded-full bg-white/5 animate-pulse" />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//     </motion.div>
//   );
// }



import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';

const confirmedSpeakers = [
  {
    name: 'Samson Goddy',
    role: 'Co-Founder, Open Source Africa',
    image: '/SamsonGoddy.png',
    linkedin: 'https://www.linkedin.com/in/samsongoddy/',
    track: 'Community Strategy',
    trackColor: 'bg-blue-50 text-blue-700',
  },
  {
    name: 'Naomi Ladeji',
    role: 'Product Manager, Interswitch',
    image: '/NaomiLadeji.png',
    linkedin: 'https://www.linkedin.com/in/naomi-ladeji-477ab511b/',
    track: 'Product & Community',
    trackColor: 'bg-purple-50 text-purple-700',
  },
  {
    name: 'Tabby Tabitha',
    role: 'Head of Learner Success, ALTSchool',
    image: '/TabbyTabitha.png',
    linkedin: 'https://www.linkedin.com/in/tabithakavyu/',
    track: 'Education & Growth',
    trackColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    name: 'Timothy Ovie',
    role: 'Programs Manager',
    image: '/TimothyOvie.png',
    linkedin: 'https://www.linkedin.com/in/timothyovie/',
    track: 'Programs & Operations',
    trackColor: 'bg-orange-50 text-orange-700',
  },
];

// ── Magnetic tilt card ──────────────────────────────────────────────
function TiltCard({ speaker, index }: { speaker: typeof confirmedSpeakers[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: true, margin: '-60px' });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });
  const shimmerX = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), { stiffness: 200, damping: 20 });
  const shimmerY = useSpring(useTransform(y, [-0.5, 0.5], [-20, 20]), { stiffness: 200, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    scale.set(1.03);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
      animate={cardInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 cursor-default"
      >
        {/* Shimmer highlight that follows cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 65%)',
            x: shimmerX,
            y: shimmerY,
          }}
        />

        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <motion.img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = 'none';
              const fb = t.parentElement?.querySelector('.fb') as HTMLElement;
              if (fb) fb.style.display = 'flex';
            }}
          />
          <div className="fb absolute inset-0 items-center justify-center bg-blue-50" style={{ display: 'none' }}>
            <span className="text-5xl font-black text-blue-200 select-none">
              {speaker.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>

          {/* LinkedIn hover reveal */}
          <motion.a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 1, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.3 }}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-blue-600 hover:text-blue-600 transition-colors"
            aria-label={`${speaker.name} on LinkedIn`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>

          {/* Bottom name strip that slides up on hover */}
          <motion.div
            initial={{ y: '100%' }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm px-4 py-3"
          >
            <p className="font-black text-sm text-gray-900 leading-tight">{speaker.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{speaker.role}</p>
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-5">
          <motion.span
            className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${speaker.trackColor}`}
            initial={{ opacity: 0, x: -10 }}
            animate={cardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
          >
            {speaker.track}
          </motion.span>
          <h3 className="font-black text-lg text-gray-900 mb-1 leading-tight">{speaker.name}</h3>
          <p className="text-gray-500 text-sm font-medium">{speaker.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Animated counter ────────────────────────────────────────────────
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Typewriter text ─────────────────────────────────────────────────
function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    let i = 0;
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, 38);
    }, delay);
    return () => clearTimeout(timeout);
  }, [inView, text, delay, started]);

  return (
    <span ref={ref}>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-0.5 h-5 bg-cmx-blue ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

// ── Main page ───────────────────────────────────────────────────────
export default function SpeakersPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── CINEMATIC HERO HEADER ── */}
      <div
        ref={headerRef}
        className="bg-cmx-dark text-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 mt-14 sm:mt-16 relative overflow-hidden"
      >
        {/* Animated background grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundSize: '48px 48px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '48px 48px'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating orbs */}
        {[
          { w: 320, h: 320, top: '-10%', right: '5%', color: 'rgba(37,99,235,0.12)', dur: 7 },
          { w: 200, h: 200, bottom: '-5%', left: '10%', color: 'rgba(37,99,235,0.08)', dur: 5 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{ width: orb.w, height: orb.h, top: orb.top, right: (orb as any).right, bottom: (orb as any).bottom, left: (orb as any).left, background: orb.color }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Eyebrow slides in from left */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60 mb-3"
          >
            CMX Nigeria Summit
          </motion.p>

          {/* Headline — each word flies in */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-[0.92] overflow-hidden">
            {['All', 'Speakers'].map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-4">
                <motion.span
                  className="inline-block"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sub — typewriter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-xl text-gray-400 max-w-2xl font-medium"
          >
            <Typewriter
              text="Here is our Incredible lineup of community builders, tech leaders, and innovators from across Nigeria."
              delay={30}
            />
          </motion.p>

          
        </div>
      </div>

      {/* ── CONFIRMED SPEAKERS ── */}
      <section ref={sectionRef} className="py-14 sm:py-20 bg-white">
        <div className="container-custom">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={sectionInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="w-10 h-1 bg-cmx-blue rounded-full mb-4"
            />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cmx-blue mb-2">
              Confirmed
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Virtual Speakers</h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20">
            {confirmedSpeakers.map((speaker, i) => (
              <TiltCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>

          {/* ── PHYSICAL SPEAKERS COMING SOON ── */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-cmx-dark text-white px-8 sm:px-16 py-20 sm:py-28 flex flex-col items-center text-center">

            {/* Animated grid bg */}
            <motion.div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
              animate={{ backgroundPosition: ['0px 0px', '28px 28px'] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            {/* Pulsing orbs */}
            {[
              { size: 400, top: '-15%', left: '-8%', opacity: 0.12 },
              { size: 300, bottom: '-10%', right: '-5%', opacity: 0.08 },
            ].map((orb, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cmx-blue pointer-events-none"
                style={{ width: orb.size, height: orb.size, top: (orb as any).top, left: (orb as any).left, bottom: (orb as any).bottom, right: (orb as any).right, opacity: orb.opacity }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}

            <div className="relative z-10 flex flex-col items-center">

              {/* Concentric rings animation */}
              <div className="relative mb-10 w-24 h-24 flex items-center justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-cmx-blue/40"
                    initial={{ width: 40, height: 40, opacity: 0.9 }}
                    animate={{ width: 40 + i * 30, height: 40 + i * 30, opacity: 0 }}
                    transition={{ duration: 2.5, delay: i * 0.7, repeat: Infinity, ease: 'easeOut' }}
                  />
                ))}
                <motion.div
                  className="w-10 h-10 rounded-full bg-cmx-blue flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </motion.div>
              </div>

              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cmx-blue mb-5 bg-cmx-blue/10 px-4 py-1.5 rounded-full"
              >
                Physical Speakers
              </motion.span>

              {/* Headline — split reveal */}
              <div className="overflow-hidden mb-2">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black leading-none"
                >
                  COMING
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black leading-none text-cmx-blue"
                >
                  SOON
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-12"
              >
                We're finalising an incredible lineup of in-person speakers and community leaders.
                Official announcements dropping soon — stay tuned.
              </motion.p>

              {/* Ghost cards with stagger */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col items-center gap-3"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white/10"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3/4 h-2 rounded-full bg-white/10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 1.8, delay: i * 0.3 + 0.2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-1/2 h-2 rounded-full bg-white/5"
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 1.8, delay: i * 0.3 + 0.4, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}