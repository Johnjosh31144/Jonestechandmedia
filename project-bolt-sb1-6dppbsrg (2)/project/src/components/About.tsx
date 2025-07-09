import React from 'react';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Clock, value: '8+', label: 'Years Experience' },
    { icon: TrendingUp, value: '99%', label: 'Client Satisfaction' }
  ];

  const team = [
    {
      name: 'John Joshua',
      role: 'Founder & CEO',
      image: '/src/assets/-5819208381867605057_121.jpg',
      bio: 'Visionary entrepreneur with 8+ years in technology and business strategy, passionate about empowering African businesses through technology.'
    },
    {
      name: 'Michael Wanjiku',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in software architecture and cybersecurity solutions with deep understanding of African tech infrastructure.'
    },
    {
      name: 'Grace Akinyi',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer specializing in digital media and branding for African markets.'
    },
    {
      name: 'Samuel Kiprotich',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Digital marketing strategist with proven track record of growing Kenyan businesses online.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Jones Tech & Media
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded by John Joshua in 2016, we're a leading technology partner for businesses across Kenya and East Africa. 
            Our journey began with a simple mission: to bridge the gap between complex technology and practical business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded by visionary entrepreneur John Joshua in 2016, Jones Tech & Media has grown from a small 
              Nairobi-based startup to a leading technology partner for businesses across Kenya and East Africa. 
              Our journey began with a simple mission: to bridge the gap between complex technology and practical business solutions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Today, under John's leadership, we continue to innovate and evolve, staying ahead of technology trends 
              while maintaining our commitment to exceptional service and results. Our diverse Kenyan team brings 
              together expertise in web development, cybersecurity, digital marketing, and media production.
            </p>
            <p className="text-gray-600 leading-relaxed">
              John's vision is simple: technology should empower African businesses, not complicate them. That's why 
              we focus on creating solutions that are not only cutting-edge but also practical, affordable, and 
              tailored to the unique needs of the Kenyan market.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;