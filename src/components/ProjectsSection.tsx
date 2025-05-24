
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Legacy Oracle to PostgreSQL Migration',
      description: 'Comprehensive data migration from legacy Oracle database to modern PostgreSQL infrastructure with zero data loss.',
      tech: ['PostgreSQL', 'Oracle', 'Python', 'ETL'],
      details: 'Led the complete migration of enterprise data from Oracle DB to PostgreSQL, ensuring data integrity and minimal downtime.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Multi-Source AWS Redshift Migration',
      description: 'Unified data from multiple sources into AWS Redshift for centralized analytics and reporting.',
      tech: ['AWS Redshift', 'ETL', 'Data Warehousing', 'SQL'],
      details: 'Designed and implemented ETL pipelines to consolidate data from various sources into a scalable data warehouse.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Architecture Visualization with Graphviz',
      description: 'Flask API service for generating dynamic architecture diagrams using Graphviz for system documentation.',
      tech: ['Flask', 'Graphviz', 'Python', 'API'],
      details: 'Built a REST API service that generates real-time architecture diagrams for complex data systems.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ADA Platform Meta-model',
      description: 'Developed meta-model architecture for data centralization and standardization across enterprise systems.',
      tech: ['Data Modeling', 'Architecture', 'Python', 'Centralization'],
      details: 'Created a unified meta-model that standardizes data across multiple enterprise platforms and systems.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Real-time Fraud Detection',
      description: 'Implemented fraud detection system using Kafka for streaming and Flink for real-time processing.',
      tech: ['Kafka', 'Apache Flink', 'Streaming', 'ML'],
      details: 'Built a real-time fraud detection system processing millions of transactions with low latency.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing impactful data engineering solutions and innovative technical implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
