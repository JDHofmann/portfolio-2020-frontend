import React from 'react'

const Links = (props) => {

    const gridLength = props.links.length + 1

    const grid = {
        gridTemplateRows: `repeat(${gridLength}, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    const renderSpan = (l) => {
        let i = props.links.indexOf(l);
        if( i === props.links.length - 1){
            return <span className={`path path-end path-${i} br-br`}></span>
        } else {
            return <span className={`path path-${i}`}></span>
        }
    }

    const renderLinks = () => {
        return props.links.map( l =>  
            <>
            {renderSpan(l)}
            <a 
                className={`sub-item row-${props.links.indexOf(l)}`}
                rel="noreferrer" 
                href={l.linkUrl} 
            ><h3>{l.linkText}</h3></a>
            </>
        )
    }

    return (
        <li>
            <div 
                style={grid}
                className="grid"
            >
                <h2>Links to more</h2>
                <span className="line"></span>
                <span className="box bt-light br-tr"></span>
                {renderLinks()}
            </div>
        </li>
    )
}
export default Links