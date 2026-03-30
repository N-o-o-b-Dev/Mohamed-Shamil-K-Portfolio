import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900/50 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-12">
            Whether you have a project in mind, a question, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.a 
            href="mailto:mhdshamil136@gmail.com"
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-zinc-300 font-medium">mhdshamil136@gmail.com</span>
          </motion.a>

          <motion.a 
            href="tel:8075448758"
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-zinc-300 font-medium">+1 (807) 544-8758</span>
          </motion.a>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-zinc-300 font-medium">Remote Options Available</span>
          </motion.div>
        </div>

        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Mohamed Shamil K. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
