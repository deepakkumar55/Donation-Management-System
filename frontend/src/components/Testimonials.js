import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "I've been donating through this platform for over a year now, and I'm always impressed by the transparency and impact updates. It feels good to know exactly where my contribution is going.",
    author: "Sarah Johnson",
    role: "Regular Donor",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "As an NGO representative, I can attest to the efficiency of this platform. The streamlined process allows us to focus on our mission while receiving the support we need.",
    author: "Michael Chen",
    role: "NGO Director",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    content: "The ability to track the impact of my donations in real-time is what sets this platform apart. I feel connected to the causes I support and motivated to continue giving.",
    author: "Priya Patel",
    role: "Monthly Donor",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    content: "I was looking for a secure way to contribute to causes I care about, and this platform exceeded my expectations. The user experience is seamless and intuitive.",
    author: "David Wilson",
    role: "First-time Donor",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    content: "The variety of causes available means I can always find projects that align with my values. I appreciate the thorough vetting process for all listed organizations.",
    author: "Elena Rodriguez",
    role: "Corporate Sponsor",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`w-full transition-all duration-500 transform ${
      isActive 
        ? 'opacity-100 scale-100' 
        : 'opacity-40 scale-95'
    }`}>
      <div className="bg-white p-8 rounded-2xl shadow-soft-xl h-full flex flex-col">
        <div className="mb-6">
          {/* Quote icon */}
          <svg className="w-10 h-10 text-primary-300" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8,6.4C5.6,6.4,1.3,11.2,1.3,16c0,2.3,1,4.6,2.7,6.5c1-1.7,2-2.2,3.5-2.5c-2.3-0.6-4-2.7-4-5.2
              c0-3,2.5-5.5,5.5-5.5h4.8v10.9h-4.8c-0.1,0-0.1,0-0.1,0c0.3,0.8,0.5,1.6,0.5,2.5c0,3-2.5,5.5-5.5,5.5v-4.9
              c0.7,0,1.4-0.2,1.9-0.7C2.4,19.5,0,15.1,0,10.8C0,7.5,2.3,3.3,5.7,1.3h9.8v16.3h-4.8V6.4H10.8z M26.9,6.4
              c-5.2,0-9.5,4.8-9.5,9.6c0,2.3,1,4.6,2.7,6.5c1-1.7,2-2.2,3.5-2.5c-2.3-0.6-4-2.7-4-5.2c0-3,2.5-5.5,5.5-5.5h4.8v10.9h-4.8
              c-0.1,0-0.1,0-0.1,0c0.3,0.8,0.5,1.6,0.5,2.5c0,3-2.5,5.5-5.5,5.5v-4.9c0.7,0,1.4-0.2,1.9-0.7c-3.3-2.1-5.7-6.5-5.7-10.9
              c0-3.3,2.3-7.5,5.7-9.5h9.8v16.3h-4.8V6.4H26.9z"/>
          </svg>
        </div>
        
        <p className="flex-1 text-lg text-gray-600 leading-relaxed line-clamp-4 mb-6">
          "{testimonial.content}"
        </p>
        
        <div className="flex items-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.author} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-100"
          />
          <div>
            <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from donors and organizations who use our platform
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100 / 3}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={Math.abs(activeIndex - index) <= 1}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden md:block">
            <button 
              onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
