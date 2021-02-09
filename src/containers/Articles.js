// import React, { useState, useEffect } from 'react';


export default function Articles({articles}){

    // const [articles, setArticles] = useState(null)
    // const [gridLength, setGridLength] = useState(0)

    // useEffect(() => {
    //     fetch(`https://dev.to/api/articles?username=jdbrewerhofmann`)
    //     .then(resp => resp.json())
    //     .then(console.log)
    // })

    const gridLength = () => {
        return articles === null ?  0 : articles.length + 1
    } 

    const grid = {
        gridTemplateRows: `repeat(${gridLength()}, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    // const renderSpan = (pj) => {
    //     let i = projects.indexOf(pj);
    //     if( i === projects.length - 1){
    //         return <span className={`path path-end path-${i} br-br`}></span>
    //     } else {
    //         return <span className={`path path-${i}`}></span>
    //     }
    // }

    const renderArticleLinks = () => {
        return articles.map( a => 
            <>
            <h3>{a.title}</h3>
            <p>{a.id}</p>
            {/* {renderSpan(pj)}
            <NavLink
                key={pj.title}
                to={pj.path}
                className={`sub-item row-${projects.indexOf(pj)}`}
            ><h3>{pj.title}</h3>
            </NavLink> */}
            </>
        )
    }

    return (
        <li>
            <div 
                style={grid}
                className="grid">
                <h2>Recent Articles</h2>
                { articles === null ? null :
                <>
                    <span className="line"></span>
                    { renderArticleLinks() }
                    {console.log(articles)}

                </>
                }
            </div>
        </li>
    )
}