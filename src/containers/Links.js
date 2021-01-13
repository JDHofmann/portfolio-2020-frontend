import React from 'react'

const Links = (props) => {

    const gridLength = props.links.length + 1

    const grid = {
        gridTemplateRows: `repeat(${gridLength}, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    const renderSpan = (l) => {
        let i = props.links.indexOf(l);
        if( i === props.links.length -1) return
        
        else if(i === props.links.length-2){
            return <span className="box box-item-end br-br"></span>
        } else {
            return <span className={`box box-${i}`}></span>
        }
    }

    const renderLinks = () => {
        return props.links.map( l =>  
            <>
            <a 
                className={`sub-item row-${props.links.indexOf(l)}`}
                rel="noreferrer" 
                href={l.linkUrl} 
            ><h3>{l.linkText}</h3></a>
            {renderSpan(l)}
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