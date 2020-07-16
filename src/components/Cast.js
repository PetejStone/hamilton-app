import React from 'react'
import './Main.scss'
import lin from '../images/lin-manuel.jpeg'
import daveed from '../images/daveed.jpeg'
import leslie from '../images/leslie.jpeg'
import renee from '../images/renee.jpeg'

import Daveed from './Cast/Daveed.js'
import LinManuel from './Cast/LinManuel.js'
import Leslie from './Cast/Leslie.js'
import Renee from './Cast/Renee.js'
const Cast = () => {
    return (
        <div className="cast">
            <h2>Original Hamilton Cast</h2>
            <div className="cast-member-container">
                <div className="member">
                    <img src={lin} className="cast-photo"  data-toggle="modal" data-target="#lin-manuel"/>
                    <p>Lin-Manuel Miranda</p>
                </div>

                <div className="member">
                    <img src={daveed} className="cast-photo"  data-toggle="modal" data-target="#daveed"/>
                    <p>Daveed Diggs</p>
                </div>

                <div className="member">
                    <img src={leslie} className="cast-photo"  data-toggle="modal" data-target="#leslie"/>
                    <p>Leslie Odom Jr.</p>
                </div>

                <div className="member">
                    <img src={renee} className="cast-photo"  data-toggle="modal" data-target="#renee"/>
                    <p>Renée Elise Goldsberry</p>
                </div>

                
            </div>

                <LinManuel />
                <Daveed />
                <Leslie />
                <Renee />
            
        </div>
    )
}
export default Cast