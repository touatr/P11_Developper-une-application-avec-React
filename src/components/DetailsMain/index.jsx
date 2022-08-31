import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/DetailsMain.css'
import rate from '../../assets/rate.png'
import disableRate from '../../assets/disable-rate.png'
import DropDownDetails from '../DropDownDetails'
import GalleryDetails from '../GalleryDetails'


function DetailsMain({ logements }) {
    // Get the userId param from the URL.
    let { logementId } = useParams()
    let navigate = useNavigate()
    const [ logement, setLogement ] = useState(undefined)
    useEffect(() => {
        if(logement === undefined) {
            //find permet de trouver un élément d'un tableau
            const tmpLogement = logements.find(logement => logement.id == logementId)
            if(tmpLogement === undefined) {
                //rediriger vers 404
                navigate('/404', {replace: true})
            }
            setLogement(tmpLogement)
        }
    })
    return (
        <main>
            <GalleryDetails logements = {logements}/>
            <section className='tags-rating'>
                <div className='tags'>
                    {
                        logement && logement.tags.map((tag) => (
                            <div key={tag} className='tag'>
                                <p>{tag}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='rating'>
                    {[1,2,3,4,5].map((item) => (
                        <img key={item} className='rate' src={logement && logement.rating  >= item ?
                             rate : disableRate} alt='rate'/>
                    ))}
                    
                </div>
            </section>
            <DropDownDetails logements = {logements}/>
        </main> 
    )
}

export default DetailsMain