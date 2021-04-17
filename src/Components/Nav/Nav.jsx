import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Nav.css';


function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960 ){
      setButton(false);
    }else{
      setButton(true);
    }
  };


  useEffect(() => {
    showButton()

  }, []);

  window.addEventListener('resize', showButton);



 

  return(
    <>
    <nav className="navbar">
      <span className="open-slide">
        <a href="#">
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#000"
              strokeWidth="5"/>
            <path d="M0,14 30,14" stroke="#000"
              strokeWidth="5"/> 
            <path d="M0,23 30,23" stroke="#000"
              strokeWidth="5"/>
          </svg>
        </a>
      </span>
      <ul className="navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>



      </ul>
    </nav>
    



    </>
  )
}

export default Nav;