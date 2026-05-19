import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin } from 'lucide-react';

import past2 from '/R5__2057.jpg';
import pic1 from '/DSC00417.jpg';

export default function SpeakersPage() {
  const speakers = [
    { name: 'Samson Goddy',         role: 'Co-Founder, Open Source Nigeria',        bio: 'Software engineer and community builder who co-founded Open Source Nigeria, championing open source culture across the continent.',                                         seed: past2, track: 'Community Strategy' },
    { name: 'Timothy Oviem',        role: 'Lead, Community Leads in Nigeria',        bio: "Leads one of Nigeria's most active community-of-practice networks, helping community professionals upskill and find their place in the ecosystem.",                          seed: past2, track: 'Community Leadership' },
    { name: 'Haneefah A. Lekki',    role: 'Programs & Community Manager',           bio: 'Has managed programs and communities across multiple tech organisations, bridging the gap between operations and people-first culture.',                                     seed: past2, track: 'People & Programs' },
    { name: 'Mfonobong Umondia',    role: 'Community Manager, She Code Nigeria',     bio: 'Drives community engagement and inclusion at She Code Nigeria, empowering women in tech across the continent.',                                                               seed: pic1,  track: 'Inclusion & Diversity' },
    { name: 'Ayomide Ogunrinola',   role: 'Community Manager, WITECH',              bio: 'Builds and nurtures the WITECH community, creating spaces for women in tech to thrive, collaborate, and lead.',                                                              seed: past2, track: 'Community Building' },
    { name: 'Olawale Omotoso',      role: 'Director of Product Management',         bio: 'Brings a cross-functional perspective on how community integrates into product roadmaps and business strategy.',                                                              seed: past2, track: 'Product & Community' },
    { name: 'Olabanji Ewenla',      role: 'Lead Product Manager, Enoverlab',        bio: 'Shapes the product vision at Enoverlab while championing community-led growth as a core business strategy.',                                                                 seed: past2, track: 'Product Strategy' },
    { name: 'Florence Ogunbore',    role: 'Product Manager',                        bio: 'Practitioner at the intersection of product management and community, exploring how both disciplines amplify each other.',                                                    seed: past2, track: 'Product & People' },
    { name: 'Emmanuel Faith',       role: 'Lead Consultant, VisitHRClinic',         bio: 'Helps organisations build people-first cultures, advising on HR strategy and community building for fast-growing teams.',                                                    seed: past2, track: 'HR & Culture' },
    { name: 'Joel Moses Babatunde', role: 'The Ọgá HR',                             bio: "Leading voice in Nigeria's HR community, speaking on workforce development and the future of people management.",                                                             seed: past2, track: 'HR & Workforce' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="bg-cmx-dark text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 mt-14 sm:mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-60 mb-2 sm:mb-3">CMX Nigeria Summit</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">All Speakers</h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl">10+ industry leaders, community builders, and innovators shaping Nigeria's tech landscape.</p>
        </div>
      </div>

      {/* <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {speakers.map((speaker, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-cmx-gray rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={speaker.seed} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-cmx-blue text-white text-[9px] sm:text-[10px] font-bold uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{speaker.track}</span>
                  </div>
                </div>
                <div className="p-5 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-black mb-1">{speaker.name}</h3>
                  <p className="text-cmx-blue font-semibold text-xs sm:text-sm mb-3 sm:mb-4">{speaker.role}</p>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{speaker.bio}</p>
                  <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Twitter size={14} /></a>
                    <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-cmx-blue hover:shadow-md transition-all"><Linkedin size={14} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">

          {/* Coming Soon Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-cmx-dark text-white px-8 sm:px-16 py-20 sm:py-28 flex flex-col items-center text-center"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-cmx-blue/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-cmx-orange/10 rounded-full blur-3xl pointer-events-none" />

            {/* Animated dots grid */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Pulsing icon ring */}
              <div className="relative mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cmx-blue/20 flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cmx-blue/40 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cmx-blue" />
                  </div>
                </div>
                {/* Orbiting ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cmx-blue/30 border-dashed animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cmx-blue mb-4">
                Speaker Lineup
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] mb-5">
                COMING <br />
                <span className="text-cmx-blue">SOON</span>
              </h2>

              <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-10">
                We're finalising an incredible lineup of community builders, tech leaders, and innovators from across Nigeria. Check back soon.
              </p>

              {/* Placeholder ghost cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col items-center gap-3"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 animate-pulse" />
                    <div className="w-3/4 h-2 rounded-full bg-white/10 animate-pulse" />
                    <div className="w-1/2 h-2 rounded-full bg-white/5 animate-pulse" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
