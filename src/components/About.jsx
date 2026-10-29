import { motion } from 'framer-motion';
import { Target, SearchCheck, Cpu, ArrowUpRight } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      title: "Performance Marketer",
      description: "Managing Meta & Google ad spend with ruthless focus on ROAS, audience segmentation, and creative offer testing.",
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      tag: "Acquisition"
    },
    {
      title: "Conversion Auditor (CRO)",
      description: "Diagnosing post-click drop-offs, mobile UI friction, checkout surprise fees, and speed bottlenecks that kill cart conversions.",
      icon: <SearchCheck className="w-5 h-5 text-sky-400" />,
      tag: "Retention & Funnel"
    },
    {
      title: "AI Web Builder",
      description: "Leveraging Cursor, Google Stitch, and Antigravity to vibe-code high-converting React landing pages and custom ERPs with zero manual code right now.",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      tag: "Speed to Market"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-zinc-950/40 border-t border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-zinc-400 mb-4">
            About Me • The Story Flow
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            A Computer Science Brain Focused <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-400">
              100% on Digital Growth
            </span>
          </h2>
        </motion.div>

        {/* Cohesive 2-Column Story & Pillars Arrangement */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Flow */}
          <motion.div 
            className="lg:col-span-7 glass-card p-6 sm:p-9 border border-white/10 flex flex-col justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              <p>
                Let&apos;s be honest: the digital marketing world is full of people who know how to press <strong className="text-white font-medium">&quot;Boost Post&quot;</strong> or set up a basic ad campaign, but freeze the moment traffic lands on a slow website and doesn&apos;t convert.
              </p>
              <p>
                I took a different route. I spent over a year and a half working as a freelance Java and Spring Boot backend developer (where my first projects were coded entirely by me by hand), earning my <strong className="text-white font-medium">Computer Science Engineering degree</strong> along the way. Today, for building fast client tools, I don&apos;t write code manually anymore—I build strictly via AI vibe coding. My full-time obsession is <strong className="text-white font-medium">Performance Marketing, Social Media Strategy, and Conversion Rate Optimization (CRO)</strong>.
              </p>
              
              <div className="p-4 sm:p-5 rounded-xl bg-white/5 border-l-4 border-l-emerald-400 border border-white/5 my-4">
                <p className="text-white text-sm sm:text-base font-normal italic leading-relaxed">
                  &ldquo;Why does my past matter to you? Because when your Meta Ads get a 3.6% CTR and 98 Add-to-Carts, but only 1 sale, I don&apos;t blame the algorithm. I look under the hood of your store, spot the 3-second load delay, find the hidden shipping fee scaring buyers away at checkout, and build you a faster landing page using modern AI tools like Cursor, Google Stitch, and Antigravity.&rdquo;
                </p>
              </div>

              <p className="text-white font-semibold text-base sm:text-lg pt-1">
                You get a performance marketer, a conversion auditor, and an AI web builder in one person.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars Stack */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>Core Growth Pillar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
