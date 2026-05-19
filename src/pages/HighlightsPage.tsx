import React from 'react';
import { motion } from 'motion/react';
import { Users, Handshake, Star, Briefcase } from 'lucide-react';

import hero from '/DSC00118.jpg';
import past1 from '/DSC00133.jpg';
import past2 from '/R5__2057.jpg';
import past3 from '/JKV_0236.jpg';
import past4 from '/JKV_0237.jpg';

export default function HighlightsPage() {
  const galleryImages = [past1, past2, past3, past4, hero, past1, past2, past3, past4, hero, past1, past2];

  const eventTypes = [
    { label: 'Panel Sessions',  desc: 'Thought leaders debate the future of community strategy, product, and tech.',    icon: <Users size={20} /> },
    { label: 'Networking',      desc: 'Curated networking moments connecting professionals across sectors.',             icon: <Handshake size={20} /> },
    { label: 'Showcases',       desc: 'Brands and startups demo their tools and community-powered innovations.',         icon: <Star size={20} /> },
    { label: 'Masterclasses',   desc: "Hands-on, skill-building sessions with the continent's best practitioners.",     icon: <Briefcase size={20} /> },
  ];

  const stats = [
    { value: '2+',   label: 'Years Running' },
    { value: '500+', label: 'Attendees per Event' },
    { value: '10+',  label: 'Speakers per Summit' },
    { value: '1',    label: 'Past Events' },
  ];

  const heights = ['h-[220px]', 'h-[280px]', 'h-[340px]', 'h-[260px]', 'h-[310px]'];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero banner */}
      <div className="bg-cmx-blue text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 mt-14 sm:mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-70 mb-2 sm:mb-3">Our History</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">Event Highlights</h1>
          <p className="text-base sm:text-xl text-white/80 max-w-2xl">Over two years of high-energy, high-impact community events, panel sessions, networking, showcases and more.</p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-cmx-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-cmx-blue mb-1 sm:mb-2">{s.value}</p>
                <p className="text-gray-400 font-semibold text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-12 text-center">What Happens at CMX Nigeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {eventTypes.map((et, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-cmx-gray rounded-3xl p-6 sm:p-8 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cmx-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5">{et.icon}</div>
                <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3">{et.label}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{et.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 sm:py-20 bg-cmx-gray">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-center">Photo Gallery</h2>
          <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4">
            {galleryImages.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="break-inside-avoid mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={src}
                    className={`w-full object-cover ${heights[i % heights.length]} scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-cmx-blue text-white">
        <div className="container-custom text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">CMX Connect Ibadan Nigeria</h2>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8">
            The CMX Nigeria Summit is the evolution of the wildly successful CMX Connect series — consistently drawing 300–500 professionals per session across Nigeria, and now scaling to a full national summit.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
            {['Ibadan', 'Lagos', 'Abuja', 'Online'].map((city, i) => (
              <span key={i} className="bg-white/10 border border-white/20 px-4 sm:px-6 py-2 rounded-full">{city}</span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
