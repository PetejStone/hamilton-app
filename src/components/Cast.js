import React from 'react'
import './Main.scss'
import {Parallax, Background} from 'react-parallax'

import lin from '../images/lin-manuel.jpeg'
import daveed from '../images/daveed.jpeg'
import leslie from '../images/leslie.jpeg'
import renee from '../images/renee.jpeg'
import phillipa from '../images/phillipa.jpeg'
import jasmine from '../images/jasmine.jpeg'
import chris from '../images/chris.jpeg'
import jonathan from '../images/jonathan.jpeg'
import okieriete from '../images/okieriete.jpeg'
import anthony from '../images/anthony.jpeg'


import Daveed from './Cast/Daveed.js'
import LinManuel from './Cast/LinManuel.js'
import Leslie from './Cast/Leslie.js'
import Renee from './Cast/Renee.js'
import Phillipa from './Cast/Phillipa.js'
import Jasmine from './Cast/Jasmine.js'
import Chris from './Cast/Chris.js'
import Jonathan from './Cast/Jonathan.js'
import Okieriete from './Cast/Okieriete.js'
import Anthony from './Cast/Anthony.js'


const Cast = () => {
    return (
        <Parallax className='cast' 
        bgImage={require('../images/hamcast.jpg')}
        bgImageAlt="the cat"
        bgImageSizes="10%"
        strength={200}>
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

                <div className="member">
                    <img src={phillipa} className="cast-photo"  data-toggle="modal" data-target="#phillipa"/>
                    <p>Phillipa Soo</p>
                </div>

                <div className="member">
                    <img src={jasmine} className="cast-photo"  data-toggle="modal" data-target="#jasmine"/>
                    <p>Jasmine Cephas Jones</p>
                </div>

                <div className="member">
                    <img src={chris} className="cast-photo"  data-toggle="modal" data-target="#chris"/>
                    <p>Christopher Jackson</p>
                </div>

                <div className="member">
                    <img src={jonathan} className="cast-photo"  data-toggle="modal" data-target="#jonathan"/>
                    <p>Jonathan Groff</p>
                </div>

                <div className="member">
                    <img src={okieriete} className="cast-photo"  data-toggle="modal" data-target="#okieriete"/>
                    <p>Okieriete Onaodowan</p>
                </div>

                <div className="member">
                    <img src={anthony} className="cast-photo"  data-toggle="modal" data-target="#anthony"/>
                    <p>Anthony Ramos</p>
                </div>

                
            </div>

                <LinManuel />
                <Daveed />
                <Leslie />
                <Renee />
                <Phillipa />
                <Jasmine />
                <Chris />
                <Jonathan />
                <Okieriete />
                <Anthony />
            
        </Parallax>
    )
}
export default Cast