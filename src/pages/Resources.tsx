import React from 'react';
import { Link } from 'react-router-dom';
import ResourceCenter from '../components/ResourceCenter';
import { ArrowRight, BookOpen, Download, Users } from 'lucide-react';

const ResourcesPage = () => {
  const resourceStats = [
    {
      icon: Download,
      title: 'Free Downloads',
      description: 'Access our library of guides, templates, and tools at no cost.',
      count: '25+'
    },
    {
      icon: BookOpen,
      title: 'Expert Content',
      description: 'All resources are created by our team of industry professionals.',
      count: '100%'
    },
    {
      icon: Users,
      title: 'Community Members',
      description: 'Join thousands of professionals using our resources.',
      count: '5,000+'
    }
  ];

  const featuredResources = [
    {
      title: 'Complete Cybersecurity Handbook',
      description: 'A comprehensive 100-page guide covering all aspects of business cybersecurity.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Security',
      featured: true
    },
    {
      title: 'Web Development Best Practices',
      description: 'Modern development techniques and frameworks for building scalable applications.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Development',
      featured: true
    },
    {
      title: 'Digital Marketing Strategy Kit',
      description: 'Complete toolkit for planning and executing successful digital marketing campaigns.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Marketing',
      featured: true
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resource Center
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive collection of guides, whitepapers, tools, and resources 
              to help you stay ahead in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resourceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon className="h-12 w-12 text-green-300 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2 text-green-300">{stat.count}</div>
                  <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular and comprehensive resources, trusted by thousands of professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-3">
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Resource Center */}
      <ResourceCenter />

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with New Resources
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and be the first to access new guides, tools, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Custom Resource
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;