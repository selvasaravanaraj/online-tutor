import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTestimonials } from '../../hooks/useTestimonials';

export function TestimonialSlider() {
  const { currentTestimonial, next, previous } = useTestimonials();

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {currentTestimonial.content}
          </p>
          <div className="flex items-center">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {currentTestimonial.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {currentTestimonial.role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={previous}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}