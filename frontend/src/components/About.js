import React from 'react';
import { Award, Users, Coffee, Heart } from 'lucide-react';
import { personalInfo, achievements } from '../data/mock';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Award },
    { label: 'Projects Completed', value: '10+', icon: Users },
    { label: 'Technologies Mastered', value: '15+', icon: Coffee },
    { label: 'Performance Improvement', value: '91%', icon: Heart }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating scalable backend solutions and optimizing system performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a dedicated Software Development Engineer specializing in backend development 
                with a strong foundation in microservices architecture, RESTful APIs, and database optimization. 
                Currently working at Jio Platforms Limited, I've successfully improved system performance 
                by 91.67% and optimized database response times by 30%.
              </p>
              
              <p className="text-lg leading-relaxed">
                My expertise spans across multiple programming languages including Python, Java, and Kotlin, 
                with extensive experience in cloud technologies like AWS and Kubernetes. I'm passionate 
                about AI/ML technologies and enjoy building scalable solutions that make a real impact.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community through my blog and technical articles.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">CGPA: 9.35/10 in Computer Engineering</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Honours in AI/ML specialization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Agile/Scrum methodology practitioner</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Cloud-native solution architect</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Stats & Achievements */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement) => (
                  <div key={achievement.id} className="flex items-start space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-blue-100 text-sm">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Machine Learning', 'Cloud Computing', 'Microservices', 
                  'System Design', 'Open Source', 'Tech Blogging'
                ].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;