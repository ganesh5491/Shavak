import React from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import Components from './components/Products';
import AboutUs from './components/Aboutus';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/contactus';
import Navbar1 from './components/Navbar1';
import TranslationEngtoHindi from './components/i18n';
import Products from './components/Supports';
import SolutionComponent from './components/SolutionComponent';
import RevarceComponent from './components/RevarceComponent';
import HPC from './components/Varients/HPC';
import Dashboard from './components/Dashboard'; 

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

const App = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const handleLogin = () => {
    // login logic here
    setAuthenticated(true);
  };

  const PrivateRoute = () => {
    if (!authenticated) {
      return <Navigate to="/login" replace />;
    }
    return <Outlet />;
  };
  return (
    <Router>
      <Navbar></Navbar>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Supports" element={<Products />} />
        <Route path="/Navbar1" element={<Navbar1 />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/i18n" element={<TranslationEngtoHindi />} />
        <Route path="/Products" element={<Components />} />
        <Route path="/RevarceComponent" element={<RevarceComponent />} />
        <Route path="/SolutionComponent" element={<SolutionComponent />} />
        <Route path="/varients/HPC" element={<HPC />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <PrivateRoute path="/Dashboard" element={<Dashboard />} />
        <Route path="/PrivateRoute" element={<PrivateRoute />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
