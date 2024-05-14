import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user } = useAuth0();
  
  return (
    <div>
      <h1>Welcome to the Dashboard, {user.name}!</h1>
      <p>Your email: {user.email}</p>
      <img src={user.picture} alt="User profile" />
    </div>
  );
}

export default Dashboard;
