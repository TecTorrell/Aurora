import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';


const Hero = () => {
  return (
    <section className='flex'>
        <Navbar />
        <Dashboard />
    </section>
  )
}

export default Hero