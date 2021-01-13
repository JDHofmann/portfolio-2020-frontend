import React from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '../store.js'

const Projects = () => {


    const renderSpan = (pj) => {
        let i = projects.indexOf(pj);
        if( i === projects.length -1) return
        
        else if(i === projects.length-2){
            return <span className="box box-item-end br-br"></span>
        } else {
            return <span className={`box box-${i}`}></span>
        }
    }

    // const renderRow = (pj) => {
    //     switch (){
    //         case 0:
    //             return "{ gridRow: '3/5'}"
    //         break
    //        default:
    //             return "{ gridRow: '5/7'}"
    //             break
    //         // default:
    //         //     let row = projects.indexOf(pj)*2
    //         //     return `${row + 3}/${row + 5}`
    //     }
    // }

    const renderProjectLinks = () => {
        return projects.map( pj =>  
            <>
            <NavLink
                // style={renderRow(pj)}
                // style={{ gridRow: '3/5'}}
                key={pj.title}
                to={pj.path}
                className={`sub-item row-${projects.indexOf(pj)}`}
            ><h3>{pj.title}</h3>
            </NavLink>
            {renderSpan(pj)}
            </>
        )
    }

    return (
            <li>
                <div className="li-project-grid grid">
                    <h2>Featured Projects</h2>
                    <span className="line"></span>
                    <span className="box bt-light br-tr"></span>
                    {renderProjectLinks()}
                    {/* <span className="box box-item-1-2"></span> */}

                    {/*  */}
                </div>
            </li>
    )
}

export default Projects