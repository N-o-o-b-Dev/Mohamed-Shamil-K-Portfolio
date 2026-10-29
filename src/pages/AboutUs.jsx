import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Experience from '../components/Experience';
import { ArrowRight, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-24 pb-20">
      {/* About Section (The Story Flow & 3 Pillars) */}
      <About />

      {/* Experience & Career Timeline */}
      <Experience />

      {/* Link to Case Study & Contact */}
      <div className="container mx-auto px-6 max-w-6xl mt-16">
        <motion.div 
          className="glass-card p-8 sm:p-10 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Real World Results
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              See How I Drove a 44% Add-to-Cart Rate for an Oman E-Commerce Store
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Read the full 4-stage campaign rollout and 90% checkout drop-off audit.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-xs sm:text-sm rounded-full hover:bg-zinc-200 transition-colors"
            >
              <span>Read Funnel Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

