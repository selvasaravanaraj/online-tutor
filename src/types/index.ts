export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  subject: string;
  price: number;
  duration: string;
  image: string;
}

export interface CourseFilters {
  subject: string;
  level: string;
  maxPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
}