import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = (data) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(data.isLoggedIn)
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">CuisineCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link>
            <a href="#features" className="text-gray-600 hover:text-orange-500">Features</a>
            <a href="#chefs" className="text-gray-600 hover:text-orange-500">Our Chefs</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500">Contact</a>
          </nav>
          {
            !data.isLoggedIn ? (
              <div className="md:flex space-x-4">
                <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-orange-500">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Sign Up
                </Link>
              </div>

            ) : (
              <div>
              </div>
            )
          }

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link>
              <a href="#features" className="text-gray-600 hover:text-orange-500">Features</a>
              <a href="#chefs" className="text-gray-600 hover:text-orange-500">Our Chefs</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500">Contact</a>
              {
                !data.isLoggedIn ? (
                  <>
                    <Link to="/login" className="text-gray-600 hover:text-orange-500">Login</Link>
                    <Link to="/register" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-center">
                      Sign Up
                    </Link>
                  </>

                ) : (
                  <div>
                  </div>
                )
              }
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;