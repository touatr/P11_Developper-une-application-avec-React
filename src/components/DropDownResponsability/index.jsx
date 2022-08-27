import React, { useState } from 'react'
import '../../styles/DropDown.css'
import cover  from '../../assets/downIcon.png'

function DropDownResponsability() {
    const [active, setActive] = useState(false)

    return active ? (
            <div className="drop-down drop-down-service">
                <div className='title-img'>
                    <h2>Responsabilité</h2>
                    <img className='hidden-icon' src={cover} alt="down-icon"
                    onClick = {() => setActive(false)}/>
                </div>
                <div className='drop-down-description'>
                    <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire 
                    ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </div>
                <br/>
            </div>
    ) : 
    (
        <div className="drop-down drop-down--hidden">
            <div className='title-img'>
                <h2>Responsabilité</h2>
                <img className='hidden-icon display-icon' src={cover} alt="down-icon"
                onClick = {() => setActive(true)}/>
            </div>
        </div>
    )
}

export default DropDownResponsability