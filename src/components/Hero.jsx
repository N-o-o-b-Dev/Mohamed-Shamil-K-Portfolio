import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ChevronDown, ArrowRight, Download, Sparkles, TrendingUp, Layers, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import cvFile from '../assets/Mohamed_Shamil_CV (1).pdf';

const Hero = () => {
  const proofItems = [
    {
      metric: "44%",
      label: "Cart Intent Rate",
      subtext: "51K+ Reach • Oman Meta Ads",
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />
    },
    {
      metric: "10+",
      label: "Landing Pages Shipped",
      subtext: "India & GCC",
      icon: <Layers className="w-4 h-4 text-sky-400" />
    },
    {
      metric: "4+",
      label: "Brands Managed",
      subtext: "End-to-End Execution",
      icon: <ShieldCheck className="w-4 h-4 text-purple-400" />
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-[12%] left-[8%] w-[420px] h-[420px] bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[8%] w-[480px] h-[480px] bg-emerald-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Performance Marketer • Meta &amp; Google Ads • AI-First Web Builder (Kerala, India)</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight mb-6 text-white leading-[1.14]">
              Most Marketers Stop at the Click. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-white to-zinc-400">
                I Fix What Happens After It.
              </span>
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-zinc-400 mb-8 max-w-2xl font-light leading-relaxed">
              Hi, I’m <strong className="text-white font-semibold">Mohamed Shamil K</strong>. I run profitable Meta and Google Ad campaigns, manage social brands, and build fast, high-converting landing pages. Because I started my career in software engineering (where my first projects were created and coded entirely by me by hand), I don’t just throw budget at ads—I track down why people abandon your cart, fix broken checkout flows, and use modern AI &quot;vibe coding&quot; right now to ship custom web tools with zero manual code in days instead of months.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full mb-6">
              <Link
                to="/case-study"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <span>Read My E-Commerce Funnel Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>View AI-Built Apps</span>
              </Link>

              <a
                href={cvFile}
                download="Mohamed_Shamil_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-medium text-sm rounded-full hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </a>
            </div>

            {/* Socials Connection */}
            <div className="flex items-center gap-2.5 pt-2">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium mr-1">Direct:</span>
              <a
                href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 transition-all duration-200"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/N-o-o-Dev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:mhdshamil136@gmail.com"
                aria-label="Email"
                className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative group w-full max-w-[340px] sm:max-w-[370px]">
              <div className="absolute -inset-1 bg-gradient-to-b from-white/15 via-emerald-500/10 to-transparent rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/60 backdrop-blur-sm shadow-2xl">
                <img
                  src={profileImg}
                  alt="Mohamed Shamil K - Performance Marketer &amp; AI Web Builder"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">Status</span>
                  </div>
                  <p className="text-white text-sm font-semibold">Scaling Brands • Fixing Funnels • Vibe Coding</p>
                  <p className="text-zinc-400 text-xs mt-0.5">Kerala, India • Available for GCC &amp; Global</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Proof Bar: Balanced 4-card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {proofItems.map((item, index) => (
            <div
              key={index}
              className="glass-card p-5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {item.icon}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Verified
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                  {item.metric}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Subtle scroll indicator pointing down to Education */}
        <div className="flex justify-center mt-12">
          <a href="#credentials" className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase">
            <span>Credentials &amp; Education</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
