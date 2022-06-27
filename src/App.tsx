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
import Confirmedpage from './Routes/confirmed/confirmedpage';
import Welcome from './Routes/welcome/welcome';
// import Profile from './Components/profile';
// import { useAuth0 } from '@auth0/auth0-react';
// import LogoutButton from './Components/logout';
// import LoginButton from './Components/login';

function App() {
  return (
    // const {isAuthenticated} = useAuth0();
  
 <>
 <Nav />
 <Routes> 
   <Route path='/appointments' element={<Appointments/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/welcome' element={<Welcome/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/searchgroomers' element={<SearchGroomers/>}/>
   <Route path='/services' element={<Services/>}/>
   <Route path='/confrimed' element={<Confirmedpage/>}/>

 </Routes>
    </>
  // <div className="App">
  //       {
  //           isAuthenticated ?
  //           <div>
  //           <LogoutButton></LogoutButton>
  //           <Profile></Profile>
  //           </div>
  //           :
  //           <LoginButton></LoginButton>
  //         }
  //   </div>
    );
}

 


export default App;
