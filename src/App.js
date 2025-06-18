import React from 'react';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Cities from './Components/Cities';
import Trip from './Components/Trip';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
