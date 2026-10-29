import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AiProducts from '../components/AiProducts';
import EngineeringProjects from '../components/EngineeringProjects';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ProjectsPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* AI-Built Products & Vibe Coding */}
      <AiProducts />

      {/* Earlier Engineering Projects Archive */}
      <EngineeringProjects />

      {/* Bottom Projects CTA */}
      <div className="container mx-auto px-6 max-w-6xl mt-16">
        <motion.div 
          className="glass-card p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Have an Idea That Needs a Fast, High-Converting Web Presence?
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
            Skip months of slow manual agency development. I use modern AI vibe coding workflows to ship custom landing pages and web apps at 10x speed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918075448758?text=Hi%20Shamil,%20I%20have%20an%20app%20/%20landing%20page%20project!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 text-black font-bold text-sm rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Discuss Your Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="px-6 py-3.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              Contact US
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;

