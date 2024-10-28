import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">Instant Pairings, No More Manual Sorting</h2>
      <p className="text-lg mb-8">Generate pairs in seconds</p>
      <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700">
        Get started
      </button>
    </section>
  );
};

export default FeaturesSection;
