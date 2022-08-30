import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/DetailsMain.css'
import rate from '../../assets/rate.png'
import disableRate from '../../assets/disable-rate.png'
import DropDownDetails from '../DropDownDetails'
import GalleryDetails from '../GalleryDetails'


function DetailsMain({ logements }) {
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
                    <img className='rate' src={rate} alt='rate'/>
                    <img className='rate' src={rate} alt='rate'/>
                    <img className='rate' src={rate} alt='rate'/>
                    <img className='rate' src={disableRate} alt='rate'/>
                    <img className='rate' src={disableRate} alt='rate'/>
                </div>
            </section>
            <DropDownDetails logements = {logements}/>
        </main> 
    )
}

export default DetailsMain