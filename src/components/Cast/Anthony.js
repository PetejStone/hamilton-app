import React from 'react'
import anthony from '../../images/anthony.jpeg'
const Anthony = () => {
    return (
        <div class="modal fade" id="anthony" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Anthony Ramos</h5>
                <h6>John Laurens/Philip Hamilton</h6>
                
            </div>
            <div class="modal-body">
            <img src={anthony} className="about-photo"  />
                <p className="cast-info">
                Ramos’ star is another one that is fast-rising—particularly in Hollywood. Ramos was a series regular on Spike Lee’s Netflix series She’s Gotta Have It, came to the big screen alongside Bradley Cooper and Lady Gaga in A Star Is Born, and in 2019, played the role of Corporal Martinez in Godzilla: King of Monsters. His solo album dropped October 2019. He has voiced a character on Disney’s Elena of Avalor and the upcoming Trolls World Tour. He will play Usnavi de la Vega in the upcoming In The Heights movie, and was recently cast in the new sci-fi comedy feature Distance.
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
export default Anthony