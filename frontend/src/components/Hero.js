import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Blob decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 translate-x-[-30%] translate-y-[-30%] w-[60%] h-[60%] opacity-20">
          <div className="w-full h-full rounded-full bg-white blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="absolute right-0 bottom-0 translate-x-[30%] translate-y-[30%] w-[60%] h-[60%] opacity-20">
          <div className="w-full h-full rounded-full bg-white blur-3xl animate-pulse-slow"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight animate-fade-in">
              <span className="inline-block">Make a </span>
              <span className="inline-block text-accent-300">Difference</span>
              <span className="block mt-1">With Your Donation</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto lg:mx-0 animate-slide-up">
              Join thousands of donors supporting causes that matter. 
              Your contribution creates impact that lasts.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button className="rounded-full bg-white px-6 py-3.5 text-lg font-semibold text-primary-600 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300 transform hover:-translate-y-1 group">
                Donate Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="rounded-full border-2 border-white bg-transparent px-6 py-3.5 text-lg font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="mt-10 hidden lg:block">
              <p className="text-white/80">Trusted by organizations worldwide</p>
              <div className="mt-4 flex items-center justify-center lg:justify-start space-x-8">
                <img src="https://via.placeholder.com/100x40/ffffff/666666?text=LOGO" alt="Partner 1" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/100x40/ffffff/666666?text=LOGO" alt="Partner 2" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://via.placeholder.com/100x40/ffffff/666666?text=LOGO" alt="Partner 3" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hhcml0eXx8fHx8fDE2NjE4NjYyNzQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="Donation impact" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover animate-slide-in-right"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Join 10,000+ donors</p>
                    <p className="text-xs text-gray-500">making a difference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,128C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
