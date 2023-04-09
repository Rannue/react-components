import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pngegg.png';

export class Header extends React.Component {
  render() {
    return (
      <>
        <div className="logo">
          <h4>NO_LOGO</h4>
        </div>
        <div className="pages">
          <NavLink end to="/">
            Main page
          </NavLink>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/form">Form!</NavLink>
        </div>
      </>
    );
  }
}

export default Header;
