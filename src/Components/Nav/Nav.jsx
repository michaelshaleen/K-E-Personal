import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Nav.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Info } from './Info';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const[sidebar, setSideBar] = useState(false);





  const showSideBar = () => setSideBar(!sidebar);

 



  
 

  return(
    <>
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSideBar}/>

      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSideBar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {Info.map((item, index) => {
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>

    
    </>
  )
}

export default Nav;