import React from 'react';
import Features from '../components/Features';

function Home() {
  return (
    <main className="flex-grow">
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Experience Restaurant-Quality Dining at Home
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Connect with talented home chefs in your area and enjoy personalized culinary experiences in the comfort of your home.
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Find a Chef
                </button>
                <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                  Become a Chef
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Chef cooking"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Features />
    </main>
  );
}

export default Home;