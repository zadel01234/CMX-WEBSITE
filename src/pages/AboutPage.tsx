import React from 'react';
import { motion } from 'motion/react';
import {
  Target, Users, TrendingUp, Handshake, Globe, Star,
  Briefcase, Zap, CheckCircle2,
} from 'lucide-react';

import past1 from '/DSC00133.JPG';
import past2 from '/R5__2057.JPG';

export default function AboutPage() {
  const objectives = [
    { icon: <Target size={20} />,    title: 'Extract Valuable Perspectives',  desc: 'Get invaluable insights from the most brilliant minds in community tech and innovation.' },
    { icon: <Users size={20} />,     title: 'Meet the Biggest Players',        desc: "Connect with Africa's top innovators and community leaders in one place." },
    { icon: <TrendingUp size={20} />,title: 'Brand Visibility',                desc: 'Get your brand in front of the people that matter in tech and business communities.' },
    { icon: <Handshake size={20} />, title: 'Collaboration Opportunities',     desc: "Find opportunities to collaborate and create new solutions that impact Africa's ecosystem." },
    { icon: <Globe size={20} />,     title: 'Ecosystem Sustainability',        desc: 'Learn how to build communities that thrive long-term and drive sustainable growth.' },
    { icon: <Star size={20} />,      title: 'Cross-Functional Integration',    desc: 'Discover how community fits into product, marketing, engineering and leadership teams.' },
    { icon: <Briefcase size={20} />, title: 'Professional Elevation',          desc: 'Workshops and sessions designed to sharpen your leadership and management skills.' },
    { icon: <Zap size={20} />,       title: 'Impact & Growth',                 desc: 'Measure and amplify community impact across businesses, startups and nonprofits.' },
  ];
  const partners = ['CMX', 'Community Collective', 'Community Leads in Africa', 'Community Manager Guide'];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero banner */}
      <div className="bg-cmx-blue text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 mt-14 sm:mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-70 mb-2 sm:mb-3">CMX Nigeria Summit</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6">About the Summit</h1>
          <p className="text-base sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            The CMX Nigeria Summit is a high-impact industry gathering, designed to position community as a core driver of business growth, product adoption and ecosystem expansion within Nigeria’s evolving tech landscape.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                The CMX Nigeria Summit fosters cross-sector collaboration and unlocks high-value opportunities for Community Managers, HR Professionals, Project Managers, Product Managers, and Founders within the African tech ecosystem.
              </p>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Through a curated blend of deep-dive sessions and prominent branding opportunities, this event serves as a premier showcase for the talent and innovation driving the African community ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: '300+',   sub: 'Expected Participants' },
                  { label: '10+',    sub: 'Expert Speakers' },
                  { label: '6+',     sub: 'Partner Organisations' },
                  { label: '6 Days', sub: 'Summit Experience' },
                ].map((stat, i) => (
                  <div key={i} className="bg-cmx-gray rounded-2xl p-4 sm:p-6">
                    <p className="text-2xl sm:text-3xl font-black text-cmx-blue mb-1">{stat.label}</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mt-6 lg:mt-0">
              <img src={past1} className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-14 sm:py-20 bg-cmx-gray">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">Core Objectives</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Everything we do at CMX Nigeria is purpose-driven and ecosystem-focused.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {objectives.map((obj, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-cmx-blue/10 text-cmx-blue rounded-2xl flex items-center justify-center mb-4">{obj.icon}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2">{obj.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl order-2 lg:order-1">
              <img src={past2} className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">A Proven Track Record</h2>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Over the past two years, CMX Connect has established a reputation for delivering high-impact tech and community-focused events, consistently drawing 300–500 participants per session.
              </p>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                These numbers reflect a deeply engaged ecosystem and a sustained demand for high-level community connection.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {['Panel Sessions with industry experts', 'Live networking and deal-making', 'Startup showcases and demos', 'Curated community masterclasses'].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-cmx-blue flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 sm:py-16 bg-cmx-blue text-white">
        <div className="container-custom text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-70 mb-3 sm:mb-4">Media & Community Partners</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-10">Backed by the best in community</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {partners.map((p, i) => (
              <div key={i} className="bg-white/10 border border-white/20 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-lg font-bold">{p}</div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
