import React from 'react';
import './App.css';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import Profile from './Components/profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();


  return (
    <div className="App">
      {
        isAuthenticated ? 
        <div>
          <LogoutButton></LogoutButton>
          <Profile></Profile>
        </div>
        :
        <LoginButton></LoginButton>
      }
    </div>
  );
}

export default App;
