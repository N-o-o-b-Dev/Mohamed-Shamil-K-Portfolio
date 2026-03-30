import { motion } from 'framer-motion';

const educations = [
  {
    institution: "Anna University",
    degree: "Bachelor of Science in Computer Science",
    date: "2023 - 2026",
    location: "Erode, TN",
  },
  {
    institution: "State Board of Technical Education",
    degree: "Bachelor of Science in Computer Science (GPA: 7.1)",
    date: "2018 - 2021",
    location: "Valanchery, KL",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Education</h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {educations.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 border-l-4 border-l-white flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                <p className="text-zinc-300 font-medium mb-1">{edu.degree}</p>
                <p className="text-zinc-500 text-sm">{edu.location}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white font-medium text-sm">
                  {edu.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
