import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const handleNavigation = (url: string) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">EduCenter</h3>
          <p className="text-gray-400">
            Transforming lives through quality education and personalized tutoring.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-4">
            <li className="p-3 bg-gray-700 rounded-lg">
              <span className="font-semibold text-white">Address:</span>
              <p className="text-gray-400">123 Vanarpettai</p>
              <p className="text-gray-400">Madurai Bye Pass Road</p>
              <p className="text-gray-400">Tirunelveli (627414)</p>
            </li>
            <li className="p-3 bg-gray-700 rounded-lg">
              <span className="font-semibold text-white">Phone:</span>
              <p className="text-gray-400">(004-005-43789)</p>
            </li>
            <li className="p-3 bg-gray-700 rounded-lg">
              <span className="font-semibold text-white">Email:</span>
              <p className="text-gray-400">support@educationcenter.com</p>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <button
              onClick={() => handleNavigation('https://www.facebook.com')}
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleNavigation('https://www.instagram.com')}
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleNavigation('mailto:support@educationcenter.com')}
              className="text-gray-400 hover:text-white"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleNavigation('https://www.linkedin.com')}
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} EducationCenter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}