import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillContacts } from 'react-icons/ai'

function Nav() {
  return (
    <div className='nav'>
        <div className='ikona'>
            <NavLink to='/'><AiFillContacts /></NavLink>
        </div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/radnici'>Radnici</NavLink></li>
            <li><NavLink to='/onama'>O name</NavLink></li>
            <li><NavLink to='/kontakti'>Kontakt</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav