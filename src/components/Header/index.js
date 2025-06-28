import React from 'react';
import { Link } from 'react-router-dom';
import LibraryIcon from '../Library/img/LibraryMusic.png'
import Home from '../Library/img/home.svg'
import { useLocation } from 'react-router-dom';
import { HeaderContainer, NavContainer, AppTittle, IconHome, IconLibrary } from './styles';



const Header = () => {
  const location = useLocation();
  const actualPath = location.pathname;

  const showLibraryIcon = actualPath === '/' || actualPath.startsWith('/song/') || actualPath.startsWith('/SearchResults');
  const showHomeIcon = actualPath !== '/';
  
  return (
    <HeaderContainer className="header">
    <AppTittle className='appTitle'>Grooves App</AppTittle>
    <NavContainer className='navContainer'>

      {showLibraryIcon && (
        <Link  to="/Library" >
      <IconLibrary className='iconLibrary' src={LibraryIcon}  alt='imageLibrary'/>
      </Link>
      )}

      {showHomeIcon && (
        <Link  to="/" >
         <IconHome className='iconHome' src={Home}  alt='imageLibrary'/>
        </Link>
      )}

    </NavContainer>
  </HeaderContainer>
  );
};

export default Header;