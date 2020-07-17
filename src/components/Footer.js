import React from 'react'
import './Header.scss'
const Footer = () => {
    return (
        <footer>
            <p>&copy; {  new Date().getFullYear() } <a href="http://www.stonesquareddevelopment.com" target="_blank">StoneSquared Development</a></p>
        </footer>
    )
}
export default Footer