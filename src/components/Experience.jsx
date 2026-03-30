import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Freelance Digital Consultant",
    company: "Freelance",
    date: "May 2023 – Present",
    location: "Remote",
    points: [
      "Designed and developed high-converting landing pages using modern web technologies, improving client lead generation.",
      "Created engaging visual content and marketing creatives using Canva, aligned with client brand identity.",
      "Designed intuitive UI/UX for web and mobile applications focusing on user-centered design principles.",
      "Developed and contributed to web and mobile applications, integrating frontend interfaces with scalable solutions.",
      "Managed and grew social media accounts for multiple clients, handling content strategy."
    ]
  },
  {
    role: "FullStack Developer",
    company: "Freelance",
    date: "Jan 2021 – May 2023",
    location: "Remote",
    points: [
      "Developed and delivered multiple Android applications and Spring Boot applications for clients.",
      "Designed and Integrated RESTful APIs using Spring Boot and Firebase to support scalable backend systems.",
      "Optimized application performance by improving database queries, reducing latency, and enhancing UI responsiveness.",
      "Integrated third-party services such as PDF generation, Excel import/export, and printer configuration."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-zinc-900/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-surface bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 text-black">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-zinc-400 text-sm flex items-center gap-1 font-medium bg-white/5 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3" /> {exp.date}
                  </span>
                </div>
                <div className="text-zinc-500 font-medium mb-4 uppercase tracking-wider text-sm">{exp.company} • {exp.location}</div>
                <ul className="space-y-3 text-zinc-400 text-sm list-none pl-0">
                  {exp.points.map((point, i) => (
                    <li key={i} className="leading-relaxed relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/30 before:rounded-full">{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
