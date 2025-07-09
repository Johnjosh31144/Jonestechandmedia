import React, { useState, useEffect } from 'react';
import { useProjects } from '../hooks/useProjects';
import { ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { projects, loading } = useProjects();

  // Fallback featured projects
  const fallbackFeaturedProjects = [
    {
      id: 1,
      title: 'TechCorp Digital Transformation',
      category: 'Enterprise Solution',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Complete digital overhaul including web platform, mobile app, and cybersecurity implementation for Fortune 500 company.',
      results: ['300% increase in user engagement', '99.9% uptime achieved', 'Zero security incidents'],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'HealthTech Mobile Platform',
      category: 'Healthcare Innovation',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'HIPAA-compliant mobile application connecting patients with healthcare providers through secure video consultations.',
      results: ['50,000+ active users', 'HIPAA compliance achieved', '4.8/5 app store rating'],
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Encryption'],
      link: '#'
    },
    {
      id: 3,
      title: 'E-commerce Revolution',
      category: 'Retail Technology',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Multi-vendor marketplace with AI-powered recommendations and integrated payment processing.',
      results: ['$2M+ in sales generated', '150% conversion rate increase', '24/7 automated support'],
      technologies: ['Next.js', 'Stripe', 'AI/ML', 'PostgreSQL'],
      link: '#',
      featured: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  // Get featured projects from database or use fallback
  const featuredProjects = projects.length > 0 
    ? projects.filter(project => project.featured).slice(0, 3)
    : fallbackFeaturedProjects;

  // If no featured projects in database, show first 3 projects
  const displayProjects = featuredProjects.length > 0 
    ? featuredProjects 
    : projects.slice(0, 3).length > 0 
      ? projects.slice(0, 3) 
      : fallbackFeaturedProjects;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayProjects.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [displayProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayProjects.length) % displayProjects.length);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading featured projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {displayProjects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0 bg-white">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category || 'Featured'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {project.results && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </button>
                        <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {displayProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;