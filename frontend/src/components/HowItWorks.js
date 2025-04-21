import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Choose a Cause',
    description: 'Browse through various causes and select one that resonates with your values.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Make a Donation',
    description: 'Securely donate any amount you wish using our simple payment system.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Track Your Impact',
    description: 'Receive updates about how your donation is making a difference.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Spread the Word',
    description: 'Share your contribution to inspire others and increase the impact.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">How It Works</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Making Donations Simple</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We've made the donation process easy, secure, and transparent
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={step.id} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-1/2 -mt-4 h-8 w-px bg-gray-200 lg:hidden" aria-hidden="true" style={{ display: index === 0 ? 'none' : undefined }}></div>
                  
                  <div className="p-4 rounded-full bg-white border-2 border-primary-500 text-primary-500 shadow-lg relative z-10">
                    {step.icon}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-2xl font-bold text-primary-500 bg-white px-2 hidden lg:block">
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 lg:p-10 animate-on-scroll opacity-0">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">Ready to Make a Difference?</h3>
              <p className="mt-2 text-lg text-gray-600">Start your donation journey today and be part of positive change.</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <button className="px-6 py-3 bg-primary-500 text-white rounded-full font-medium shadow-md hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
