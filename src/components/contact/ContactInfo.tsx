import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'francisxavier@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '91-8248353817',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    value: 'vannarpettai tiruelveli(627003)',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-start space-x-4"
        >
          <div className="text-indigo-600 dark:text-indigo-400">
            {detail.icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {detail.label}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {detail.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}