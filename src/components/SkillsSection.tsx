
import React from 'react';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Libraries & Frameworks',
      skills: ['Pandas', 'NumPy', 'psycopg2', 'boto3', 'Flask'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Big Data & Streaming',
      skills: ['Apache Spark (PySpark)', 'Spark SQL', 'Apache Flink', 'Kafka'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker/Podman', 'Git', 'CI/CD Pipeline'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Database Technologies',
      skills: ['PostgreSQL', 'AWS Redshift', 'DynamoDB'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Cloud Technologies',
      skills: ['AWS Glue', 'AWS Lambda', 'Step Functions'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable data solutions and driving innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-200`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
