import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const projectTypes = [
  "Meta & Google Ads Management",
  "E-Commerce CRO & Checkout Audit",
  "Fast AI Landing Page Development",
  "Custom AI Web App / ERP",
  "General Consultation"
];

const ContactUs = () => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [notes, setNotes] = useState('');

  const encodedMessage = encodeURIComponent(
    `Hi Shamil! I'm interested in "${selectedType}". ${notes ? `Notes: ${notes}` : "I'd like to discuss a project with you."}`
  );

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available For New Projects
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Got Traffic That Isn&apos;t Converting? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400">
              Or an Idea That Needs a Fast Landing Page?
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Whether you need someone to run profitable Meta &amp; Google Ads, audit why shoppers are dropping out of your checkout, or vibe-code a fast landing page for your next campaign—let’s talk.
          </p>
        </motion.div>

        {/* 2-Column Contact Experience */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Project Inquiry Builder */}
          <motion.div 
            className="lg:col-span-7 glass-card p-6 sm:p-9 border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-2">Book a Free Funnel Chat</h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6">
              Select what you need help with to open a direct WhatsApp chat with pre-filled context:
            </p>

            {/* Service Selection Chips */}
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                1. Select Service Need:
              </span>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const active = selectedType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`text-xs px-3.5 py-2 rounded-xl transition-all font-medium text-left ${
                        active
                          ? 'bg-emerald-500 text-black font-bold shadow-md'
                          : 'bg-white/5 text-zinc-300 border border-white/5 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional message input */}
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                2. Brief Context (Optional):
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g., We run an e-commerce store in Oman / need a landing page in 3 days / want to fix our checkout drop-off..."
                rows={3}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3.5 text-xs sm:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/918075448758?text=${encodedMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-emerald-500 text-black font-bold text-sm rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:mhdshamil136@gmail.com?subject=${encodeURIComponent(`Inquiry: ${selectedType}`)}&body=${encodedMessage}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Channels & Reassurances */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Direct Channel Cards */}
            <div className="glass-card p-6 border border-white/10">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-4">
                Direct Channels
              </span>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/918075448758"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-zinc-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase block">WhatsApp / Call</span>
                    <span className="text-sm font-semibold text-white">+91 80754 48758</span>
                  </div>
                </a>

                <a 
                  href="mailto:mhdshamil136@gmail.com"
                  className="flex items-center gap-3 text-zinc-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase block">Email</span>
                    <span className="text-sm font-semibold text-white">mhdshamil136@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-zinc-200">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase block">Base &amp; Markets</span>
                    <span className="text-sm font-semibold text-white">Kerala, India • India, Oman &amp; GCC</span>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-3">
                <a
                  href="https://github.com/N-o-o-Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Engagement Reassurance Card */}
            <div className="glass-card p-6 border border-white/10 space-y-3 text-xs text-zinc-400 font-light">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-2">
                What to Expect
              </span>

              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response time within 2 hours during active business hours</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% NDA &amp; client confidentiality respected</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Flexible engagement: monthly retainers or fixed sprint deliverables</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

