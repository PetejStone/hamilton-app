import React from 'react'
import {Parallax, Background} from 'react-parallax'
import ReactPlayer from "react-player"
const Videos = () => {
    return (
        <Parallax className='videos' 
        bgImage={require('../images/lanphil.jpg')}
        
        strength={200}>
            <h2>Videos</h2>
            <div className="videos-container">
                <div className="video">
                    <ReactPlayer className="vid" url="https://www.youtube.com/watch?v=2bkqXVc_1go" allowfullscreen="allowfullscreen" />
                    <p>The Schuyler Sisters</p>
                </div>

                <div className="video">
                    <ReactPlayer className="vid" url="https://www.youtube.com/watch?v=b5VqyCQV1Tg&t=147s" allowfullscreen="allowfullscreen" />
                    <p>70th Annual Tony Awards</p>
                </div>
                
                <div className="video">
                    <ReactPlayer className="vid" url="https://www.youtube.com/watch?v=vo_s6PsVogI&t=3s" allowfullscreen="allowfullscreen" />
                    <p>Hamilton Cast Performs "Helpless" With Jimmy Fallon and The Roots</p>
                </div>
                
            </div>
            
        </Parallax>
    )
}
export default Videos