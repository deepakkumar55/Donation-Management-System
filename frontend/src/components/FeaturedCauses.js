import React, { useState } from 'react';

const causes = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Provide clean and safe drinking water to communities in need across developing regions.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    raised: 12680,
    goal: 20000,
    category: 'Water',
    daysLeft: 23
  },
  {
    id: 2,
    title: 'Education for Children',
    description: 'Support education programs for underprivileged children with school supplies and scholarships.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    raised: 45200,
    goal: 50000,
    category: 'Education',
    daysLeft: 15
  },
  {
    id: 3,
    title: 'Hunger Relief Program',
    description: 'Provide nutritious meals to families facing food insecurity and hunger in local communities.',
    image: 'https://images.unsplash.com/photo-1571211468362-33f20cb1982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    raised: 18450,
    goal: 30000,
    category: 'Food',
    daysLeft: 28
  },
  {
    id: 4,
    title: 'Medical Aid for Refugees',
    description: 'Deliver essential medical supplies and healthcare to refugee populations in crisis zones.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    raised: 32680,
    goal: 40000,
    category: 'Healthcare',
    daysLeft: 12
  }
];

const CauseCard = ({ cause }) => {
  const [isHovered, setIsHovered] = useState(false);
  const progress = (cause.raised / cause.goal) * 100;
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-soft-xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
        <img 
          src={cause.image} 
          alt={cause.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
            {cause.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{cause.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{cause.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium mb-1">
            <span>Raised: <span className="text-primary-600">${cause.raised.toLocaleString()}</span></span>
            <span>Goal: ${cause.goal.toLocaleString()}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-500 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{cause.daysLeft} days left</span>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedCauses = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">Featured Causes</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Support These Important Causes</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation makes a difference. Choose a cause that matters to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map(cause => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-full text-primary-600 bg-white hover:bg-primary-50 transition-colors">
            View All Causes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
