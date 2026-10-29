import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, Globe } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-24 relative overflow-hidden bg-[#060606] border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Main CTA Box */}
        <motion.div 
          className="glass-card p-8 sm:p-12 md:p-16 border border-white/10 text-center relative overflow-hidden mb-12 shadow-2xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Ready to Scale Your Conversions?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Got Traffic That Isn&apos;t Converting? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400">
              Or an Idea That Needs a Fast Landing Page?
            </span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need someone to run profitable Meta &amp; Google Ads, audit why shoppers are dropping out of your checkout, or vibe-code a fast landing page for your next campaign—let’s talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a 
              href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20have%20traffic%20that%20isn%27t%20converting%20/%20need%20a%20landing%20page.%20Let%27s%20talk!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-bold text-sm sm:text-base rounded-full hover:bg-emerald-400 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(16,185,129,0.3)]"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Message Me on WhatsApp / Book a Free Funnel Chat</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 font-light flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Based in <strong className="text-white">Kerala, India</strong> — Working with clients across India, Oman, and the GCC.</span>
          </p>
        </motion.div>

        {/* 3 Balanced Contact Method Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <motion.a 
            href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            className="glass-card p-6 flex flex-col items-center text-center border border-white/10 group"
          >
            <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <FaWhatsapp className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">WhatsApp &amp; Phone</span>
            <span className="text-white font-medium text-sm">+91 80754 48758</span>
          </motion.a>

          <motion.a 
            href="mailto:mhdshamil136@gmail.com"
            whileHover={{ y: -3 }}
            className="glass-card p-6 flex flex-col items-center text-center border border-white/10 group"
          >
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center mb-3 group-hover:bg-white group-hover:text-black transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">Direct Email</span>
            <span className="text-white font-medium text-sm">mhdshamil136@gmail.com</span>
          </motion.a>

          <motion.div 
            whileHover={{ y: -3 }}
            className="glass-card p-6 flex flex-col items-center text-center border border-white/10 group"
          >
            <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center mb-3 group-hover:bg-white group-hover:text-black transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">Remote Reach</span>
            <span className="text-white font-medium text-sm">India, Oman &amp; GCC</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

