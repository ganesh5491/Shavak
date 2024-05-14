import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    instituteName: '',
    gender: '',
    dob: '',
    email: '',
    contactNumber: '',
    userId: '',
    password: '',
    repeatPassword: '',
    city: '',
    pincode: '',
    state: '',
    country: ''
  });

  const [uniqueId, setUniqueId] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'name' || e.target.name === 'dob') {
      const uniqueId = generateUniqueId(formData.name, formData.dob);
      setUniqueId(uniqueId);
    }
  };

  const generateUniqueId = (name, dob) => {
    const nameInitials = name.split(' ').map((word) => word[0]).join('');
    const dobParts = dob.split('-');
    const year = dobParts[0].slice(2);
    const month = dobParts[1];
    const day = dobParts[2];
    const uniqueId = `${nameInitials}${year}${month}${day}`.slice(0, 6);
    return uniqueId;
  };

  const validateForm = () => {
    const errors = {};
    if (formData.contactNumber.length!== 10) {
      errors.contactNumber = 'Contact number must be 10 digits';
    }
    if (formData.pincode.length!== 6) {
      errors.pincode = 'Pin code must be 6 digits';
    }
    if (formData.password!== formData.repeatPassword) {
      errors.password = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await axios.post('http://localhost:5000/users', formData);
      console.log('Registration successful:', response.data);
      Swal.fire({
        title: "Registration Succesfully!",
        icon: "success"
      });
    } catch (error) {
      console.error('Registration failed:', error);
      Swal.fire({
        title: "Registration Failed!",
        icon: "warning"
      });
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="shadow-2xl p-5 rounded-xl mt-[30px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center font-bold">Customer - Sign Up Here</h1>

          <div className="flex p-2 items-center gap-3">
            <div className="w-full flex flex-col gap-3">
              <span>Enter Name :</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <span>Institute Name :</span>
              <input
                type="text"
                name="instituteName"
                value={formData.instituteName}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Institute Name"
                required
              />
            </div>
          </div>

          <div className="mt-3 flex gap-3">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="gender" className="mr-2">
                Select Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="appearance-none p-3 shadow form-control border-gray focus:border-blue-500 block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                required
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

<div className="w-full flex flex-col gap-3">
              <span>Date Of Birth :</span>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Date of Birth"
                required
              />
            </div>
          </div>

          <div className="flex p-2 items-center gap-3">
            <div className="w-full flex flex-col gap-3">
              <span>Enter Email :</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <span>Contact Number :</span>
              <input
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Contact Number"
                required
              />
              {errors.contactNumber && <p className="text-danger">{errors.contactNumber}</p>}
            </div>
          </div>

          <div className="flex p-2 items-center gap-3">
            <div className="w-full flex flex-col gap-3">
              <span>Your Id :</span>
              <input
                type="text"
                name="userId"
                value={uniqueId}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter Your Id"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <span>Enter Password :</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter New Password"
                required
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <div className="w-full flex flex-col gap-3">
              <span>Repeat Password :</span>
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                className="form-control p-3 shadow rounded-0 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Repeat Password"
                required
              />
              {errors.repeatPassword && <p className="text-danger">{errors.repeatPassword}</p>}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <span className="fw-bold">Location Details</span>
            <div className="flex gap-3">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control p-3 shadow appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter City"
                required
              />
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="form-control p-3 shadow appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter Pincode"
                required
              />
              {errors.pincode && <p className="text-danger">{errors.pincode}</p>}
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-control p-3 shadow appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter State"
                required
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control p-3 shadow appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Enter Country"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button type="submit" className="p-2 rounded-xl w-25 mt-3 bg-purple-800 text-light">
              Sign Up
            </button>
          </div>

          <div className="mt-4 text-center">
            <span>
              Already have an account?{' '}
              <Link to="/login" className="text-primary">
                Sign In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;