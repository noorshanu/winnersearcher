import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <>
      <div className="py-3 sm:py-2 flex justify-center items-center gap-4">
        <img
          src="images/logo.png"
          alt=""
          className="h-[2rem] sm:h-[40px]"
        />
        <h2 className="font-work text-3xl sm:text-4xl font-normal text-white tracking-[-0.11em]">
          TRADE-ATHON
        </h2>
      </div>
      <nav className="flex justify-center gap-4 items-center">
        <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
        <NavLink to="/galxereward" currentPath={location.pathname}>Galxe Reward</NavLink>
        <NavLink to="/taskonreward" currentPath={location.pathname}>Taskon Reward</NavLink>
        <NavLink to="/questreward" currentPath={location.pathname}>Quest Reward</NavLink>
      </nav>
    </>
  );
}

function NavLink({ to, currentPath, children }) {
  const isActive = to === currentPath;

  return (
    <Link
      to={to}
      className={`text-sm sm:text-lg font-bold text-white ${isActive ? 'text-[#11c9c7]' : ''}`}
    >
      {children}
    </Link>
  );
}

export default Navbar;