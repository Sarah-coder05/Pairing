import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className=" text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Pairings</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#product" className="hover:text-gray-300">Product</a>
        </div>
        <button className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-700">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
