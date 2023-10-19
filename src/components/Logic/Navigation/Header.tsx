import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../assets/breinbrein0412_A_minimalist_logo_featuring_a_stylized_wave_in_d_18287400-c0cb-4965-b18c-b3f0348c1eb4.png'
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth0();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className={`max-w-screen-xl flex items-center justify-between mx-auto p-4 ${showMenu ? 'navbar-menu active' : 'navbar-menu'}`}>
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12 mr-8" />
          <Link to="/new-dive" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">New Dive</Link>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <ul className="flex items-center md:order-2">
          <li className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link path="" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <Link to="/past-dives">Past Dives</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <Link to="/gear-tracking">Gear Tracking</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <Link to="/catches">Catches</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <Link to="/training">Training</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                <Link to="/about-spear-io">About Spear.io</Link>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={() => logout({})} // Removed the 'returnTo' property
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
