import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, SearchCheck, Cpu, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Toolkit from '../components/Toolkit';

const servicesList = [
  {
    title: "Performance Marketing (Meta & Google Ads)",
    tag: "Paid Acquisition",
    description: "Structuring and scaling high-ROAS Meta (Facebook & Instagram) and Google ad campaigns with strict budget discipline.",
    deliverables: [
      "Custom Canva ad creatives & thumb-stopping hooks",
      "Multi-stage cold-to-conversion funnel architecture",
      "Audience testing, demographic segmentation & retargeting",
      "Daily spend tracking, CPR minimization & ROAS scaling"
    ],
    icon: <Target className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Conversion Rate Optimization (CRO) & Funnel Audits",
    tag: "Checkout & Retention",
    description: "Diagnosing post-click drop-offs to turn ad clicks into actual buyers without spending extra budget on ads.",
    deliverables: [
      "End-to-end checkout leak identification (hidden fees, friction)",
      "Mobile speed & responsive UX performance audits",
      "Guest checkout & impulse purchase optimization",
      "Interactive analytics & cart abandonment analysis"
    ],
    icon: <SearchCheck className="w-6 h-6 text-sky-400" />
  },
  {
    title: "AI-First Web Building & Landing Pages",
    tag: "Speed to Market",
    description: "Rapidly shipping ultra-fast, mobile-first React landing pages and custom web tools using modern AI vibe coding workflows.",
    deliverables: [
      "Sub-second mobile loading speeds (eliminating WordPress bloat)",
      "Laser-focused single-CTA page layouts for paid traffic",
      "Direct WhatsApp lead routing & CRM integrations",
      "Vibe-coded custom web apps and ERP tools in days"
    ],
    icon: <Cpu className="w-6 h-6 text-amber-400" />
  },
  {
    title: "Social Media Strategy & Local SEO",
    tag: "Organic Growth",
    description: "Managing organic brand perception and local search discoverability for commercial businesses.",
    deliverables: [
      "Content calendars and brand poster design in Canva",
      "Deep competitor audits & positioning reports",
      "Google Business Profile (Local SEO) ranking optimization",
      "Customer trust building and review generation strategies"
    ],
    icon: <Share2 className="w-6 h-6 text-purple-400" />
  }
];

const Services = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Hero Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Services &amp; Capabilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            High-Performance Marketing, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              CRO &amp; AI-Built Web Solutions
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            I don&apos;t just deliver ad clicks—I optimize the entire post-click journey, fix checkout drop-offs, and ship fast custom landing pages for brands in India and the GCC.
          </p>
        </motion.div>

        {/* 4 Core Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {servicesList.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-7 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                    {srv.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {srv.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2">{srv.title}</h2>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {srv.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-2">
                    What You Get:
                  </span>
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5">
                <a
                  href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20am%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  <span>Book this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toolkit Component */}
        <Toolkit />

        {/* Bottom CTA Banner */}
        <motion.div 
          className="mt-20 glass-card p-8 sm:p-12 text-center border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Have a Specific Campaign or Store in Mind?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-6">
            Get a tailored strategy breakdown, free funnel audit, or fast landing page quote within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-all"
            >
              Contact Me Directly
            </Link>
            <a
              href="https://wa.me/918075448758?text=Hi%20Shamil,%20let%27s%20discuss%20a%20project!"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-emerald-500 text-black font-semibold text-sm rounded-full hover:bg-emerald-400 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

