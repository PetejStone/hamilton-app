import React from 'react'
import './Main.scss'
import { Parallax,Background } from 'react-parallax';
const Home = () => {
    return (
        <Parallax className='home' 
        bgImage={require('../images/hamiltoncompany.jpg')}
        bgImageAlt="the cat"
        bgImageSizes="10%"
        strength={200}>
            <p>Hamilton is the story of the unlikely Founding Father determined 
            to make his mark on the new nation as hungry and ambitious as he is. 
            From bastard orphan to Washington's right-hand man, rebel to war hero, 
            a loving husband caught in the country's first sex scandal, to the 
            Treasury head who made an untrusting world believe in the American 
            economy. George Washington, Eliza Hamilton, Thomas Jefferson and 
            Hamilton's lifelong friend/foil Aaron Burr all make their mark in 
            this astonishing new musical exploration of a political mastermind.
            <br></br>
            <a href="https://www.broadway.com/shows/hamilton-broadway/" target="_blank">-Broadway.com</a>
            </p>
        </Parallax>
    )
}
export default Home