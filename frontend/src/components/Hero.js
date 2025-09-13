import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Mock resume download - in real implementation, this would download the actual resume
    const link = document.createElement('a');
    link.href = personalInfo.resume_url;
    link.download = 'Aditya_Maskar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-blue-500/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-500/20 rounded-full"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-500/10 rounded-full animate-bounce delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Bio */}
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleDownloadResume}
                className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
              
              <div className="flex items-center space-x-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                  title="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Available for hire!
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;