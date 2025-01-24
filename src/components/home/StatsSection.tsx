import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { BookOpen, Users, Award } from 'lucide-react';

const stats = [
  { icon: <Users />, value: 5000, label: 'Students Taught' },
  { icon: <BookOpen />, value: 100, label: 'Courses' },
  { icon: <Award />, value: 95, label: 'Success Rate' },
];

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">
            {stat.icon}
          </div>
          <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            <CountUp end={stat.value} duration={2.5} />
            {stat.label === 'Success Rate' && '%'}
          </div>
          <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
        </motion.div>
      ))}
    </section>
  );
}