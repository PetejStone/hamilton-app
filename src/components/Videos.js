import React from 'react'

const Videos = () => {
    return (
        <div className="videos">
            <h2>Videos</h2>
            <div className="videos-container">
                <div className="video">
                    <iframe src="http://www.youtube.com/embed/2bkqXVc_1go?html5=1" allowfullscreen="allowfullscreen"></iframe>
                    <p>The Schuyler Sisters</p>
                </div>

                <div className="video">
                    <iframe src="http://www.youtube.com/embed/b5VqyCQV1Tg?html5=1" allowfullscreen="allowfullscreen"></iframe>
                    <p>70th Annual Tony Awards</p>
                </div>
                
                <div className="video">
                    <iframe src="http://www.youtube.com/embed/vo_s6PsVogI?html5=1" allowfullscreen="allowfullscreen"></iframe>
                    <p>Hamilton Cast Performs "Helpless" With Jimmy Fallon and The Roots</p>
                </div>
                
            </div>
            
        </div>
    )
}
export default Videos