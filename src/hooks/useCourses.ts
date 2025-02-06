import { useState, useMemo } from 'react';
import { Course, CourseFilters } from '../types';

const COURSES: Course[] = [
 
  {
    id: '1',
    title: 'C programming',
    description: 'A fast and efficient language for system programming and embedded systems.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '2',
    title: 'Java',
    description: 'A cross-platform language used for web, enterprise, and Android development.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '3',
    title: 'Python for Beginners',
    description: 'A beginner-friendly language ideal for AI, automation, and web development.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '4',
    title: 'Fullstack',
    description: 'Complete web development covering both front-end and back-end.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '5',
    title: 'ARVR',
    description: 'Technologies for immersive real-world (AR) and digital (VR) experiences.',
    level: 'Beginner',
    subject: 'Programming',
    price: 199,
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '6',
    title: 'AI&ML',
    description: 'Intelligent systems that learn, predict, and automate tasks.',
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