import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/shared/SectionTitle';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}