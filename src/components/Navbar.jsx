import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase'; // Adjust path if needed
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {
  const [user] = useAuthState(auth);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold font-cursive">Grab your style</h1>
        </Link>
        <ul className="flex space-x-8 font-medium items-center">
          <li><Link to="/services" className="hover:text-orange-600">Services</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact us</Link></li>


        {user ? (
            <div className="flex items-center space-x-3">
              <Link to="/login" className="text-sm text-red-600 hover:underline">
                Profile
              </Link>
            </div>
          ) : (
            <li>
              <Link to="/login" className="hover:text-orange-600">Login / Sign In</Link>
            </li>
          )}
          <li>
            <Link to="/demo" className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
              Free Demo Session
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
