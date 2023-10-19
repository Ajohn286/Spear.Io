import React from 'react';
import divingImage from '../components/assets/Background.png';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Spear.io</h2>
        <p className="text-lg leading-relaxed mb-8">
        At Spear.io, we are passionate about providing you with the best tools and resources to enhance your underwater experience. Our mission is to bring together divers and water enthusiasts from all around the world to share their experiences and discover new dive sites and techniques.
        </p>
        <div className="mb-8">
          <img src={divingImage} alt="Scuba Diving" className="w-full h-[100vh] object-cover" />
        </div>
        <p className="text-lg leading-relaxed mb-4">
        Spear.io is your one-stop platform for all things related to underwater adventures. Whether you are an avid scuba diver, a fearless freediver, or enjoy snorkeling to explore marine life, Spear.io has something for everyone.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Whether you are a beginner looking to learn the basics of snorkeling or an experienced diver seeking new challenges, Spear.io has a wide range of articles, tutorials, and videos to cater to your interests and skill levels.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Join our community today and start exploring the depths with Spear.io!
        </p>
      </div>
    </div>
  );
};

export default About;
