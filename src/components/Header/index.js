import React from 'react';
import { Link } from 'react-router-dom';
import LibraryIcon from '../Library/img/LibraryMusic.png'
import Home from '../Library/img/home.svg'
import { useLocation } from 'react-router-dom';



const Header = () => {
  const location = useLocation();
  const actualPath = location.pathname;

  const showLibraryIcon = actualPath === '/' || actualPath.startsWith('/song/') || actualPath.startsWith('/SearchResults');
  const showHomeIcon = actualPath !== '/';
  
  return (
    <header className="header">
    <h1 className='appTitle'>Grooves App</h1>
    <nav className='navContainer'>

      {showLibraryIcon && (
        <Link  to="/Library" >
      <img className='iconLibrary' src={LibraryIcon}  alt='imageLibrary'/>
      </Link>
      )}

      {showHomeIcon && (
        <Link  to="/" >
         <img className='iconHome' src={Home}  alt='imageLibrary'/>
        </Link>
      )}

    </nav>
  </header>
  );
};

export default Header;