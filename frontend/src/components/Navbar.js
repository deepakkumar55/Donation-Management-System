import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                DonationHub
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#" className={`text-sm font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
            }`}>
              Home
            </a>
            <a href="#" className={`text-sm font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
            }`}>
              About
            </a>
            <a href="#" className={`text-sm font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
            }`}>
              Causes
            </a>
            <a href="#" className={`text-sm font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-white/80'
            }`}>
              Contact
            </a>
            <a href="#" className={`ml-3 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-600 hover:bg-primary-50'
            }`}>
              Donate Now
            </a>
            <a href="#" className={`inline-flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-700 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Login
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                isScrolled 
                  ? 'text-gray-700 focus:ring-primary-500'
                  : 'text-white focus:ring-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-600">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-600">
              About
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-600">
              Causes
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-600">
              Contact
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-600">
              Login
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
