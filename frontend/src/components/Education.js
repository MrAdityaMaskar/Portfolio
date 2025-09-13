import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from 'lucide-react';
import { education, achievements } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey in Computer Engineering and AI/ML specialization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu) => (
            <div key={edu.id} className="relative mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-6">
                      {/* University Logo */}
                      <div className="flex-shrink-0">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-20 h-20 rounded-lg object-cover shadow-md"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                          {edu.institution}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CGPA Badge */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg text-center shadow-lg">
                        <div className="text-2xl font-bold">
                          {edu.cgpa}
                        </div>
                        <div className="text-sm text-green-100">
                          CGPA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      <span>Academic Achievements:</span>
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                      <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        Computer Engineering
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Core Specialization
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
                      <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        AI/ML Honours
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Additional Specialization
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                      <Users className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        4 Years
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Duration
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="bg-gray-50 dark:bg-gray-800 px-8 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Graduated with Distinction
                    </span>
                    <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">First Class with Honours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Academic Achievements Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Academic Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">9.35</div>
                <div className="text-blue-100">CGPA out of 10</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">AI/ML</div>
                <div className="text-blue-100">Honours Specialization</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2023</div>
                <div className="text-blue-100">Graduation Year</div>
              </div>
            </div>
          </div>

          {/* Key Learning Areas */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Key Learning Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Data Structures & Algorithms',
                'Software Engineering',
                'Database Management',
                'Machine Learning',
                'Artificial Intelligence',
                'System Design',
                'Computer Networks',
                'Operating Systems'
              ].map((subject, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {subject}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;