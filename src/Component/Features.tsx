import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-10">
      <div className="bg-gray-50 rounded-lg p-12 text-center shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Instant Pairings, No More Manual Sorting</h2>
        <p className="text-gray-600 mb-6">Generate pairs in seconds</p>
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700">
          Get started
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
