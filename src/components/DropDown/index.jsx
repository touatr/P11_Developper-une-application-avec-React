import React, { useState } from 'react'
import '../../styles/DropDown.css'
import { dropDownData } from '../../data/dropDownData'
import cover  from '../../assets/downIcon.png'

function DropDown() {
    const [active, setActive] = useState(-1)
    function handleClick(index) {
        
        setActive(index === active ? -1 : index)
    }
    return (
        <div className='container'>
            {
                dropDownData.map(({id, title, description}, index) => (
                    <div key={id} className="drop-down">
                        <h2>{title}</h2>
                        <img src={cover} alt="down-icon" onClick = {() => {handleClick(index)}}/>
                        {active === index && (<div className='drop-down-description'>
                            <p>{description}</p>
                        </div>)}
                         
                    </div>
                ))
            }
        </div>
    )
}

export default DropDown