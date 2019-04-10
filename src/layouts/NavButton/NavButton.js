import React from 'react'
import './NavButton.css'
import {Link} from "react-router-dom";
import Radium from 'radium'

const NavButton = Radium(Link);

const navButton = props => (
  <NavButton to={props.link} style={{margin: 'auto'}}>
    <button className="NavButton">{props.children}</button>
  </NavButton>
);

export default navButton;