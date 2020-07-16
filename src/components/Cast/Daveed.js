import React from 'react'
import daveed2 from '../../images/daveed2.jpeg'
const Daveed = () => {
    return (
        <div class="modal fade" id="daveed" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Daveed Diggs</h5>
                <h6>Marquis de Lafayette/Thomas Jefferson</h6>
                <h6 className="departed">-Departed Jul 15, 2016</h6>
                
            </div>
            <div class="modal-body">
            <img src={daveed2} className="about-photo"  />
                <p className="cast-info">
                The fast-rapping, charismatic Tony winner has catapulted to one of the most in-demand and active talents in Hollywood. A recurring guest star on ABC’s black-ish, Diggs plays Rainbow’s brother Johan Johnson in the hit comedy series; then he popped up on Netflix in Season 3 of Unbreakable Kimmy Schmidt as the titular character’s new love interest. He voices animated character Dos in the upcoming Ferdinand based on the children’s book (in theatres December 15). He wrote and starred in his own movie, Blindspotting, and has lent his voice to series like Bob’s Burgers, Netflix’s Green Eggs and Ham, and Star Wars Resistance. His television career has skyrocketed as he was a regular on Undone and will portray Frederick Douglass on the upcoming series The Good Lord Bird and as Andre Layton in Snowpiercer, which premiered May 17. He’s also been working on new music with his group Clipping.
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
export default Daveed