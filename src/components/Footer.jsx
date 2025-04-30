'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2025 Daily Hub. All rights reserved.</p>
        </div>
        <div className="space-x-6">
          <a href="/about" className="hover:text-blue-500">
            About
          </a>
          <a href="/contact" className="hover:text-blue-500">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-blue-500">
            Terms of Service
          </a>
        </div>
        <div className="space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
