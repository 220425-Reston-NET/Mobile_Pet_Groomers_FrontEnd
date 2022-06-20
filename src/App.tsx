import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Appointments from './Routes/Appointments';
import SearchGroomers from './Routes/SearchGroomers';
import Services from './Routes/Services';

function App() {
  return (
    <div >
<Routes> 
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Appointments' element={<Appointments/>}/>
  <Route path='/Searchgroomers' element={<SearchGroomers/>}/>
  <Route path='/Services' element={<Services/>}/>

</Routes>
    </div>
  );
}

export default App;
