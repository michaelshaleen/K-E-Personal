import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React from 'react'
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";



export const Info = [

  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Story',
    path: '/bio',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  }, 
  {
    title: 'Contact Me',
    path: '/contact',
    icon: <AiIcons.AiOutlineMail />,
    cName: 'nav-text'
  }, 
  {
    title: 'Care',
    path: '/',
    icon: <RiIcons.RiMentalHealthLine/>,
    cName: 'nav-text'
  }, 
  
]