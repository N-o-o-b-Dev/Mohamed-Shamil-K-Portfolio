import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';

const academicTraining = [
  {
    institution: "HACA Marketing School",
    degree: "Performance Marketing Specialization",
    period: "Sept 2026 – Nov 2026",
    location: "Kozhikode, Kerala",
    description: "Intensive specialization in Meta Ads scaling, creative testing architecture, funnel tracking, and e-commerce growth strategies.",
    badge: "Marketing Specialization"
  },
  {
    institution: "SSM College of Engineering",
    degree: "B.E. in Computer Science & Engineering (CSE)",
    period: "2023 – 2026",
    location: "Namakkal, Tamil Nadu",
    description: "Core computer science fundamentals, data structures, algorithms, database management, and software architecture.",
    badge: "Engineering Degree"
  },
  {
    institution: "Majlis Polytechnic College",
    degree: "Diploma in Computer Engineering",
    period: "2018 – 2021",
    location: "Puramannur, Malappuram, Kerala",
    description: "CGPA: 7.1. Hands-on computer hardware, networking principles, web technologies, and systems engineering.",
    badge: "Diploma • CGPA 7.1"
  }
];

const certifications = [
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    verifyId: "VXUMJKUULC2Q",
    verifyUrl: "https://www.coursera.org/verify/VXUMJKUULC2Q",
    category: "Security & Infrastructure"
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google / Coursera",
    verifyId: "21MOU7KQT36N",
    verifyUrl: "https://www.coursera.org/verify/21MOU7KQT36N",
    category: "Risk Management"
  },
  {
    title: "Core Concepts of Java",
    issuer: "DevTown",
    verifyId: "5oa1xu4q",
    verifyUrl: "#",
    category: "Object-Oriented Programming"
  }
];

const Education = () => {
  return (
    <section id="credentials" className="py-24 relative border-t border-white/5">
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
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Education &amp; Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Combining rigorous Computer Science Engineering foundations with specialized Performance Marketing training.
          </p>
        </motion.div>

        {/* Balanced 2-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Academic & Specialized Training */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">Academic &amp; Specialized Training</h3>
            </div>

            {academicTraining.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {item.badge}
                  </span>
                  <span className="text-zinc-400 text-xs flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" /> {item.period}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-1">{item.degree}</h4>
                
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
                  <span className="text-zinc-200 font-medium">{item.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-zinc-500" /> {item.location}</span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Verified Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">Verified Certifications</h3>
            </div>

            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                      {cert.category}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h4 className="text-base font-bold text-white mb-0.5">{cert.title}</h4>
                  <p className="text-xs text-zinc-400 mb-3">{cert.issuer}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-zinc-400">
                    ID: <span className="text-white font-semibold">{cert.verifyId}</span>
                  </div>
                  {cert.verifyUrl !== "#" ? (
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-zinc-500">Verified Credential</span>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/20 to-zinc-900/40 border border-emerald-500/20 text-xs text-zinc-400 leading-relaxed">
              <span className="text-emerald-400 font-semibold block mb-1">Audit-Ready Engineering Quality</span>
              All credentials have verified IDs. Technical and security foundations directly inform conversion rate audit practices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
