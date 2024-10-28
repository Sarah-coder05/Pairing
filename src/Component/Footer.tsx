// src/components/Footer.tsx
import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Sign up for our newsletter</h3>
            <p className="text-gray-300">
              Be the first to get notified about updates and insights.
            </p>
          </div>
          <div className="flex items-center md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 py-2 px-4 rounded-l-lg w-full md:w-3/4 mr-2"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* <hr className="border-gray-600 my-8" /> */}
        <div className="flex flex-col md:flex-row justify-between text-sm space-y-6 md:space-y-0">
          <div className="md:w-1/4">
            <h1 className="text-2xl font-bold mb-3">Pairings</h1>
            <p className="text-gray-300">
              Design amazing digital experiences that create more happiness in the world.
            </p>
          </div>

          <div className="flex flex-wrap justify-between md:space-x-12 w-full md:w-3/4">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="text-gray-300 space-y-1">
                <li><a href="#about" className="hover:text-gray-100">About Us</a></li>
                <li><a href="#pricing" className="hover:text-gray-100">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="text-gray-300 space-y-1">
                <li><a href="#features" className="hover:text-gray-100">Features</a></li>
                <li><a href="#group-pairings" className="hover:text-gray-100">Group pairings</a></li>
                <li><a href="#secret-santa" className="hover:text-gray-100">Secret Santa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="text-gray-300 space-y-1">
                <li><a href="#privacy" className="hover:text-gray-100">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-100">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="text-gray-300 space-y-1">
                <li><a href="#contact" className="hover:text-gray-100">Contact us</a></li>
                <li><a href="#partner" className="hover:text-gray-100">Partner with us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© Pairings.co. All rights reserved</p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-100"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-gray-100"><FaInstagram /></a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-100"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
