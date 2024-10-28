import React from "react";
import santa from '../Asset/santa.png'
const SecretSantaForm: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 text-center relative">
      <div className="relative max-w-md mx-auto">
        <img
          src={santa}
          alt="Santa"
          className="absolute -top-8 -right-8 w-24 h-auto"
          style={{ transform: "rotate(20deg)" }} 
        />

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">It’s Secret Santa Season</h3>
          <p className="mb-4">Generate and organize your Secret Santa list with our generator.</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded w-full p-2 mb-4"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecretSantaForm;
