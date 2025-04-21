import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="h-10 w-10 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a7 7 0 00-7 7 1 1 0 11-2 0 9 9 0 1118 0 1 1 0 11-2 0 7 7 0 00-7-7z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <h2 className="mt-6 text-xl font-medium text-gray-700">Loading</h2>
        <p className="mt-2 text-sm text-gray-500">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
