import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid email or password.');
    }
  };

  if (isLoggedIn) {
    return <h2 className="text-center text-xl">Welcome, you are now logged in!</h2>;
  }

  return (
    <>
      <Navbar />
    <div className="flex justify-center items-center h-[100%] pt-28 pb-6 bg-[#287d7e]">
      <form className="w-full max-w-lg p-10 bg-gray-100 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl mb-8">Login</h2>
        {error && <p className="text-red-500 text-center mb-5 text-lg">{error}</p>}
        <div className="mb-5">
          <label htmlFor="email" className="block mb-3">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-3">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-[#34a0a4] text-white rounded-md hover:bg-[#287d7e] text-xl mt-4"
          >
          Login
        </button>
        <p className="text-center mt-6">
          Don't have an account? <a href="/signup" className="text-[#34a0a4] hover:underline text-lg">Sign Up</a>
        </p>
      </form>
    </div>
    <Footer/>
            </>
  );
};

export default Login;
