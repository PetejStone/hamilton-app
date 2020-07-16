import React from 'react'
import okieriete2 from '../../images/okieriete2.jpeg'
const Okieriete = () => {
    return (
        <div class="modal fade" id="okieriete" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Okieriete Onaodowan</h5>
                <h6>Hercules Mulligan/James Madison</h6>
                
            </div>
            <div class="modal-body">
            <img src={okieriete2} className="about-photo"  />
                <p className="cast-info">
                Previously an unknown, Hamilton put Onaodowan on the map. He took over the title role of Pierre in the Tony-nominated musical Natasha, Pierre & the Great Comet of 1812 after Grammy nominee Josh Groban departed. Occupants of Shondaland watch “Oak” weekly on the Grey’s Anatomy spinoff about Seattle firefighters that also stars Groundhog Day’s Barrett Doss, which wrapped Season 3 earlier this year.
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
export default Okieriete