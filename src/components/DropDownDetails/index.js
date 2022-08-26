import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import '../../styles/DropDownDetails.css'
import cover  from '../../assets/downIcon.png'

function DropDownDetails({ logements }) {
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
    const [active, setActive] = useState(-1)
    function handleClick(index) {
        
        setActive(index === active ? -1 : index)
    }
    return (
        <div className='container'>
            {
                <div className='drop-downs'>
                    <div className="drop-down-details">
                        <h2>Description</h2>
                        <img src={cover} alt="down-icon"/>
                        <div className='drop-down-text' ><p>{logement && logement.description}</p></div>
                    </div>
                    <div className="drop-down-details">
                        <h2>Equipements</h2>
                        <img src={cover} alt="down-icon"/>
                        {
                            <div className='drop-down-text'>
                                {logement && logement.equipments.map((equipment) => (
                                    <p key={equipment} className='equipment'>{equipment}</p>
                                ))}
                            </div>
                        }
                        <br/>
                    </div>
                </div>
            }
        </div>
    )
}

export default DropDownDetails