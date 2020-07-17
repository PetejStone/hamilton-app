import React from 'react'
import {Parallax, Background} from 'react-parallax'
const About = () => {
    return (
        <Parallax className='about' 
        bgImage={require('../images/hamiltonguys.jpg')}
        bgImageAlt="the cat"
        bgImageSizes="10%"
        strength={200}>
            <p>Hamilton: An American Musical, simply known as Hamilton, is a musical with music, 
            lyrics, and book by Lin-Manuel Miranda. It tells the story of American Founding Father Alexander 
            Hamilton. Inspired by the 2004 biography Alexander Hamilton by Ron Chernow, the show draws heavily 
            from hip hop, as well as R&B, pop, soul, and traditional-style show tunes; and it casts non-white actors 
            as the Founding Fathers and other historical figures. 
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-Cote-1" target="_blank"><sup>[1]</sup></a>
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-mead-2" target="_blank"><sup>[2]</sup></a>
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-atlantic-3" target="_blank"><sup>[3]</sup></a> Miranda described Hamilton as about "America 
            then, as told by America now".
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-4" target="_blank"><sup>[4]</sup></a> 
            </p>
            
            <p>
            From its opening, Hamilton received critical acclaim.
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-Economist2015-5" target="_blank"><sup>[5]</sup></a>
             It premiered 
            Off-Broadway on February 17, 2015, at the Public Theater, where its several-month engagement was sold out;
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-Revolutionary-6" target="_blank"><sup>[6]</sup></a> 
            it won eight Drama Desk Awards, including Outstanding Musical. It then transferred to the Richard Rodgers Theatre 
            on Broadway, opening on August 6, 2015, where it received uniformly positive reviews and high box office sales.
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-paulson2015-7" target="_blank"><sup>[7]</sup></a> 
            At the 2016 Tony Awards, Hamilton received a record 16 nominations and won 11 awards, including Best Musical. It 
            received the 2016 Pulitzer Prize for Drama. 
            </p>

            <p>
            The Chicago production of Hamilton began preview performances at the 
            CIBC Theatre in September 2016 and opened the following month.
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-chicago-8" target="_blank"><sup>[8]</sup></a>
             The West End production opened at the Victoria 
            Palace Theatre in London in December 2017, winning seven Olivier Awards in 2018, including Best New Musical.
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-WestEnd2017-9" target="_blank"><sup>[9]</sup></a> 
            The first U.S. national tour began in March 2017.
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-10" target="_blank"><sup>[10]</sup></a>
             A second U.S. tour opened in February 2018.
             <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-Desk-11" target="_blank"><sup>[11]</sup></a>
              Hamilton's third U.S. tour began January 11, 2019, with a three-week engagement in Puerto Rico featuring Miranda as Hamilton.
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-12" target="_blank"><sup>[12]</sup></a>
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)#cite_note-13" target="_blank"><sup>[13]</sup></a>
            <br></br>
            <a href="https://en.wikipedia.org/wiki/Hamilton_(musical)" target="_blank">-Wikipedia</a>
            </p>
        </Parallax>
    )
}
export default About