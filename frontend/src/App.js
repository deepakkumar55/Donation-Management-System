import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCauses from './components/FeaturedCauses';
import ImpactStats from './components/ImpactStats';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-slide-up');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <FeaturedCauses />
        <HowItWorks />
        <Testimonials />
        {/* CTA Section */}
        <section className="bg-primary-500 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(300,300)">
                <path d="M125,-160.4C159.9,-146.7,184.6,-107.3,197.9,-64.2C211.2,-21.1,213.1,25.7,199.6,69.5C186.2,113.3,157.3,154.1,119.8,179.7C82.3,205.3,36.3,215.7,-4.2,220.5C-44.7,225.3,-79.9,224.5,-113,209.4C-146.2,194.2,-177.3,164.7,-194,128C-210.8,91.3,-213.2,47.3,-210.2,5.9C-207.3,-35.5,-198.9,-74.4,-178,-109.5C-157.2,-144.7,-123.9,-176.1,-87.3,-185.7C-50.7,-195.3,-10.9,-183.1,32.4,-179.5C75.7,-175.9,90.1,-174.1,125,-160.4Z" fill="currentColor" />
              </g>
            </svg>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to make a difference?
            </h2>
            <p className="mt-4 text-lg text-white opacity-90">
              Join thousands of donors who are creating positive change around the world.
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <button className="rounded-full bg-white px-5 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition transform hover:-translate-y-1 duration-200">
                Donate Now
              </button>
              <button className="rounded-full bg-transparent px-5 py-3 text-base font-semibold text-white border border-white hover:bg-white hover:bg-opacity-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
