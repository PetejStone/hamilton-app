import React from 'react'
import renee2 from '../../images/renee2.jpeg'
const Renee = () => {
    return (
        <div class="modal fade" id="renee" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Renée Elise Goldsberry</h5>
                <h6>Angelica Schuyler</h6>
                
            </div>
            <div class="modal-body">
            <img src={renee2} className="about-photo"  />
                <p className="cast-info">
                Just like her Hamilton character, Goldsberry has been championing the untold stories of strong women. After winning the Tony for her work as the eldest Schuyler, she starred as the title character in HBO’s The Immortal Life of Henrietta Lacks, about an African-American woman who became the unwitting pioneer to produce the first immortal human cell line. She appeared in The House with a Clock in its Walls, starring Cate Blanchett and Jack Black, and was a part of the cast of Documentary Now!’s Sondheim-spoof episode “Original Cast Album: Co-op” and is a regular on Altered Carbon. She is also the voice of Ms. Nowhere on Fast & Furious Spy Racers. She guest starred as Eva Price on NBC ’s first season of new musical series Zoey’s Extraordinary Playlist.
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
export default Renee