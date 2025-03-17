import React from 'react';
import { ChefHat, Clock, Star, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ChefHat className="w-12 h-12 text-orange-500" />,
      title: "Expert Home Chefs",
      description: "Connect with skilled home chefs who bring restaurant-quality dining to your doorstep."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Flexible Scheduling",
      description: "Book your preferred chef at a time that works best for you and your guests."
    },
    {
      icon: <Star className="w-12 h-12 text-orange-500" />,
      title: "Customized Menus",
      description: "Work directly with chefs to create personalized menus that match your tastes and dietary needs."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Social Dining",
      description: "Host memorable dining experiences and connect with food lovers in your community."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose CuisineCraft?</h2>
          <p className="text-xl text-gray-600">Discover the perfect blend of convenience and culinary excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;