import React, { useState } from 'react';

const Education = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const articles = [
    {
      id: 1,
      title: 'Understanding Diabetes',
      description: 'Learn about type 2 diabetes management and prevention strategies.',
      category: 'Diabetes',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Heart Health Tips',
      description: 'Essential tips for maintaining cardiovascular health.',
      category: 'Cardiology',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Nutrition Myths Debunked',
      description: 'Debunking common nutrition myths and misconceptions.',
      category: 'Nutrition',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Exercise and Mental Health',
      description: 'How physical activity impacts your mental wellbeing.',
      category: 'Mental Health',
      readTime: '8 min read'
    }
  ];

  const faqs = [
    {
      question: 'How often should I check my blood pressure?',
      answer: 'For most adults, checking blood pressure once a month is sufficient. However, if you have hypertension, daily monitoring may be recommended by your healthcare provider.'
    },
    {
      question: 'What\'s a normal heart rate range?',
      answer: 'A normal resting heart rate for adults ranges from 60 to 100 beats per minute. Athletes may have lower rates due to better cardiovascular fitness.'
    },
    {
      question: 'How much water should I drink daily?',
      answer: 'The general recommendation is about 8 glasses (64 ounces) of water per day, but this can vary based on activity level, climate, and individual needs.'
    },
    {
      question: 'When should I see a doctor for a fever?',
      answer: 'Seek medical attention if fever exceeds 103°F, lasts more than 3 days, or is accompanied by severe symptoms like difficulty breathing or chest pain.'
    }
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
                         <span className="text-primary-700 text-2xl">📚</span>
            <h3 className="text-xl font-bold text-primary-900">Educational Resources</h3>
          </div>
          <div className="relative">
                         <span className="absolute left-3 top-3 text-primary-400">🔍</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div key={article.id} className="bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="mb-3">
                <span className="text-xs bg-primary-200 text-primary-700 px-2 py-1 rounded">{article.category}</span>
                <span className="text-xs text-primary-500 ml-2">{article.readTime}</span>
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">{article.title}</h4>
              <p className="text-sm text-primary-600 mb-3">{article.description}</p>
              <span className="text-primary-700 text-sm flex items-center">
                                 Read more <span className="ml-1">➡️</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <h3 className="text-xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-primary-200 pb-4 last:border-b-0">
              <h4 className="font-medium text-primary-900 mb-2">{faq.question}</h4>
              <p className="text-sm text-primary-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-primary-200 shadow-lg">
        <h3 className="text-xl font-bold text-primary-900 mb-4">Health Myths vs Facts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-50 backdrop-blur-sm border-l-4 border-primary-300">
            <h4 className="font-semibold text-primary-900 mb-2">Myth</h4>
            <p className="text-sm text-primary-600">You need to drink 8 glasses of water daily regardless of your size or activity level.</p>
          </div>
          <div className="p-4 bg-primary-50 backdrop-blur-sm border-l-4 border-secondary-300">
            <h4 className="font-semibold text-primary-900 mb-2">Fact</h4>
            <p className="text-sm text-primary-600">Water needs vary based on body size, activity level, climate, and overall health.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;


