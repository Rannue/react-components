import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <>
        <div className="logo">
          <h4>KEYBOARDS</h4>
        </div>
        <div className="pages">
          <NavLink end to="/">
            Main page
          </NavLink>
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/your-keybords">Your keybords</NavLink>
        </div>
      </>
    );
  }
}

export default Header;
