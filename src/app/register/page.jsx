'use client';
import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eroor, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });

      router.push('/login');
    } catch (err) {
      setError('Error registering user');
    }
  };
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-lg w-96'>
        <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
        {error && <div className='text-red-500 text-center mb-4'>{error}</div>}
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block mb-2' htmlFor='name'>Name</label>
              <input 
              type="text"
              id='name'
              className='w-full p-2 border border-gray-300 rounded'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
            </div>
            <div className='mb-6'>
              <label htmlFor="password" className='block mb-2'>
                Password
              </label>
              <input 
              type="password"
              id="password"
              className='w-full p-2 border border-gray-300 rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
              <div>
                <button
                type='submit'
                className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
                Register
                </button>
                <form>
                  <p className='text-center mt-4'>
                    Already have an account?{' '}
                    <a href="/login" className='text-blue-500 hover:underline'>
                    Login 
                    </a>
                  </p>
                </form>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}