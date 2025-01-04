import { useState, useMemo } from 'react';
import { Course, CourseFilters } from '../types';

const COURSES: Course[] = [
  {
    id: '1',
    title: 'SAT Math Preparation',
    description: 'Comprehensive SAT math prep covering algebra, geometry, and advanced math concepts with practice tests.',
    level: 'Advanced',
    subject: 'Mathematics',
    price: 299,
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=400',
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
  {
    id: '3',
    title: 'AP English Literature',
    description: 'Master literary analysis, essay writing, and critical reading for AP English success.',
    level: 'Advanced',
    subject: 'English',
    price: 249,
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '4',
    title: 'MCAT Biology Prep',
    description: 'Intensive MCAT biology preparation covering all tested concepts with practice questions.',
    level: 'Advanced',
    subject: 'Science',
    price: 399,
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '5',
    title: 'Elementary Math Fundamentals',
    description: 'Build strong mathematical foundations for young learners with interactive lessons.',
    level: 'Beginner',
    subject: 'Mathematics',
    price: 149,
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&h=400',
  },
  {
    id: '6',
    title: 'US History Review',
    description: 'Comprehensive review of American history for AP exams and college preparation.',
    level: 'Intermediate',
    subject: 'History',
    price: 199,
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=800&h=400',
  }
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