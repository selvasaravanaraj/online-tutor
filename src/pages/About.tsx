import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/shared/SectionTitle';
import { Users, Target, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Education Consultant',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    bio: 'Ph.D. in Education with 15+ years of teaching experience',
  },
  {
    name: 'Michael Chen',
    role: 'Mathematics Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300',
    bio: 'Former MIT professor specializing in advanced mathematics',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Language Arts Expert',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    bio: 'Published author and certified language instructor',
  },
];

const milestones = [
  { year: 2015, title: 'Founded', description: 'Started with just 3 tutors and 20 students' },
  { year: 2017, title: 'Expansion', description: 'Opened our first dedicated learning center' },
  { year: 2019, title: 'Online Platform', description: 'Launched our digital learning platform' },
  { year: 2021, title: 'Global Reach', description: 'Expanded to serve students worldwide' },
];

export function About() {
  return (
    <div className="space-y-20 py-16">
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle>Our Mission</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Users />, title: 'Personal Attention', text: 'Individualized learning plans for every student' },
            { icon: <Target />, title: 'Excellence', text: 'Committed to achieving the highest academic standards' },
            { icon: <Award />, title: 'Results', text: 'Proven track record of student success' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle>Our Team</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle>Our Journey</SectionTitle>
        <div className="relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex items-center gap-8 mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-32 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {milestone.year}
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}