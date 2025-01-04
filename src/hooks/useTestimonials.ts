import { useState } from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Park',
    role: 'Pre-Med Student',
    content: 'The MCAT preparation course was exactly what I needed. The instructors break down complex concepts into manageable pieces, and the practice tests were invaluable. I improved my score by 15 points!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
  },
  {
    id: '2',
    name: 'Emma Thompson',
    role: 'High School Junior',
    content: 'The SAT Math prep course helped me achieve a perfect 800 score! The strategies and practice problems were incredibly helpful, and my tutor was always patient and encouraging.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
  },
  {
    id: '3',
    name: 'James Wilson',
    role: 'Parent',
    content: 'My son struggled with math until we found this tutoring center. The elementary math program has been transformative - he now enjoys math and his confidence has soared.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
  },
  {
    id: '4',
    name: 'Sofia Rodriguez',
    role: 'College Freshman',
    content: 'The AP English Literature course prepared me perfectly for college. I not only got a 5 on the AP exam but also feel confident in my college English classes.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
  }
];

export function useTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return {
    currentTestimonial: TESTIMONIALS[currentIndex],
    next,
    previous,
  };
}