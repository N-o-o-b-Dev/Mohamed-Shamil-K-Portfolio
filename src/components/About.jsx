import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["JAVA", "C++", "JavaScript"] },
  { category: "Technologies", items: ["React.js", "SpringBoot", "AndroidSDK", "MySQL", "Tailwind CSS", "SQL Server (MSSQL)"] },
  { category: "Backend", items: ["RESTful API Development", "API Integration", "Authentication (JWT)", "Client-Server Architecture"] },
  { category: "Tools & Platforms", items: ["Git", "Github", "Docker", "VS Code", "Android Studio", "Figma", "Canva"] },
  { category: "Concepts", items: ["Object-Oriented Programming", "Data Structures"] },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About & <span className="text-white">Skills</span></h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert lg:prose-xl"
          >
            <p className="text-zinc-400 leading-relaxed mb-6 font-light">
              I am a passionate Full-Stack Engineer and Freelance Digital Consultant with a strong foundation in Computer Science from Anna University. I thrive on building end-to-end solutions that solve real-world problems.
            </p>
            <p className="text-zinc-400 leading-relaxed font-light">
              With experience spanning across backend architecture using Spring Boot to crafting engaging frontends with React, I bridge the gap between complex functionality and exceptional, minimalist user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="glass-card p-6 border-l-2 border-l-white/20 hover:border-l-white transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider text-sm">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:border-white/50 transition-colors">
                      {item}
                    </span>
                  ))}
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
