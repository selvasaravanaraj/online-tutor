import { useState, useMemo } from 'react';
import { Course, CourseFilters } from '../types';

const COURSES: Course[] = [
 
  {
    id: '1',
    title: 'Python for Beginners',
    description: 'Start your coding journey with Python. Learn fundamentals, data structures, and basic algorithms.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '2',
    title: 'Python for Beginners',
    description: 'Start your coding journey with Python. Learn fundamentals, data structures, and basic algorithms.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  
];

export function useCourses() {
  const [filters, setFilters] = useState<CourseFilters>({
    subject: 'All',
    level: 'All',
    maxPrice: 500,
  });

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const subjectMatch = filters.subject === 'All' || course.subject === filters.subject;
      const levelMatch = filters.level === 'All' || course.level === filters.level;
      const priceMatch = course.price <= filters.maxPrice;
      
      return subjectMatch && levelMatch && priceMatch;
    });
  }, [filters]);

  return {
    courses: COURSES,
    filters,
    setFilters,
    filteredCourses,
  };
}