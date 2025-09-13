import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Globe, Code } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (name) => {
    switch (name) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'mail': return Mail;
      case 'globe': return Globe;
      case 'code': return Code;
      default: return Globe;
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aditya's World</h3>
                <p className="text-gray-400 text-sm">Software Development Portfolio</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate Software Development Engineer specializing in backend development, 
              microservices architecture, and AI/ML technologies. Building scalable solutions 
              that make a real impact.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = getIcon(link.icon);
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                    title={link.name}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-gray-300 text-sm">{personalInfo.location}</p>
              </div>
            </div>

            {/* Status */}
            <div className="mt-6 p-3 bg-green-900/30 border border-green-700 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-medium text-sm">Available for hire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 {personalInfo.name}. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & FastAPI</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Built with:</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">FastAPI</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">MongoDB</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Tailwind</span>
              </div>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-500 text-xs">
            <span>Last updated: January 2025</span>
            <span>•</span>
            <span>Version 2.0</span>
            <span>•</span>
            <a 
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Visit Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;