import React, { useState, useEffect } from 'react';


export default function Articles(){

    const [articles, setArticles] = useState(null)
    const [gridLength, setGridLength] = useState(0)

    useEffect(() => {
        fetch(`https://dev.to/api/articles?username=jdbrewerhofmann`)
        .then(resp => resp.json())
        .then(console.log)
    })

    // const gridLength = articles.length + 1
    // const gridLength = 3

    const grid = {
        gridTemplateRows: `repeat(${gridLength}, minmax(35px, 5vh) minmax(35px, auto) )`
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
                    {/* render article links here */}
                </>
                }
            </div>
        </li>
    )
}