import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CaseStudy from '../components/CaseStudy';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const CaseStudyPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Featured Performance Marketing Case Study Component */}
      <CaseStudy />

      {/* Case Study Bottom CTA */}
      <div className="container mx-auto px-6 max-w-6xl mt-12">
        <motion.div 
          className="glass-card p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Audit Your Own Funnel
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Have High Add-to-Carts but Low Purchases on Your Store?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8">
            Don&apos;t keep burning budget on cold traffic when checkout leaks are eating 90% of your buyer intent. Let me audit your store and fix what happens after the click.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20saw%20your%20case%20study%20and%20want%20a%20funnel%20audit%20for%20my%20store!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 text-black font-bold text-sm rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Book a Free Funnel Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/projects"
              className="px-6 py-3.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              View AI-Built Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyPage;

