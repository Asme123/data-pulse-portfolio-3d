
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Asmita Patel</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a Data Engineer with over 7 years of experience designing and implementing 
                scalable, high-performance data platforms. My expertise spans big data processing, 
                real-time and batch data pipelines, data modeling, and cloud-native data solutions.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in leveraging technologies such as Apache Spark, Flink, Kafka, AWS Glue, 
                and SQL to build robust, low-latency data ecosystems that support advanced analytics 
                and real-time decision-making.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about transforming raw data into strategic insights and enabling 
                data-driven innovation across enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Experience</h4>
                <p className="text-2xl font-bold text-white">7+ Years</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Education</h4>
                <p className="text-sm text-gray-300">B.Tech - Purushottam Institute of Engg & Technology</p>
                <p className="text-xs text-gray-400 mt-1">12th - DAV Public School</p>
                <p className="text-xs text-gray-400">10th - St. Gregorios School</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">Core Specializations</h4>
                
                <div className="space-y-3">
                  {[
                    'Big Data Processing & Analytics',
                    'Real-time & Batch Data Pipelines',
                    'Cloud-Native Data Solutions',
                    'Data Modeling & Architecture',
                    'ETL/ELT Pipeline Development',
                    'Performance Optimization'
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
