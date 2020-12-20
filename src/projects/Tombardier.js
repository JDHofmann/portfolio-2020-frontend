import React from 'react'
import Slider from './Slider'
import tom01 from '../images/tombardier01.png'
import zen from '..//images/zen.png'

export const Tombardier = () => {

    const images = [tom01, zen];

    return (
        <div className="main content">
            <h2>Tombardier</h2>
            <p>Web portfolio building made simple</p>
            <p>Tombardier comes out of the box ready to provide users with their own personal portfolio site. With an inline editable UI, users can edit content right in their browsers.</p>
            <Slider 
                images={images}
            />
            <div>
                <h3>Links</h3>
                <a href="https://github.com/JDHofmann/tombardier-frontend-dev">Frontend Repository</a>
                <a href="https://github.com/JDHofmann/tombardier-bakendend-dev">Backend Repository</a>
            </div>
        </div>
    )
}