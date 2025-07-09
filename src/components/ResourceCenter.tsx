import React, { useState } from 'react';
import { Download, FileText, Shield, Code, TrendingUp, Search, Filter } from 'lucide-react';

const ResourceCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Cybersecurity Best Practices Guide',
      category: 'security',
      type: 'PDF Guide',
      description: 'Comprehensive 50-page guide covering essential cybersecurity practices for businesses.',
      downloadCount: '2.3k',
      icon: Shield,
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Web Development Trends 2024',
      category: 'development',
      type: 'Whitepaper',
      description: 'In-depth analysis of emerging web technologies and development frameworks.',
      downloadCount: '1.8k',
      icon: Code,
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Digital Marketing ROI Calculator',
      category: 'marketing',
      type: 'Excel Tool',
      description: 'Interactive spreadsheet to calculate and track your digital marketing ROI.',
      downloadCount: '3.1k',
      icon: TrendingUp,
      size: '0.5 MB'
    },
    {
      id: 4,
      title: 'Security Audit Checklist',
      category: 'security',
      type: 'PDF Checklist',
      description: 'Step-by-step checklist for conducting internal security audits.',
      downloadCount: '1.5k',
      icon: Shield,
      size: '0.8 MB'
    },
    {
      id: 5,
      title: 'Modern Web Design Principles',
      category: 'design',
      type: 'eBook',
      description: 'Complete guide to creating user-centered, accessible web designs.',
      downloadCount: '2.7k',
      icon: Code,
      size: '3.2 MB'
    },
    {
      id: 6,
      title: 'Social Media Strategy Template',
      category: 'marketing',
      type: 'Template',
      description: 'Ready-to-use template for planning and executing social media campaigns.',
      downloadCount: '4.2k',
      icon: TrendingUp,
      size: '1.1 MB'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Resources' },
    { key: 'security', label: 'Cybersecurity' },
    { key: 'development', label: 'Development' },
    { key: 'design', label: 'Design' },
    { key: 'marketing', label: 'Marketing' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resource Center
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our collection of free guides, whitepapers, and tools to help you stay ahead 
            in the digital landscape.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category.key} value={category.key}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.downloadCount} downloads</span>
                  <span>{resource.size}</span>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Free
                </button>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceCenter;