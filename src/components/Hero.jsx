import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative bg-cover bg-center h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%27')",
      }}
    >
    <div className="absolute inset-0 bg-black opacity-70">

    </div>
    <div className='text-center z-10'>
      <h1 className='text-4xl md:tect-6xl font-bold text-white'>Savor the Taste of Freshness!</h1>
      <p className='text-lg md:text-2xl my-4 text-white'>Discover delicious recipes and local restaurants near you</p>
      <button className='bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-600'>Explore Menu</button>
    </div>
    </section>
  );
};

export default Hero;
