import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import '../../styles/DropDownDetails.css'
import arrow  from '../../assets/arrow.png'
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

     return (
        <div className='drop-downs' >
             <DropDownDescription logements={logements}/>
             <DropDownEquipment logements={logements}/>
        </div>
     )
}

export default DropDownDetails