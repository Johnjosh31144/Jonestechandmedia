import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import FeaturedProjects from '../components/FeaturedProjects';
import { ArrowRight, Award, TrendingUp, Users } from 'lucide-react';

const PortfolioPage = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Award-Winning Projects',
      description: 'Our work has been recognized by industry leaders and design communities worldwide.',
      count: '50+'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average 300% increase in client engagement and 150% boost in conversions.',
      count: '300%'
    },
    {
      icon: Users,
      title: 'Happy Clients',
      description: 'Over 200 satisfied clients across various industries and business sizes.',
      count: '200+'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of successful projects and see how we've helped businesses 
              transform their digital presence and achieve remarkable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2 text-blue-300">{achievement.count}</div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Portfolio Grid */}
      <Portfolio />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's work together to bring your vision to life and create a project that stands out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;