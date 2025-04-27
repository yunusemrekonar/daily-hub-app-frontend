import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <main className='my-10'>
        <h1 className='text-3xl text-center'>Welcome to Daily Hub!</h1>
        <p className='text-center mt-4'>Your daily hub for tasks and productivity!</p>
      </main>
      <Footer/>
    </div>
  )
}

export default HomePage