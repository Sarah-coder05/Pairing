import React from "react";

const PairingFeatures: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Everything You Need for Perfect Pairings</h2>
        <p className="text-gray-600 mb-8">
          Discover the key features that make our pairings generator stand out from the rest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">Instant Pairings</h3>
            <p className="text-gray-600 mt-2">
              Effortlessly match teams, partners, or groups instantly for any event or activity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">Custom Rules</h3>
            <p className="text-gray-600 mt-2">
              Set preferences and customize pairings based on specific criteria or exclusions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800">Group Sizes</h3>
            <p className="text-gray-600 mt-2">
              Easily manage and generate pairings for different group sizes, from small teams to large events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">How It Works</h2>
        <p className="text-gray-600 mb-8">
          A simple 3-step process with visual representations - input details, customization options, and instant pairing generation.
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-indigo-600 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center mb-4">1</div>
              <h3 className="font-semibold text-lg text-gray-800">Input Details</h3>
              <p className="text-gray-600 mt-2">Users add participants or criteria.</p>
            </div>
          </div>

          {/* Horizontal Rule */}
          <hr className="border-gray-300 w-6 mx-4" />

          <div className="flex-1">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-indigo-600 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center mb-4">2</div>
              <h3 className="font-semibold text-lg text-gray-800">Customize</h3>
              <p className="text-gray-600 mt-2">Set preferences like pair size or exclusions.</p>
            </div>
          </div>

          {/* Horizontal Rule */}
          <hr className="border-gray-300 w-6 mx-4" />

          <div className="flex-1">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-indigo-600 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center mb-4">3</div>
              <h3 className="font-semibold text-lg text-gray-800">Generate Pairings</h3>
              <p className="text-gray-600 mt-2">Instant results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PairingPage: React.FC = () => {
  return (
    <div>
      <PairingFeatures />
      <ProcessSteps />
    </div>
  );
};

export default PairingPage;
