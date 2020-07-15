import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss'
const Nav = () => {
    return (
        <nav>
        <NavLink to="/" className="navbar-link">Home</NavLink>
        <NavLink to="/about" className="navbar-link">About</NavLink>
        <NavLink to="/cast" className="navbar-link">Cast</NavLink>
        <NavLink to="/videos" className="navbar-link">Videos</NavLink>
        </nav>
    )
}
export default Nav