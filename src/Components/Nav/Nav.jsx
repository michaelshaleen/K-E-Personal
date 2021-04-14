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

    <nav className="sidebar">
      <div className="text">Side Menu</div>
      <ul>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#" className="feat-btn">Features
            <span className="fas fa-caret-down first"></span> 
          </a>
          <ul>
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
    </nav>

{/* <nav className="nav">
    {/* <div className="nav"> 
    <div className="text">

    <div className="toggle">
      <h2>Hello</h2>
      <div class="menu">
        <ul>
          <li><a href="#/user">Home</a></li> 
        
          <li><a href="#/contact">Contact</a></li>
          <li><a href="#/education">Education</a></li>
          <li><a href="#/">Welcome Page</a></li>
         
          */}
          {/* <li><a href="#">Logout</a></li> */}
          {/* <li><LogOutButton /></li> 
        </ul>
      </div>
      </div>

    

      </div>
          
</nav> */}









    {/* <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          Michael by Shaleen
          <i class='fab fa-typo3' ></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-links" onClick={closeMobileMenu}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hire" className="nav-links" onClick={closeMobileMenu}>
              Hire Me
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}

      </div>
    </nav> */}



    </>
  )
}

export default Nav;