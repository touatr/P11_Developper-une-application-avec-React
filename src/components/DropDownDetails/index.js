import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import '../../styles/DropDownDetails.css'
import cover  from '../../assets/downIcon.png'
import DropDownDescription from '../DropDownDescription'
import DropDownEquipment from '../DropDownEquipment'

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
    const [active, setActive] = useState(false)

     return (
        <div className='drop-downs' >
             <DropDownDescription logements={logements}/>
             <DropDownEquipment logements={logements}/>
        </div>
     )

    return active ? (
        <div className='container'>
            {
                <div className='drop-downs'>
                    <div className="drop-down-details">
                        <div className='title-img' >
                            <h2>Description</h2>
                            <img  className='hidden-icon' src={cover} alt="down-icon"
                            onClick={() => setActive(false)}/>
                        </div>
                        <div className='drop-down-text' ><p>{logement && logement.description}</p></div>
                    </div>
                    <div className="drop-down-details">
                        <div className='title-img' >
                            <h2>Equipements</h2>
                            <img  className='hidden-icon' src={cover} alt="down-icon"
                            onClick={() => setActive(false)}/>
                        </div>
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
    ) : (
        <div className='container'>
            {
                <div className='drop-downs'>
                    <div className="drop-down-details">
                        <div className='title-img' >
                            <h2>Description</h2>
                            <img className='hidden-icon display-icon' src={cover} alt="down-icon"
                            onClick={() => setActive(true)}/>
                        </div>
                    </div>
                    <div className="drop-down-details">
                        <div className='title-img' >
                            <h2>Equipements</h2>
                            <img className='hidden-icon display-icon' src={cover} alt="down-icon"
                            onClick={() => setActive(true)}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DropDownDetails