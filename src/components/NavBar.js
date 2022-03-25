import React from 'react';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <Link className='navbar-brand' to='/'>
                    <img src="/atom.png" alt="" width="60" height="60"></img>
                </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/home'>My Book</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/topTen'>Top Ten</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/colecciones'>Colecciones</Link>
                </li>
            </ul>
            </div>
        </div>
        <CartWidget></CartWidget>
        </nav>
    </div>
  )
}



export default NavBar