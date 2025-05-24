
import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceSection = () => {
  const experiences = [
    {
      year: '2018 - Present',
      title: 'Senior Data Engineer',
      company: 'Enterprise Solutions',
      description: 'Leading data platform architecture and implementing scalable ETL pipelines for enterprise clients.',
      highlights: ['AWS Cloud Migration', 'Real-time Processing', 'Team Leadership']
    },
    {
      year: '2016 - 2018',
      title: 'Data Engineer',
      company: 'Tech Solutions Inc.',
      description: 'Developed data warehousing solutions and optimized database performance for high-volume applications.',
      highlights: ['Data Warehousing', 'Performance Optimization', 'Big Data Processing']
    },
    {
      year: '2014 - 2016',
      title: 'Junior Data Engineer',
      company: 'Innovation Labs',
      description: 'Started career building ETL processes and data integration solutions for various business domains.',
      highlights: ['ETL Development', 'Data Integration', 'Business Intelligence']
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks',
      year: '2023'
    },
    {
      name: 'Eveready Award',
      issuer: 'Client Excellence',
      year: '2022'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Experience & Achievements
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Journey</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-purple-500/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                    <div className="text-purple-400 font-medium mb-1">{exp.year}</div>
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                    <div className="text-gray-400 mb-3">{exp.company}</div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Certifications & Awards</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                      <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-purple-400 font-medium">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
              
              {/* Additional Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Migrated 10+ TB of enterprise data with zero downtime</li>
                  <li>• Reduced data processing time by 60% through optimization</li>
                  <li>• Led cross-functional teams of 5+ engineers</li>
                  <li>• Implemented fraud detection saving $2M+ annually</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
