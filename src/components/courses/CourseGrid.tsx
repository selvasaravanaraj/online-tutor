import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { CourseCard } from './CourseCard';
import { Course } from '../../types';

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <AnimatePresence>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </AnimatePresence>
    </div>
  );
}