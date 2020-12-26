import React from 'react'



const Links = (props) => {
    // console.log(props.links)
    // const renderLinks = () => {
    //     return props.links.map( link => <>
        
    //     </> )
    // }
    return (
        <li>
            <div className="li-project-grid grid">
                <h2>Links to more</h2>
                <span className="line"></span>
                <span className="box bt-light br-tr"></span>
                <a 
                    className="sub-item"
                    target="_blank"
                    rel="noreferrer" 
                    href={props.links[0].linkUrl} 
                ><h3>{props.links[0].linkText}</h3></a>
                <span className={props.links[2]? "box box-item-1-2" : "box box-item-1-end br-br"}></span>
                <a 
                    className="sub-item sub-item-2"
                    target="_blank"
                    rel="noreferrer" 
                    href={props.links[1].linkUrl} 
                ><h3>{props.links[1].linkText}</h3></a>
                { props.links[2]? 
                <>
                <span className="box box-item-end br-br "></span>
                <a 
                    className="sub-item sub-item-3 email"
                    target="_blank"
                    rel="noreferrer" 
                    href={props.links[2].linkUrl}
                ><h3>{props.links[2].linkText}</h3></a> 
                </>
                : console.log("no") }
            </div>
        </li>
    )
}
export default Links