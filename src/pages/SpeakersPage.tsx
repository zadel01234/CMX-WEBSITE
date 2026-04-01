import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin } from 'lucide-react';

import past2 from '/R5__2057.JPG';
import pic1  from '/DSC00417.JPG';

export default function SpeakersPage() {
  const speakers = [
    { name: 'Samson Goddy',         role: 'Co-Founder, Open Source Africa',        bio: 'Software engineer and community builder who co-founded Open Source Africa, championing open source culture across the continent.',                                         seed: past2, track: 'Community Strategy' },
    { name: 'Timothy Oviem',        role: 'Lead, Community Leads in Africa',        bio: "Leads one of Africa's most active community-of-practice networks, helping community professionals upskill and find their place in the ecosystem.",                          seed: past2, track: 'Community Leadership' },
    { name: 'Haneefah A. Lekki',    role: 'Programs & Community Manager',           bio: 'Has managed programs and communities across multiple tech organisations, bridging the gap between operations and people-first culture.',                                     seed: past2, track: 'People & Programs' },
    { name: 'Mfonobong Umondia',    role: 'Community Manager, She Code Africa',     bio: 'Drives community engagement and inclusion at She Code Africa, empowering women in tech across the continent.',                                                               seed: pic1,  track: 'Inclusion & Diversity' },
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
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl">10+ industry leaders, community builders, and innovators shaping Africa's tech landscape.</p>
        </div>
      </div>

      <section className="py-14 sm:py-20 bg-white">
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
      </section>
    </motion.div>
  );
}
