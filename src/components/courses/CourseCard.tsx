import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, BarChart } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg 
                 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {course.level}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.subject}
          </div>
          <div className="flex items-center">
            <BarChart className="w-4 h-4 mr-1" />
            {course.level}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          ₹{course.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}