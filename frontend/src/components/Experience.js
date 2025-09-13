import React from 'react';
import { MapPin, Calendar, ExternalLink, TrendingUp } from 'lucide-react';
import { experience, internships } from '../data/mock';

const Experience = () => {
  const allExperience = [...experience, ...internships];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development and backend engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {allExperience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== allExperience.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 z-0"></div>
              )}

              <div className="relative z-10 mb-12">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.position}
                          </h3>
                          <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Company Logo */}
                      <div className="hidden md:block">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 rounded-lg object-cover shadow-md"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="bg-gray-50 dark:bg-gray-800 px-8 py-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.company === 'Jio Platforms Limited' ? 'Current Position' : 'Internship Completed'}
                      </span>
                      {exp.company === 'Jio Platforms Limited' && (
                        <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">Active</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Professional Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">91.67%</div>
                <div className="text-blue-100">Performance Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-blue-100">Database Optimization</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;