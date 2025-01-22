import { useState } from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  
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