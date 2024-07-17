import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import './Nav.css';

const Nav = () => {
  
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {
      edge: 'left',
    });
  }, []);

  const setActive = ({ isActive }) => (isActive ? 'active' : '');

  const closeSidenav = () => {
    const sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
    sidenavInstance.close();
  };

  return (
    <div>
      <a href="#" data-target="slide-out" className="sidenav-trigger show-on-medium-and-down">
        <i className="material-icons myMenu">menu</i>
      </a>

      <ul id="slide-out" className="sidenav">
        <li><NavLink to="/" className={setActive}>Home</NavLink></li>
        <li><NavLink to="/about" className={setActive}>About</NavLink></li>
        <li><i className="material-icons myMenu" onClick={closeSidenav}>menu</i></li>
      </ul>

      <ul className="sidenav hide-on-med-and-down">
        <li><NavLink to="/" className={setActive}>Home</NavLink></li> 
        <li><NavLink to="/about" className={setActive}>About</NavLink></li>
        
      </ul>
    </div>
  );
}

export default Nav;
