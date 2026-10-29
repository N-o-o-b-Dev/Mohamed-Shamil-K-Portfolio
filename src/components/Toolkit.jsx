import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Bot, 
  Palette, 
  Terminal, 
  Languages, 
  Layers 
} from 'lucide-react';

const mainToolkits = [
  {
    title: "Performance Marketing & Growth",
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    badge: "Acquisition & CRO",
    skills: [
      "Meta Ads Manager",
      "Facebook & Instagram Ads",
      "Google Ads",
      "Social Media Marketing (SMM)",
      "Conversion Rate Optimization (CRO)",
      "Funnel Auditing",
      "Keyword Research",
      "On-Page SEO",
      "Local SEO (Google Business Profile)",
      "Competitor Analysis"
    ]
  },
  {
    title: "AI & \"Vibe Coding\" Stack",
    icon: <Bot className="w-5 h-5 text-purple-400" />,
    badge: "10x Speed Workflow",
    skills: [
      "Claude",
      "Google Gemini",
      "ChatGPT",
      "Google Antigravity",
      "Cursor",
      "Google Stitch AI",
      "Google Flow",
      "Prompt Engineering",
      "AI Workflow Automation"
    ]
  },
  {
    title: "Creative & Design Tools",
    icon: <Palette className="w-5 h-5 text-sky-400" />,
    badge: "Hooks & Creatives",
    skills: [
      "Canva (Ad Creatives, Carousels, Brand Posters)",
      "Figma",
      "CapCut (Short-Form Video & Reels)",
      "Visual Hierarchy & Ad Hook Design"
    ]
  },
  {
    title: "Technical & Architecture Foundation",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    badge: "Engineering Depth",
    skills: [
      "Coding Fundamentals",
      "Object-Oriented Programming (OOP)",
      "RESTful APIs",
      "Client-Server Architecture",
      "React.js",
      "Tailwind CSS",
      "Java Spring Boot",
      "MySQL",
      "MSSQL",
      "Firebase",
      "Postman",
      "Git & GitHub",
      "VS Code",
      "PC Hardware & OS Troubleshooting"
    ]
  }
];

const languages = [
  { name: "Malayalam", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Fluent" },
  { name: "Hindi", level: "Basic" }
];

const Toolkit = () => {
  return (
    <section id="toolkit" className="py-24 relative border-t border-white/5">
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
            <Layers className="w-3.5 h-3.5" />
            My Toolkit &amp; Skills
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Tools I Use to Grow Brands &amp; Build Products
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Organized across performance marketing, modern AI vibe-coding, design systems, and engineering fundamentals.
          </p>
        </motion.div>

        {/* Balanced 2x2 Domain Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {mainToolkits.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    {cat.badge}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-white/5 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
                <span>Domain Focus</span>
                <span>{cat.skills.length} competencies</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sleek Languages Horizontal Strip */}
        <motion.div 
          className="glass-card p-5 sm:p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-rose-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Languages Spoken &amp; Written</h4>
              <p className="text-zinc-500 text-xs">Comfortable working with multi-regional clients across India &amp; GCC</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {languages.map((lang, lIdx) => (
              <span 
                key={lIdx} 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300"
              >
                <span className="text-white font-medium">{lang.name}</span>
                <span className="text-zinc-500 text-[10px]">({lang.level})</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Toolkit;
