import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth0 } from "@auth0/auth0-react";
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const { loginWithPopup } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth0Login = async () => {
    try {
      await loginWithPopup();
      history.push('/Dashboard');
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform authentication via your backend API
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      console.log(response.data);
      setError('');
      handleAuth0Login();
    } catch (error) {
      console.error('Login failed:', error);
      Swal.fire({
        title: "Login Failed",
        icon: "warning"
      });
      setError('Invalid email or password');
    }
  }

  return (
    <div className='h-[80vh] flex animate-gradient justify-center items-center'>
      <div className="container bg-light h-[500px] w-[500px] rounded-x1 shadow-2xl ">
        <div className='mt-5 mb-3'>
          <h1 className='text-3xl text-center font-bold '>Sign In Here</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2 p-3 '>
            <span>Enter Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder='User Id'
              required
            />
          </div>

          <div className='flex flex-col gap-2 p-3 '>
            <span>Enter password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder='Password'
              required
            />
          </div>
          {error && <p>{error}</p>}
          <div className='mt-4 text-center'>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Login</button>
          </div>
          <span>Dont have an account?
            <Link to="/register" className='text-primary align-center'> Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
