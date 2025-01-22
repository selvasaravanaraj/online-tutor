import React from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
  const handleSend = (e) => {
    e.preventDefault();
    
    // Get the message input value
    const message = e.target.message.value;
    
    // Get the email input value (optional, you can pre-fill it)
    const userEmail = e.target.email.value;

    // Construct the Gmail URL with the email and message body
    const recipient = "selvasaravanarajj@gmail.com"; // Use a static email or dynamic input
    const subject = "Your Subject Here"; // Modify as needed
    const body = encodeURIComponent(`Message: ${message}\nFrom: ${userEmail}`);

    // Open Gmail with the constructed URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
      onSubmit={handleSend} // Bind the handleSend function to form submission
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name" // Ensure proper name attributes for form inputs
          className="mt-1 block w-full border-2 border-gray-300 bg-white shadow-lg p-3 rounded-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email" // Ensure proper name attributes for form inputs
          className="mt-1 block w-full border-2 border-gray-300 bg-white shadow-lg p-3 rounded-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message" // Ensure proper name attributes for form inputs
          rows={4}
          className="mt-1 block w-full border-2 border-gray-300 bg-white shadow-lg p-3 rounded-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Send Message
      </button>
    </motion.form>
  );
}
