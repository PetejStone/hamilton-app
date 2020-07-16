import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss'
const Nav = () => {
    return (
        <nav>
        <NavLink exact to="/" className="navbar-link" activeStyle={{textDecoration: "underline"}}>Home</NavLink>
        <NavLink to="/about" className="navbar-link"activeStyle={{textDecoration: "underline"}} >About</NavLink>
        <NavLink to="/cast" className="navbar-link" activeStyle={{textDecoration: "underline"}}>Cast</NavLink>
        <NavLink to="/videos" className="navbar-link" activeStyle={{textDecoration: "underline"}}>Videos</NavLink></nav>
    )
}
export default Nav