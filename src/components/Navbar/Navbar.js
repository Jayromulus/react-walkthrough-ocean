import React from 'react';
import pizzaPic from '../../assets/pizza-planet.jpeg';
import './Navbar.css';
import Logout from '../Logout/Logout'

// function Navbar() {}
const Navbar = (props) => {
  return(
    <div>
      <nav>
        <img id="pizzaPic" src={pizzaPic} alt="pizza" />
        <Logout setSessionToken={props.setSessionToken} />
      </nav>
    </div>
  );
}

export default Navbar;