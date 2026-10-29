import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Digital Marketing Intern",
    company: "OSFORH Software Solutions",
    type: "On-Site",
    date: "Sept 2026 – Dec 2026",
    location: "Kerala, India",
    points: [
      "Manage end-to-end social media strategy, content calendars, and daily execution for 4 in-house brands.",
      "Run deep-dive competitor audits and website SEO/UX audits, turning raw findings into clear action reports for the team.",
      "Handle foundational SEO: keyword research, SEO blog writing, on-page improvements, and Google Business Profile (Local SEO) optimization to capture local search traffic."
    ],
    tag: "Social Strategy & SEO"
  },
  {
    role: "Freelance Digital Marketing Consultant & Meta Ads Manager",
    company: "Freelance & Consulting",
    type: "Remote",
    date: "May 2025 – Present",
    location: "India & Middle East (GCC)",
    points: [
      "Run targeted Meta Ads campaigns and manage social media presence for brands in India and the Middle East (3+ active retainers, 30+ published campaigns/posts, and 16+ custom Canva ad creatives).",
      "Design and ship fast, conversion-focused landing pages and web apps using modern web tech and AI vibe-coding workflows—helping clients capture more leads without paying agency dev retainers."
    ],
    tag: "Meta Ads & Funnels"
  },
  {
    role: "Freelance Backend & Android Developer",
    company: "Client Projects (Java / Spring Boot)",
    type: "Remote",
    date: "May 2021 – Oct 2022 (1 Year, 5 Months)",
    location: "Remote",
    points: [
      "Built and delivered commercial Android apps (Java) and backend systems (Spring Boot) for freelance clients.",
      "Sped up slow apps by cleaning up MySQL and Oracle database queries, cutting API response times, and smoothing out UI lag.",
      "Connected real-world business tools into client software, including automated PDF invoice generators, Excel import/export pipelines, and thermal/desktop printer setups."
    ],
    tag: "Backend & Systems"
  },
  {
    role: "Sales & Computer Hardware Technician",
    company: "Cisco Gulf Bazar",
    type: "On-Site",
    date: "2019 (3 Months)",
    location: "Malappuram, Kerala",
    points: [
      "My first hands-on tech job: diagnosed and fixed dead desktops and laptops, swapped out faulty RAM, storage drives, and keyboards.",
      "Installed Windows/Linux systems and configured local shop networks and peripheral equipment."
    ],
    tag: "Hardware & Networks"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-zinc-950/30">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-zinc-400 mb-4">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Where I’ve Worked &amp; What I’ve Shipped
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            A progression from systems engineering and hardware to full-funnel digital marketing.
          </p>
        </motion.div>

        {/* Flawlessly Aligned Vertical Timeline Spine */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => {
            const isLast = idx === experiences.length - 1;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative flex gap-4 sm:gap-6 group"
              >
                {/* Connecting Track Line to next milestone (stops cleanly at last milestone) */}
                {!isLast && (
                  <span
                    className="absolute left-0 top-6 sm:top-7 flex w-7 sm:w-8 justify-center -bottom-8 pointer-events-none"
                    aria-hidden="true"
                  >
                    <span className="w-0.5 bg-gradient-to-b from-emerald-500/70 via-white/20 to-zinc-700/60" />
                  </span>
                )}

                {/* Timeline Milestone Dot */}
                <div className="relative flex-none flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-950 border-2 border-emerald-400 group-hover:border-emerald-300 group-hover:shadow-[0_0_16px_rgba(52,211,153,0.5)] transition-all shadow-[0_0_10px_rgba(52,211,153,0.25)] z-10 mt-6 sm:mt-7">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                </div>

                {/* Experience Card */}
                <div className="flex-auto min-w-0">
                  <div className="glass-card p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {exp.tag}
                      </span>
                      <span className="text-zinc-400 text-xs flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" /> {exp.date}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-white mb-1">
                      {exp.role}
                    </h3>
                    
                    <div className="text-zinc-400 text-xs sm:text-sm font-medium mb-4 flex flex-wrap items-center gap-2">
                      <span className="text-zinc-200 font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-zinc-500" /> {exp.location}</span>
                    </div>

                    <ul className="space-y-2 text-zinc-300 text-xs sm:text-sm list-none pl-0">
                      {exp.points.map((point, i) => (
                        <li key={i} className="leading-relaxed relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/40 before:rounded-full font-light">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
