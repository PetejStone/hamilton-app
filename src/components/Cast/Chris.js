import React from 'react'
import chris2 from '../../images/chris2.jpeg'
const Chris = () => {
    return (
        <div class="modal fade" id="chris" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Christopher Jackson</h5>
                <h6>George Washington</h6>
                
            </div>
            <div class="modal-body">
            <img src={chris2} className="about-photo"  />
                <p className="cast-info">
                A Tony nominee for his portrayal of our first president, Jackson was actually pulling double duty—filming CBS’ Bull while performing on Broadway. He exited the Broadway show November 13, 2016, but Bull continues to air on CBS. Following a trial science firm who helps clients select favorable juries, Jackson plays the firm’s stylist, Chunk Palmer. Jackson also provided the singing voice for Chief Tui in Disney’s Moana, showcased in the opening number “Where You Are.” Jackson returned to Broadway as a spontaneous special guest in Freestyle Love Supreme, and will be seen in the upcoming documentary We Are Freestyle Love Supreme on Hulu. He recently joined Playbill for a Q&A with his vocal coach, Liz Caplan.
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
export default Chris