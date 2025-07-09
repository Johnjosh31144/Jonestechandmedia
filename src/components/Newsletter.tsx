import React, { useState } from 'react';
import { Mail, CheckCircle, TrendingUp, Shield, Code } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate subscription process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      setIsLoading(false);
      console.error('Newsletter subscription error:', error);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Industry Insights',
      description: 'Latest trends in technology and digital transformation'
    },
    {
      icon: Shield,
      title: 'Security Updates',
      description: 'Critical cybersecurity news and best practices'
    },
    {
      icon: Code,
      title: 'Tech Tips',
      description: 'Practical development and design techniques'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead of the Tech Curve
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join over 5,000 business leaders who receive our weekly newsletter packed with 
              actionable insights, industry trends, and exclusive content to help you navigate 
              the digital landscape.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-700 p-2 rounded-lg mr-4 mt-1">
                      <Icon className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-blue-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubscribed ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Aboard!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing! Check your email for a confirmation link and 
                  your first exclusive tech insights.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Subscribe Another Email
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Weekly Tech Insights
                  </h3>
                  <p className="text-gray-600">
                    No spam, unsubscribe anytime. Join the community of forward-thinking leaders.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <Mail className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;