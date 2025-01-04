<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 290a69daf94b7ea2fbc68fac7c7ae08ebc514a28
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
=======
>>>>>>> 290a69daf94b7ea2fbc68fac7c7ae08ebc514a28
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Courses' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
<<<<<<< HEAD
    <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            EduCenter
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
            />
            <span
              className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out
                ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
          </div>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-sticky">
          <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
=======
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                EduCenter
              </span>
            </Link>
          </div>
          <div className="flex items-center">
>>>>>>> 290a69daf94b7ea2fbc68fac7c7ae08ebc514a28
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === to
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
<<<<<<< HEAD
                onClick={() => setIsMenuOpen(false)}
=======
>>>>>>> 290a69daf94b7ea2fbc68fac7c7ae08ebc514a28
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}