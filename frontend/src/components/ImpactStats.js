import React, { useState, useEffect, useRef } from 'react';

// Simple counter animation hook
const useCountUp = (end, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timeRef = useRef(Date.now());
  
  useEffect(() => {
    countRef.current = start;
    timeRef.current = Date.now();
    
    const step = () => {
      const now = Date.now();
      const elapsed = now - timeRef.current;
      
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Ease in-out cubic
          
        countRef.current = Math.floor(start + (end - start) * easeProgress);
        setCount(countRef.current);
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, start, duration]);
  
  return count;
};

const StatCard = ({ icon, value, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const count = useCountUp(isVisible ? value : 0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay for cascading effect
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-soft-xl transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="p-3 text-white rounded-xl inline-block bg-primary-500">
        {icon}
      </div>
      <h3 className="mt-4 text-4xl font-bold text-gray-900">
        {count}{value > 999 ? 'k' : ''}
        <span className="text-primary-500">+</span>
      </h3>
      <p className="mt-2 text-lg text-gray-600">{label}</p>
    </div>
  );
};

const ImpactStats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Impact in Numbers</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Together we've created meaningful change around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>}
            value={120}
            label="Donors Worldwide"
            delay={0}
          />
          <StatCard 
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3H7z" clipRule="evenodd"></path></svg>}
            value={2500}
            label="Funds Raised"
            delay={200}
          />
          <StatCard 
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>}
            value={750}
            label="Projects Funded"
            delay={400}
          />
          <StatCard 
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>}
            value={42}
            label="Countries Reached"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
