import React from 'react';
import { CourseGrid } from '../components/courses/CourseGrid';
import { CourseFilters } from '../components/courses/CourseFilters';
import { useCourses } from '../hooks/useCourses';
import { SectionTitle } from '../components/shared/SectionTitle';

export function Courses() {
  const { 
    courses, 
    filters, 
    setFilters, 
    filteredCourses 
  } = useCourses();

  return (
    <div className="py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle>Our Courses</SectionTitle>
        <CourseFilters filters={filters} onFilterChange={setFilters} />
        <CourseGrid courses={filteredCourses} />
      </div>
    </div>
  );
}