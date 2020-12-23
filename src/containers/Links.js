import React from 'react'

const Links = (props) => {
    // console.log(props.links)
    return (
        <li>
            <div className="li-project-grid grid">
                <h2>Links to other places</h2>
                <span className="line"></span>
                <span className="box bt-light br-tr"></span>
                <a 
                    className="sub-item"
                    target="_blank"
                    rel="noreferrer" 
                    href={props.links[0].linkUrl} 
                ><h3>{props.links[0].linkText}</h3></a>
                <span className="box box-item-1-2"></span>
                <a 
                    className="sub-item sub-item-2"
                    target="_blank"
                    rel="noreferrer" 
                    href={props.links[1].linkUrl} 
                ><h3>{props.links[1].linkText}</h3></a>
                <span className="box box-item-end br-br "></span>
                <a 
                    className="sub-item sub-item-3 email"
                    target="_blank"
                    rel="noreferrer" 
                    href={props.links[2].linkUrl}
                ><h3>{props.links[2].linkText}</h3></a>
            </div>
        </li>
    )
}
export default Links