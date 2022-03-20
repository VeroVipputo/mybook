import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <Link className='navbar-brand' to='/'>
                    <img src="/atom.png" alt="" width="60" height="60"></img>
                </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/home'>Home</Link>
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
        </nav>
    </div>
  )
}

export default NavBar