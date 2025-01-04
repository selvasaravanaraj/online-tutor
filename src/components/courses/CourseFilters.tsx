import React from 'react';
import { motion } from 'framer-motion';
import { CourseFilters as FilterType } from '../../types';

interface CourseFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

const subjects = ['All', 'Mathematics', 'Science', 'English', 'History', 'Programming'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export function CourseFilters({ filters, onFilterChange }: CourseFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <select
          value={filters.subject}
          onChange={(e) => onFilterChange({ ...filters, subject: e.target.value })}
          className="w-full rounded-lg border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Level
        </label>
        <select
          value={filters.level}
          onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
          className="w-full rounded-lg border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Price Range
        </label>
        <input
          type="range"
          min="0"
          max="500"
          value={filters.maxPrice}
          onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full"
        />
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Max Price: ${filters.maxPrice}
        </div>
      </div>
    </div>
  );
}