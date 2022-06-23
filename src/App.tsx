import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/home/Home';
import Appointments from './Routes/appointments/Appointments';
import SearchGroomers from './Routes/searchgroomers/SearchGroomers';
import Services from './Routes/services/Services';
import Nav from './Components/NavBar';
import Login from './Routes/login/login';
import Register from './Routes/register/register';
import Profile from './Components/profile';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Components/logout';
import LoginButton from './Components/login';

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

 
 <>
 <Nav />
 <Routes> 
   <Route path='/appointments' element={<Appointments/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/searchgroomers' element={<SearchGroomers/>}/>
   <Route path='/services' element={<Services/>}/>

 </Routes>
    </>


export default App;
