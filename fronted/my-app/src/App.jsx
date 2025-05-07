import React from 'react';
import LandingPage from './pages/landingPage.jsx';
import {Routes,Route} from 'react-router-dom';
import EventDetails from './pages/Eventdetails.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <Routes>
    <Route path='/' element={ <LandingPage/>}/>
    <Route path='/events/:id'element={<EventDetails/>}/>
    </Routes>
    );
  
}

export default App
