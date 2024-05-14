import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/cdaclogo.png";
import logo2 from "../assets/shavaklogo.png";
import { Home } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar1 = () => {
  const { isAuthenticated, user } = useAuth0();

  
;
  return (
    <>
      <nav className="p-2 flex  w-[99vw] items-center" >
        <div  className="shadow flex justify-between w-[100%] ">

        <div className="flex gap-3 items-center ">
          <img src={logo1} alt="CDAC Logo" className="logo w-[50px]" />
          <img src={logo2} alt="Shavak Logo" className="logo w-[80px]" />
        </div>
        <ul type="none" className="flex gap-5 items-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <Home/>
            </Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to="/AboutUs">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Supports">
              Support
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>
          {isAuthenticated && <h2>{user.name}</h2>}
        </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar1;
