import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/DetailsMain.css'
import rate from '../../assets/rate.png'
import disableRate from '../../assets/disable-rate.png'
import DropDownDetails from '../DropDownDetails'


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
            <section className='details'>
                <img className='details-img' src={logement && logement.pictures[0]} alt="pictures"/>
                <div className='details-description'>
                    <div className='title-location'>
                        <h1>{ logement && logement.title }</h1>
                        <h2>{ logement && logement.location }</h2>
                    </div>
                    <div className='host'>
                        <h2 className='host-name'>{ logement && logement.host.name }</h2>
                        <img src={logement && logement.host.picture} alt='host picture'/>
                    </div>
                </div>
            </section> 

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