import React, { useState } from 'react';
import { Code, Database, Cloud, Settings, TrendingUp } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');

  const categoryIcons = {
    'Programming Languages': Code,
    'Frameworks & Libraries': Settings,
    'Databases': Database,
    'Cloud & DevOps': Cloud,
    'Tools & Technologies': TrendingUp
  };

  const categories = Object.keys(skills);

  const getSkillColor = (level) => {
    if (level >= 85) return 'from-green-500 to-green-600';
    if (level >= 75) return 'from-blue-500 to-blue-600';
    if (level >= 65) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getSkillBgColor = (level) => {
    if (level >= 85) return 'bg-green-100 dark:bg-green-900';
    if (level >= 75) return 'bg-blue-100 dark:bg-blue-900';
    if (level >= 65) return 'bg-yellow-100 dark:bg-yellow-900';
    return 'bg-red-100 dark:bg-red-900';
  };

  const getSkillTextColor = (level) => {
    if (level >= 85) return 'text-green-800 dark:text-green-200';
    if (level >= 75) return 'text-blue-800 dark:text-blue-200';
    if (level >= 65) return 'text-yellow-800 dark:text-yellow-200';
    return 'text-red-800 dark:text-red-200';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical expertise across various programming languages, frameworks, and tools
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category];
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{category}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills[activeCategory].map((skill, index) => (
              <div
                key={index}
                className={`${getSkillBgColor(skill.level)} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className={`font-semibold text-lg ${getSkillTextColor(skill.level)}`}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`text-sm font-bold ${getSkillTextColor(skill.level)}`}>
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s backwards`
                    }}
                  ></div>
                </div>
                
                {/* Skill Level Description */}
                <div className={`text-xs ${getSkillTextColor(skill.level)}`}>
                  {skill.level >= 85 && "Expert"}
                  {skill.level >= 75 && skill.level < 85 && "Advanced"}
                  {skill.level >= 65 && skill.level < 75 && "Intermediate"}
                  {skill.level < 65 && "Beginner"}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies</div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Expert Level</div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Cloud Platforms</div>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Technical Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Database className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Backend Architecture</h4>
                <p className="text-blue-100 text-sm">Microservices, RESTful APIs, Database Design</p>
              </div>
              <div className="text-center">
                <Cloud className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Cloud Solutions</h4>
                <p className="text-blue-100 text-sm">AWS, Kubernetes, Docker, Scalable Deployment</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                <h4 className="font-semibold mb-2">Performance Optimization</h4>
                <p className="text-blue-100 text-sm">System Tuning, Database Optimization, Caching</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;