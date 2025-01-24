import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { SectionTitle } from '../components/shared/SectionTitle';
import { CourseGrid } from '../components/courses/CourseGrid';
import { useCourses } from '../hooks/useCourses';

export const Home: React.FC = () => {
  const { courses } = useCourses();
  const featuredCourses = courses.slice(0, 3); // Show only first 3 courses

  return (
    <div className="space-y-20">
      <HeroSection />
      {/* <StatsSection /> */}
      
      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle>Programming Courses</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CourseGrid courses={featuredCourses} />
          <div className="text-center mt-12">
            <a
              href="/courses"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full
                       hover:bg-indigo-700 transition-colors duration-200"
            >
              View All Courses
            </a>
          </div>
        </motion.div>
      </section>

      {/* Project Assistance (Updated to Boxes) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle>Project Assistance</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Web Development
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get expert guidance on front-end, back-end, and full-stack development projects.
              </p>
            </div>

            {/* AI & ML */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                AI & ML
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Build intelligent systems using machine learning models and AI frameworks.
              </p>
            </div>

            {/* IoT */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                IoT
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn to create IoT solutions, connect devices, and work on smart systems.
              </p>
            </div>

            {/* AR & VR */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                AR & VR
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Develop immersive experiences with Augmented and Virtual Reality technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Online Tuition */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionTitle>Online Tuition</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UG Computer Branch 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Computer Science Engineering
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get personalized tuition for core subjects like Data Structures, Algorithms, and more.
              </p>
            </div>

            {/* UG Computer Branch 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Information Technology
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn IT-focused subjects like Networking, Databases, and Software Engineering.
              </p>
            </div>

            {/* UG Computer Branch 3 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Electronics and Communication
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Master topics like Microprocessors, Embedded Systems, and more with expert guidance.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Special Offer */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Limited Time Offer
          </h2>
          <p className="text-xl mb-8">
            Get 20% off on your first course enrollment. Start your learning journey today!
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium
                         hover:bg-opacity-90 transition-all duration-200">
            Claim Discount
          </button>
        </motion.div>
      </section>
    </div>
  );
};
