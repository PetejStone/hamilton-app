import React from 'react'
import jasmine from '../../images/jasmine.jpeg'
const Jasmine= () => {
    return (
        <div class="modal fade" id="jasmine" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
                <h5 class="modal-title" id="exampleModalLongTitle">Jasmine Cephas Jones</h5>
                <h6>Peggy Schuyler/Maria Reynolds</h6>
                
            </div>
            <div class="modal-body">
            <img src={jasmine} className="about-photo"  />
                <p className="cast-info">
                The youngest Schuyler sister was the last of the original cast members to leave the Broadway production. Since exiting, she joined her Schuyler sisters in the Star-Spangled Banner for the 2017 Super Bowl and guested on HBO’s Girls. She starred in Diggs’ film Blindspotting and has also appeared on screen in Monsters and Men and Dog Days as well as the series Mrs. Fletcher. Most recently, she stared as Roxanne in the Off-Broadway musical Cyrano opposite Peter Dinklage’s Cyrano de Bergerac, which earned her a nomination at the inaugural Antonyo Awards this year.
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
export default Jasmine