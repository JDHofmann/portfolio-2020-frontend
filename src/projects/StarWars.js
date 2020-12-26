import React from 'react'

import Links from '../containers/Links'

export const StarWars = () => {

    const links = [
        {linkUrl: "https://jdhofmann.github.io/Star-Wars-Quiz/",
        linkText: "Live Demo"},
        {linkUrl: "https://github.com/JDHofmann/Star-Wars-Quiz",
        linkText: "Github Repo"}
    ]

    return ( 
        <>  
        <li>
            <div className="li-project-grid grid">
                <h2>Star Wars</h2>
                <span className="line"></span>
                <span className="box bt-light br-tr"></span>
                <p 
                    className="subtitle"
                >Movie Trivia Game</p>
                <span className="box box-item-1-2-end br-br"></span>
                <p className="description-sub-item">A trivia game that tests your knowledge of Star Wars. The quiz is 10 questions where you can find out if you have what it takes to become a Jedi Master. Built with HTML5, CSS, Javascript, and Jquery.</p>
            </div>
        </li>
        <Links links={links}/>
        </>
    )
}