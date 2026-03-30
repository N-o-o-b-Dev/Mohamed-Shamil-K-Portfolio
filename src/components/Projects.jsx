import { motion } from 'framer-motion';
import { ExternalLink, Database, Layout } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Vansale",
    stack: ["SpringBoot", "MySQL", "REST API"],
    description: "Designed and implemented RESTful APIs for order processing, inventory, and customer management. Optimized MySQL queries and backend performance for handling massive transactional data.",
    features: ["Secure API communication", "Database Optimization", "Data Validation"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Driveway",
    stack: ["Fullstack", "React", "Firebase"],
    description: "An end-to-end Dealership ERP tracking the full lifecycle of vehicles, rentals, and workshop maintenance. Streamlined billing by aggregating manual and automated rent data into a unified, one-click PDF export system.",
    features: ["Conflict-resolution system", "Double-booking prevention", "PDF Exports"],
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "SyncApp",
    stack: ["React JS", "SpringBoot", "MSSQL", "MySQL"],
    description: "Solved Data Isolation Problems by creating a tool that connects completely different database systems (MSSQL Server and MySQL). Combined a modern front-end UI with a reliable backend server.",
    features: ["Database integration", "Automated updates", "Easy-to-use admin UI"],
    icon: <Database className="w-6 h-6" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card flex flex-col h-full overflow-hidden group hover:border-white/20"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    <button className="text-zinc-500 hover:text-white transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </button>
                    <button className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-300 transition-colors">{project.title}</h3>

                <p className="text-zinc-400 mb-8 flex-1 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5 mt-auto">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
