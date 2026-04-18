import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#f3fbf6]/80 backdrop-blur-md dark:bg-[#161d1a]/80 fixed top-0 w-full z-50 bg-gradient-to-b from-[#f3fbf6] to-transparent">
      <div className="flex items-center w-full px-8 py-4 max-w-screen-2xl mx-auto h-20">
        
        <div className="flex-1 flex justify-start">
          <Link to="/" className="text-2xl font-serif font-bold text-[#161d1a] dark:text-[#f3fbf6] tracking-tight font-headline">
            Neural Frontier
          </Link>
        </div>
        
        <div className="flex-1 hidden md:flex justify-center items-center gap-8">
          <Link to="/markets" className="text-[#5d5e61] dark:text-[#c6c6c9] hover:text-[#006b5e] transition-colors font-body font-medium">Markets</Link>
          <Link to="/predictions" className="text-[#5d5e61] dark:text-[#c6c6c9] hover:text-[#006b5e] transition-colors font-body font-medium">Predictions</Link>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link to="/predictions" className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#5d5e61] to-[#c6c6c9] text-on-primary px-6 py-2.5 rounded-full font-label text-sm tracking-wider hover:opacity-90 transition-opacity scale-95 active:opacity-80 duration-200">
              ENTER APP
          </Link>
        </div>

      </div>
    </nav>
  );
}
