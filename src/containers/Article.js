import React, { useState, useEffect } from 'react';
import matter from 'gray-matter'

export default function Article(){

    const [ article, setArticle ] = useState(null)
    const [ title, setTitle ] = useState(null)

    useEffect( () => {
        fetchData()
      }, [])
      
      const fetchData = async() => {
        const result = await fetch(`https://dev.to/api/articles/589849`)
        const data = await result.json()
        setTitle(data.title)
        setArticle(matter(data.body_markdown))
      }

    const renderArticle = () => {
        return article === null ? <p>loading...</p> :
        <>
        <h1>{title}</h1>
        <div>{article.content}</div>
        
        </>
    }

    return(
        <div>
            {renderArticle()}
            {/* {console.log(article)} */}
        </div>
    )
}