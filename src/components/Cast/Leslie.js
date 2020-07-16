import React from 'react'
import leslie from '../../images/leslie.jpeg'
const Leslie = () => {
    return (
        <div class="modal fade" id="leslie" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Leslie Odom Jr.</h5>
                <h6>Aaron Burr</h6>
                
            </div>
            <div class="modal-body">
            <img src={leslie} className="about-photo"  />
                <p className="cast-info">
                After winning the Tony for his performance as Hamilton’s rival, Leslie Odom, Jr. moved into the recording space. His self-titled debut album was released in June 2016; Simply Christmas was released just in time for the holidays in 2018; and Mr. came out in November 2019. But between recording sessions, Odom made his feature film debut in Kenneth Branaugh’s Murder on the Orient Express as Dr. Arbuthnot thn went on to star alongside Cynthia Erivo in the Harriet Tubman biopic. He also became a dad with his wife, actor Nicolette Robinson. Next, he plays soul singer Sam Cooke in the upcoming feature film One Night in Miami.
                <br></br>
                <a href="https://www.playbill.com/article/where-is-the-original-cast-of-broadways-hamilton-now" target="_blank">-Playbill</a>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>

    )
}
export default Leslie