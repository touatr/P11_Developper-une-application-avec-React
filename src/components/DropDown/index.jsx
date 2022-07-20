import React from 'react'
import '../../styles/DropDown.css'
import { dropDownData } from '../../data/dropDownData'
import cover  from '../../assets/downIcon.png'

function DropDown() {
    const dropDown = React.createRef()
    const icon = React.createRef()
    function handleClick() {
        dropDown.current.style.display = "block"
        icon.current.style.transform = "rotate(180deg)"
    }
    return (
        <div className='container'>
            {
                dropDownData.map(({id, title, description}) => (
                    <div key={id} className="drop-down">
                        <h2>{title}</h2>
                        <img ref={icon} src={cover} alt="down-icon" onClick = {handleClick}/>
                         <div ref={dropDown} key={id} className='drop-down-description'>
                            <p>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DropDown