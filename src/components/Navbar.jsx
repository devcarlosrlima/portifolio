import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header>

      <a className='logo' href="/"> Carlos.</a>
      <nav className="navbar">

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <p className="close-icon">X</p>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active">Education</NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">Skills & Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
