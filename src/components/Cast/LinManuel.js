import React from 'react'
import lin2 from '../../images/lin2.jpeg'
const LinManuel = () => {
    return (
        <div class="modal fade" id="lin-manuel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Lin-Manuel Miranda</h5>
                <h6>Alexander Hamilton</h6>
                
            </div>
            <div class="modal-body">
            <img src={lin2} className="about-photo"  />
                <p className="cast-info">
                Rarely a day goes by that Miranda doesn’t make news, but in case you’ve been living like our forefathers in 1776 here’s an update. Since departing Broadway’s Hamilton July 9, 2016, Miranda hosted the October 8, 2016, episode of Saturday Night Live—featuring the epic “Crucible Cast Party” and earning an Emmy nomination—and earned an Oscar nomination for Best Original Song for Moana. He’s been announced as a contributing composer to the Disney’s live action The Little Mermaid; he played the leading man in Mary Poppins Returns; and he composed and recorded the new theme song to Netflix’s cartoon reboot Magic School Bus Rides Again. As a producer, he is creating a television series of the best-selling Kingkiller Chronicle books for Showtime. A verified public figure, Miranda has helped raise millions of dollars and awareness for Puerto Rico after it was ravaged by Hurricane Maria; his single “Almost Like Praying” gathered Grammy-winning Latin pop stars to record the original song in support of the U.S. commonwealth. And those are just the highlights. Miranda reprised the role of A. Ham in the 2019 Puerto Rican production of his Tony- and Pulitzer-winning Hamilton. He executive produced and appeared in the 17-time Emmy-nominated FX series Fosse/Verdon. He guested on Broadway in Freestyle Love Supreme, and a documentary about the hip-hop improv group recently screened at the 2020 Sundance Film Festival and coming to Hulu July 17. He appears in the series His Dark Materials. The In The Heights movie, of Miranda’s first Tony-winning musical, will debut in the summer of 2021. Miranda is also directing the movie musical adaptation of Jonathan Larson’s tick, tick...BOOM!. Just announced, he’s writing the music to a new Disney animated movie set in Colombia.
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
export default LinManuel