import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './Pages/Hero';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Testimonials from './Pages/Testimonials';
import Login from './components/Login';
import BookingPage from './Pages/BookingPage';
import Clubroom from "./components/Clubroom";
import Services from './Pages/Services';


function App() {
  const [user, setUser] = useState(null); // optional, for showing user name

  return (
    <div className='bg-orange-100 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />  
          <Route path="/login" element={<Login setUser={setUser} />} /> 
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/demo" element={<Clubroom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
