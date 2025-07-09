import React from 'react';
import Contact from '../components/Contact';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+254 713 390 429',
      availability: 'Mon-Fri, 8am-6pm EAT'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      contact: 'Jones31144@gmail.com',
      availability: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Meet us at our office',
      contact: 'Westlands, Nairobi',
      availability: 'Nairobi, Kenya'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'When we\'re available',
      contact: 'Monday - Friday',
      availability: '8:00 AM - 6:00 PM EAT'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear from you. 
              Let's discuss how we can help transform your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-purple-200 text-sm mb-2">{method.description}</p>
                  <p className="text-white font-medium">{method.contact}</p>
                  <p className="text-purple-300 text-xs">{method.availability}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does a typical project take?</h3>
                <p className="text-gray-600">Project timelines vary based on scope and complexity. Web development projects typically take 4-8 weeks, while larger software development projects may take 3-6 months.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your solution continues to perform optimally.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What industries do you work with?</h3>
                <p className="text-gray-600">We work with businesses across all industries including healthcare, finance, e-commerce, education, and technology startups.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure project security?</h3>
                <p className="text-gray-600">We implement industry-standard security practices including secure coding, regular security audits, and compliance with relevant regulations like GDPR and HIPAA.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you work with our existing team?</h3>
                <p className="text-gray-600">Absolutely! We often collaborate with in-house teams and can integrate seamlessly with your existing workflows and development processes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in your pricing?</h3>
                <p className="text-gray-600">Our pricing includes project planning, design, development, testing, deployment, and initial support. We provide transparent pricing with no hidden fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;