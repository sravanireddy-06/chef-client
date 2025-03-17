import React from 'react';
import { ChefHat, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">CuisineCraft</span>
            </div>
            <p className="text-gray-400">
              Connecting food lovers with talented home chefs for unique dining experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-orange-500">Features</a></li>
              <li><a href="#chefs" className="text-gray-400 hover:text-orange-500">Our Chefs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@cuisinecraft.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Culinary Street</li>
              <li>Foodie City, FC 12345</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CuisineCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;