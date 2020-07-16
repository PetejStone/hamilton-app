import React from 'react'
import phillipa2 from '../../images/phillipa2.jpeg'
const Phillipa = () => {
    return (
        <div class="modal fade" id="phillipa" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Phillipa Soo</h5>
                <h6>Eliza Schuyler </h6>
                
            </div>
            <div class="modal-body">
            <img src={phillipa2} className="about-photo"  />
                <p className="cast-info">
                Hamilton’s leading lady departed the show at the same time as Miranda and Odom to play the title role in Amélie, the musical adaptation of the Oscar-nominated movie. Another Hamilton alum who provided vocals for Moana, Soo most recently appeared on Broadway in The Parisian Woman, by House of Cards creator Beau Willimon. She was a series regular on the network series The Code, and recently returned to the stage in Leigh Silverman’s production of Tumacho Off-Broadway. She will give voice to one of the characters in the upcoming animated movie Over the Moon, which also features Ruthie Ann Miles and Conrad Ricamora.
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
export default Phillipa