import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import '../../styles/DropDownDetails.css'
import cover  from '../../assets/downIcon.png'

function DropDownDescription({ logements }) {
     // Get the userId param from the URL.
     let { logementId } = useParams()
     const [ logement, setLogement ] = useState(undefined)
     useEffect(() => {
         if(logement === undefined) {
             const tmpLogement = logements.find(logement => logement.id == logementId)
             if(tmpLogement === null) {
                 //rediriger vers 404
             }
             setLogement(tmpLogement)
         }
     })
    const [active, setActive] = useState(false)

    return active ? (
            <div className='drop-downs drop-downs--description'>
                <div className="drop-down-details">
                    <div className='title-img' >
                        <h2>Description</h2>
                        <img  className='hidden-icon' src={cover} alt="down-icon"
                        onClick={() => setActive(false)}/>
                    </div>
                    <div className='drop-down-text' ><p>{logement && logement.description}</p></div>
                </div>
                <br/>
            </div>
        ) : (
        <div className='drop-downs'>
            <div className="drop-down-details">
                <div className='title-img' >
                    <h2>Description</h2>
                    <img className='hidden-icon display-icon' src={cover} alt="down-icon"
                    onClick={() => setActive(true)}/>
                </div>
            </div>
        </div>
    )
}

export default DropDownDescription