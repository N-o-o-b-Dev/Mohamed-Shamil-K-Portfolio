import { motion } from 'framer-motion';
import { Archive, Database, Smartphone, Server, CheckCircle2 } from 'lucide-react';

const archiveProjects = [
  {
    title: "Moorkanad Panchayat Community App",
    category: "Android Java & Firebase",
    period: "2021 (Final-Year Project)",
    badge: "Created Entirely by Me (Hand-Coded)",
    icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    story: "We started this project because we needed an electrician for a small home repair and couldn't find a reliable local contact anywhere. Built entirely by me from scratch: an OTP-verified community app for Moorkanad Panchayat where locals register their occupation, services (electricians, auto drivers, plumbers), and blood group.",
    impact: "During medical emergencies, residents could filter the directory by blood group in seconds. We also mapped out a feature to let residents download basic Panchayat paper forms directly from their phones.",
    stack: ["Android Java", "Firebase Auth", "Realtime DB", "SMS OTP"]
  },
  {
    title: "SyncApp — Cross-Database Bridge",
    category: "Full-Stack Bridge Tool",
    period: "Spring Boot & React",
    badge: "Created Entirely by Me (Hand-Coded)",
    icon: <Database className="w-5 h-5 text-sky-400" />,
    story: "Companies often get stuck when two different databases can't talk to each other. Built entirely by me from scratch: a full-stack synchronization tool that connects Microsoft SQL Server and MySQL seamlessly.",
    impact: "Automatically adjusts to table changes and column schema variations so database admins don't have to rewrite ETL scripts or application code every time a database column updates.",
    stack: ["React.js", "Java Spring Boot", "MSSQL Server", "MySQL"]
  },
  {
    title: "Vansale B2B Backend",
    category: "Enterprise Distribution API",
    period: "Java Spring Boot",
    badge: "Hand-Coded Backend Architecture",
    icon: <Server className="w-5 h-5 text-amber-400" />,
    story: "Wholesale van sale distribution networks require high uptime and rapid sync while drivers are on the road fulfilling retail store orders.",
    impact: "Built secure REST APIs to handle wholesale van sales, live inventory counts, customer orders, and heavy daily transaction data without database latency.",
    stack: ["Java Spring Boot", "MySQL", "RESTful APIs", "JWT Auth"]
  }
];

const EngineeringProjects = () => {
  return (
    <section id="engineering-archive" className="py-24 relative bg-zinc-950/40 border-t border-white/5">
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
            <Archive className="w-3.5 h-3.5" />
            Earlier Engineering Projects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            From the Archives: Hand-Coded Projects Created Entirely by Me
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Before shifting into performance marketing and modern AI vibe coding, my first projects were created and coded entirely by me from scratch. That hands-on engineering foundation still shapes how I diagnose data integrity, checkout bottlenecks, and user psychology today.
          </p>
        </motion.div>

        {/* Balanced 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {archiveProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {project.period}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-4">
                  {project.category}
                </p>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  {project.story}
                </p>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 mb-6 text-xs text-zinc-300 leading-relaxed font-light">
                  <strong className="text-white font-medium block mb-0.5">Key Impact:</strong>
                  {project.impact}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.stack.map((item, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringProjects;
