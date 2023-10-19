import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import { Footer } from 'flowbite-react';
import {App} from '../App'

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:py-16 md:px-32">
      <div className="home-section bg-white p-8 rounded-lg shadow-md pt-20 space-x-2.5 ">
        <h2 className="text-2xl text-zinc-400 font-semibold mb-4">Sign In</h2>
        <p className="text-gray-600 flex-center mb-6">Welcome to Spear.io! The #1 App the world of spearfishing.</p>
        <Link to="/login" className="inline-block flex-center px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300">Sign In</Link>
        <Link to="/signup" className="inline-block flex-center px-6 py-3 mt-50 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300">Sign Up</Link>
        </div>
        <div className="home-section bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl text-gray-600 font-semibold mb-4">What Is Spear.io?:</h2>
          <p className="text-gray-600 mb-6">Discover the amazing features and benefits of using Spear.io for your spearfishing adventures:</p>
          <ul className="list-disc list-inside">
            <li className="text-black mb-2">🌊 Dive into Tailored Adventures: Curated just for you based on your skill level and conquer new depths!.</li>
            <li className="text-black mb-2">🎣 Your Underwater Journal: Keep track of your underwater expeditions, catches and each dive becoming a chapter in your evolving aquatic story.</li>
            <li className="text-black mb-2">☀️ Real-Time Weather: Receive instant updates on weather conditions and optimal dive locations, ensuring you're always in sync with nature's rhythm.</li>
            <li className="text-black mb-2">🤝 Forge Connections: Share your adventures, swap tips, and track your progress.</li>
          </ul>
        </div>
        <Footer />
    </div>
  );
};

export default Home;

