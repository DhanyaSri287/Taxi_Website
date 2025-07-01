import React from 'react';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/AboutUS/About';
import Cities from './Components/Cities';
import Explore from './Components/Explore';
import Trip from './Components/BookMyTrip/Trip';
import Login from './Components/Login';
import DayTrip from './Components/BookMyTrip/DayTrip';
import HourlyRentalPage from './Components/BookMyTrip/HourlyRental';
import RoundTrip from './Components/BookMyTrip/RoundTrip';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/explore/:cityName" element={<Explore />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/login" element={<Login />} />
        <Route path="/one-way" element={<DayTrip />} />
         <Route path="/hourlyrental" element={<HourlyRentalPage />} />
         <Route path="/roundtrip" element={<RoundTrip/>}/>
      </Routes>
    </Router>
  );
};

export default App;
