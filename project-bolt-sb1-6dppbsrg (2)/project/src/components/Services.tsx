import React, { useState } from 'react';
import { Camera, Code, Megaphone, Shield, Laptop, ChevronRight, Play, Users, Award } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Camera,
      title: 'Media Production',
      description: 'Professional video production, photography, and content creation that brings your brand to life.',
      features: ['Corporate Videos', 'Event Coverage', 'Product Photography', 'Animation & Motion Graphics'],
      color: 'from-red-500 to-pink-500',
      showcase: {
        title: 'Behind the Scenes',
        description: 'See how we create compelling visual stories',
        image: 'https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=600',
        clients: ['Netflix', 'Adobe', 'Microsoft']
      }
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description: 'Custom websites and applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Custom Applications', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500',
      showcase: {
        title: 'Interactive Demo',
        description: 'Experience our latest web designs',
        image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
        clients: ['Shopify', 'Stripe', 'Airbnb']
      }
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive engagement and convert visitors into customers.',
      features: ['SEO Optimization', 'Social Media Management', 'Content Marketing', 'PPC Advertising'],
      color: 'from-green-500 to-teal-500',
      showcase: {
        title: 'Campaign Results',
        description: 'Real results from our marketing campaigns',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        clients: ['HubSpot', 'Mailchimp', 'Buffer']
      }
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from digital threats.',
      features: ['Security Audits', 'Network Protection', 'Data Encryption', 'Compliance Support'],
      color: 'from-purple-500 to-indigo-500',
      showcase: {
        title: 'Security Assessment',
        description: 'Try our free security audit tool',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
        clients: ['IBM', 'Cisco', 'Palo Alto']
      }
    },
    {
      icon: Laptop,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business needs and workflows.',
      features: ['Mobile Apps', 'Cloud Solutions', 'API Integration', 'Legacy System Modernization'],
      color: 'from-orange-500 to-red-500',
      showcase: {
        title: 'Technology Stack',
        description: 'Explore our development capabilities',
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
        clients: ['Google', 'Amazon', 'Salesforce']
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your business and secure your digital future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer transform hover:-translate-y-2 ${
                  activeService === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300 flex items-center">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enhanced Service Showcase */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[activeService].showcase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {services[activeService].showcase.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Trusted by Industry Leaders:</h4>
                  <div className="flex flex-wrap gap-3">
                    {services[activeService].showcase.clients.map((client, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    View Demo
                  </button>
                  <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img
                  src={services[activeService].showcase.image}
                  alt={services[activeService].showcase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;