import React, { useState, useEffect } from 'react';


export default function Article(){

    const [ article, setArticle ] = useState(null)

    useEffect( async () => {
        const result = await fetch(`https://dev.to/api/articles/589849`)
        const data = await result.json()
        setArticle(data)
    }, [])

    const renderArticle = () => {
        return article === null ? <p>loading...</p> :
        <>
        <h1>{article.title}</h1>
        {`${article.body_markdown}`}
        </>
    }

    return(
        <div>
            {renderArticle()}
            {console.log(article)}
        </div>
    )
}