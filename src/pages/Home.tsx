import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { SectionTitle } from '../components/shared/SectionTitle';
import { CourseGrid } from '../components/courses/CourseGrid';
import { useCourses } from '../hooks/useCourses';

export function Home() {
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
              View All Courses.
            </a>
          </div>
          
        </motion.div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <TestimonialSlider />
        </div>
      </section> */}

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
}