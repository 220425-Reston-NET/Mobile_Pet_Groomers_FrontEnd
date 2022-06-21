import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/home/Home';
import Appointments from './Routes/appointments/Appointments';
import SearchGroomers from './Routes/searchgroomers/SearchGroomers';
import Services from './Routes/services/Services';
import Nav from './Components/NavBar';

function App() {
  return (
 
 <>
<Nav />
<Routes> 
  <Route path='/' element={<Home/>}/>
  <Route path='/appointments' element={<Appointments/>}/>
  <Route path='/searchgroomers' element={<SearchGroomers/>}/>
  <Route path='/services' element={<Services/>}/>

</Routes>
    </>
  );
}

export default App;
