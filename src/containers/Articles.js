// import { NavLink } from 'react-router-dom'


export default function Articles({articles}){

    const gridLength = () => {
        return articles === null ?  0 : articles.length + 1
    } 

    const grid = {
        gridTemplateRows: `repeat(${gridLength()}, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    const renderSpan = (a) => {
        let i = articles.indexOf(a);
        if( i === articles.length - 1){
            return <span className={`path path-end path-${i} br-br`}></span>
        } else {
            return <span className={`path path-${i}`}></span>
        }
    }

    const renderArticleLinks = () => {
        return articles.map( a => 
            <>
            {renderSpan(a)}
            <a
                key={a.title}
                href={a.canonical_url}
                className={`sub-item row-${articles.indexOf(a)}`}
            ><h3>{a.title}</h3>
            </a>
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
                    {/* {console.log(articles)} */}
                </>
                }
            </div>
        </li>
    )
}