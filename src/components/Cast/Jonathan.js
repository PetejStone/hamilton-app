import React from 'react'
import jonathan2 from '../../images/jonathan2.jpeg'
const Jonathan = () => {
    return (
        <div class="modal fade" id="jonathan" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Jonathan Groff</h5>
                <h6>King George</h6>
                
            </div>
            <div class="modal-body">
            <img src={jonathan2} className="about-photo"  />
                <p className="cast-info">
                The two-time Tony nominee whose iconic King George even got Beyoncé talking continues to take risks that pay off. After leaving the show April 9, 2016, Groff filmed the HBO Looking movie. Since then, Groff caused a stir as the lead in the first podcast musical 36 Questions and has captivated audiences on Netflix’s series Mindhunter. Groff again voiced Frozen’s Kristoff in the spinoff short Olaf’s Frozen Adventure and Frozen 2—this time with a full boy-band solo tune. Groff returned to the stage with Off-Broadway run of Little Shop of Horrors as Seymour. He’ll be featured in the Disney+ doc Into the Unknown: Making Frozen 2.
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
export default Jonathan