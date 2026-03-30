import { motion } from 'framer-motion';
import { Mail, ChevronDown, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import cvFile from '../assets/Mohamed_Shamil_CV (1).pdf';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-zinc-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium tracking-wide mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Full-Stack Developer & Digital Marketer
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white leading-[1.1]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-500 drop-shadow-sm">
                Digital Growth
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl font-light leading-relaxed">
              I'm <strong className="text-white font-semibold">Mohamed Shamil K</strong>. A unique hybrid of a Full-Stack Developer and Digital Marketer. I build robust web applications and craft data-driven marketing strategies to scale them.
            </p>
            
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={cvFile} download="Mohamed_Shamil_CV.pdf" className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm">
                Download CV
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/N-o-o-b-Dev" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white backdrop-blur-sm">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white backdrop-blur-sm">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="mailto:mhdshamil136@gmail.com" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2 w-full"
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative group w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] xl:w-[480px]">
              {/* Glowing effects behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500 to-white/20 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-500 animate-pulse"></div>
              
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <motion.img 
                  src={profileImg}
                  alt="Mohamed Shamil K" 
                  className="w-full h-full object-cover object-top scale-105"
                  initial={{ scale: 1.2, filter: 'grayscale(100%)' }}
                  animate={{ scale: 1, filter: 'grayscale(0%)' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Overlay Text on Image */}
                <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2 drop-shadow-md">Currently</p>
                  <p className="text-white text-xl font-bold drop-shadow-lg leading-snug">Building extraordinary things.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#about" className="text-zinc-500 hover:text-white transition-colors flex flex-col items-center gap-2 group">
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
