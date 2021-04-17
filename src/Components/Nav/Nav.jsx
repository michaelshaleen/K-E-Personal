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
    <div className="menu-icon" onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>

       
    
    <nav className="sidebar">
      <div className="text">Side Menu</div>
      <div className="menu">
      <ul>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="#" className="feat-btn">Features
            <span className="fas fa-caret-down first"></span> 
          </a>
          <ul className="feat-show">
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Elements</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="serv-btn">Services
          <span className="fas fa-caret-down second"></span> 
          </a>
          <ul>
            <li>
              <a href="#">App Design</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
          </ul>
        </li>
            <li>
              <a href="#">Portfolio</a>
            </li> 
            <li>
              <a href="#">Overview</a>
            </li>
             <li>
              <a href="#">Shortcuts</a>
            </li> 
            <li>
              <a href="#">Feedback</a>
            </li>
      </ul>
    </div>
    </nav>


  







    </>
  )
}

export default Nav;