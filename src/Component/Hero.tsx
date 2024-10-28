
import bgImage from '../Asset/Bg-img.png';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center h-[80vh] text-white flex flex-col justify-center items-start pl-10 max-w-8xl mx-auto rounded-lg"  // Adjusted width here
    >
      <div className="mt-20">
        <h2 className="text-6xl font-bold mb-4 leading-tight">
          Effortlessly Create<br />Perfect Pairings
        </h2>
        <p className="text-2xl mb-6 leading-snug">
          Match teams, partners, or groups instantly with ease.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-3 rounded-md text-lg mr-64">
          Generate Pairs
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
