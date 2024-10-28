import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-8 px-4 text-center">
        <h2 className="text-lg font-semibold mb-4">Sign up for our newsletter</h2>
        <p className="mb-4">Be the first to get notified about updates and insights.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l border-none"
          />
          <button className="bg-indigo-600 px-4 py-2 rounded-r text-white hover:bg-indigo-700">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-blue-800 py-8 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Pairings</h3>
          <p>Design amazing digital experiences that create more happy in the world.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul>
              <li>Features</li>
              <li>Group pairings</li>
              <li>Secret Santa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul>
              <li>Contact us</li>
              <li>Partner with us</li>
            </ul>
          </div>
        </div>
        <p className="text-sm mt-4">© Pairings.co. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
