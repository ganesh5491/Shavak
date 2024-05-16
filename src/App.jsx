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
import Products from './components/Supports';
import SolutionComponent from './components/SolutionComponent';
import RevarceComponent from './components/RevarceComponent';
import HPC from './components/Varients/HPC';
import Dashboard from './components/Dashboard'; 
import { Auth0Provider } from '@auth0/auth0-react';
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
    <Auth0Provider
      domain="dev-e51an5h0cq4nw0tz.us.auth0.com"
      clientId="BOjfElVLm5Z7DkZ2r9nADw4mcIghvr2U"
      redirectUri={window.location.origin}
    >
      <Router>
        <Navbar />
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
          <Route path="/Products" element={<Components />} />
          <Route path="/RevarceComponent" element={<RevarceComponent />} />
          <Route path="/SolutionComponent" element={<SolutionComponent />} />
          <Route path="/varients/HPC" element={<HPC />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
      </Auth0Provider>
  );
};

export default App;
